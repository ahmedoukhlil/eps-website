import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { sendApplicationEmail, sendConfirmationEmailToCandidate } from '@/lib/email';

// Dossier pour stocker les CVs
const CVS_DIR = join(process.cwd(), 'public', 'uploads', 'cvs');
const APPLICATIONS_FILE = join(process.cwd(), 'data', 'applications.json');

// Interface pour les candidatures
interface Application {
  id: number;
  jobId: number;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  experience?: string;
  motivation: string;
  cvPath: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
}

// Fonction pour lire les candidatures
async function readApplications(): Promise<Application[]> {
  try {
    if (!existsSync(APPLICATIONS_FILE)) {
      return [];
    }
    const fs = await import('fs');
    const content = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Erreur lecture applications:', error);
    return [];
  }
}

// Fonction pour écrire les candidatures
async function writeApplications(applications: Application[]): Promise<void> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const dataDir = path.join(process.cwd(), 'data');
    
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erreur écriture applications:', error);
    throw error;
  }
}

// POST - Créer une nouvelle candidature
export async function POST(request: NextRequest) {
  try {
    // Créer le dossier pour les CVs s'il n'existe pas
    if (!existsSync(CVS_DIR)) {
      await mkdir(CVS_DIR, { recursive: true });
    }

    const formData = await request.formData();
    
    const jobId = parseInt(formData.get('jobId') as string);
    const jobTitle = formData.get('jobTitle') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string || '';
    const experience = formData.get('experience') as string || '';
    const motivation = formData.get('motivation') as string;
    const cvFile = formData.get('cv') as File;

    // Validation
    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json({ error: 'Le CV est requis' }, { status: 400 });
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Le fichier CV ne doit pas dépasser 5MB' }, { status: 400 });
    }

    // Générer un nom de fichier unique
    const timestamp = Date.now();
    const sanitizedName = `${firstName}_${lastName}_${timestamp}`.replace(/[^a-zA-Z0-9_]/g, '_');
    const fileExtension = cvFile.name.split('.').pop();
    const fileName = `${sanitizedName}.${fileExtension}`;
    const filePath = join(CVS_DIR, fileName);

    // Sauvegarder le fichier
    const bytes = await cvFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Chemin relatif pour l'accès web
    const cvPath = `/uploads/cvs/${fileName}`;

    // Lire les candidatures existantes
    const applications = await readApplications();

    // Créer la nouvelle candidature
    const newId = applications.length > 0 ? Math.max(...applications.map(a => a.id)) + 1 : 1;
    const newApplication: Application = {
      id: newId,
      jobId,
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      address,
      experience,
      motivation,
      cvPath,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };

    applications.push(newApplication);
    await writeApplications(applications);

    // Envoyer l'email à l'administrateur avec le CV
    try {
      const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_EMAIL || 'contact@eps.mr';
      
      // Lire le fichier CV pour l'envoyer en pièce jointe
      const cvFileContent = await readFile(filePath);
      
      await sendApplicationEmail(
        adminEmail,
        {
          jobTitle,
          firstName,
          lastName,
          email,
          phone,
          address,
          experience,
          motivation,
          cvPath,
          cvFileName: fileName,
        },
        cvFileContent,
        fileName
      );

      // Envoyer un email de confirmation au candidat (optionnel, ne bloque pas si ça échoue)
      try {
        await sendConfirmationEmailToCandidate(email, `${firstName} ${lastName}`, jobTitle);
      } catch (confirmationError) {
        console.warn('Email de confirmation non envoyé:', confirmationError);
        // On continue même si l'email de confirmation échoue
      }
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError);
      // On continue quand même car la candidature est sauvegardée
      // Vous pouvez choisir de retourner une erreur si vous voulez que l'envoi email soit obligatoire
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Candidature envoyée avec succès',
      applicationId: newId 
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur POST /api/applications:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi de la candidature' 
    }, { status: 500 });
  }
}

// GET - Récupérer les candidatures (pour l'admin)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const jobId = searchParams.get('jobId');

    const applications = await readApplications();

    if (jobId) {
      const filtered = applications.filter(a => a.jobId === parseInt(jobId));
      return NextResponse.json(filtered);
    }

    return NextResponse.json(applications);
  } catch (error) {
    console.error('Erreur GET /api/applications:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

