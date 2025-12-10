import { NextRequest, NextResponse } from 'next/server';
import { fetchJobs, fetchJob } from '@/lib/wordpress';
import { convertAllJobs, convertWPJobToJobPosting } from '@/lib/wordpress-adapters';

// GET - Récupérer toutes les carrières ou une carrière spécifique depuis WordPress
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const activeOnly = searchParams.get('activeOnly') === 'true';

    // Récupérer une carrière spécifique par ID
    if (id) {
      const wpJob = await fetchJob(Number(id));
      if (!wpJob) {
        return NextResponse.json({ error: 'Carrière non trouvée' }, { status: 404 });
      }
      
      const job = convertWPJobToJobPosting(wpJob);
      return NextResponse.json(job);
    }

    // Récupérer toutes les carrières
    const wpJobs = await fetchJobs(activeOnly);
    
    if (!wpJobs || wpJobs.length === 0) {
      return NextResponse.json([]);
    }

    // Convertir les jobs WordPress en carrières
    const careers = convertAllJobs(wpJobs);
    
    return NextResponse.json(careers);
  } catch (error) {
    console.error('Erreur GET /api/careers:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST, PUT, DELETE - Les opérations de création/modification/suppression
// doivent être effectuées directement dans WordPress via l'interface d'administration

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les offres d\'emploi doivent être créées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des offres d\'emploi'
  }, { status: 405 });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les offres d\'emploi doivent être modifiées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des offres d\'emploi'
  }, { status: 405 });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les offres d\'emploi doivent être supprimées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des offres d\'emploi'
  }, { status: 405 });
}

