import nodemailer from 'nodemailer';

// Configuration du transporteur email
const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER || '';
  const smtpPassword = process.env.SMTP_PASSWORD || '';
  const emailFrom = process.env.EMAIL_SERVICE_FROM || smtpUser || 'noreply@eps.mr';

  if (!smtpUser || !smtpPassword) {
    console.warn('⚠️ Configuration SMTP manquante. Les emails ne seront pas envoyés.');
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true pour 465, false pour les autres ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
};

// Interface pour les données de candidature
export interface ApplicationEmailData {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  experience?: string;
  motivation: string;
  cvPath: string;
  cvFileName: string;
}

// Envoyer un email de candidature à l'administrateur
export async function sendApplicationEmail(
  adminEmail: string,
  applicationData: ApplicationEmailData,
  cvBuffer: Buffer,
  cvFileName: string
): Promise<void> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.warn('⚠️ Configuration email non disponible. L\'email ne sera pas envoyé, mais la candidature est sauvegardée.');
    return; // Ne pas lever d'erreur, juste retourner silencieusement
  }

  const emailFrom = process.env.EMAIL_SERVICE_FROM || process.env.SMTP_USER || 'noreply@eps.mr';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'EPS - El Baraka Prestations de Service';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border: 1px solid #e5e7eb;
        }
        .info-section {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .info-row {
          margin: 10px 0;
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #1f2937;
          display: inline-block;
          width: 150px;
        }
        .value {
          color: #4b5563;
        }
        .motivation {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid #10b981;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 12px;
          border-top: 1px solid #e5e7eb;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">Nouvelle Candidature</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">${siteName}</p>
      </div>
      
      <div class="content">
        <div class="info-section">
          <h2 style="margin-top: 0; color: #1f2937;">Informations du Candidat</h2>
          
          <div class="info-row">
            <span class="label">Poste :</span>
            <span class="value">${applicationData.jobTitle}</span>
          </div>
          
          <div class="info-row">
            <span class="label">Nom complet :</span>
            <span class="value">${applicationData.firstName} ${applicationData.lastName}</span>
          </div>
          
          <div class="info-row">
            <span class="label">Email :</span>
            <span class="value"><a href="mailto:${applicationData.email}">${applicationData.email}</a></span>
          </div>
          
          <div class="info-row">
            <span class="label">Téléphone :</span>
            <span class="value"><a href="tel:${applicationData.phone}">${applicationData.phone}</a></span>
          </div>
          
          ${applicationData.address ? `
          <div class="info-row">
            <span class="label">Adresse :</span>
            <span class="value">${applicationData.address}</span>
          </div>
          ` : ''}
        </div>

        ${applicationData.experience ? `
        <div class="info-section">
          <h2 style="margin-top: 0; color: #1f2937;">Expérience Professionnelle</h2>
          <p style="white-space: pre-wrap; color: #4b5563;">${applicationData.experience}</p>
        </div>
        ` : ''}

        <div class="motivation">
          <h2 style="margin-top: 0; color: #1f2937;">Lettre de Motivation</h2>
          <p style="white-space: pre-wrap; color: #4b5563;">${applicationData.motivation}</p>
        </div>

        <div class="info-section">
          <p style="margin: 0; color: #4b5563;">
            <strong>📎 CV joint :</strong> ${cvFileName}
          </p>
        </div>
      </div>

      <div class="footer">
        <p>Cet email a été envoyé automatiquement depuis le site ${siteName}</p>
        <p>Date : ${new Date().toLocaleString('fr-FR', { 
          dateStyle: 'full', 
          timeStyle: 'short' 
        })}</p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Nouvelle Candidature - ${siteName}

Poste : ${applicationData.jobTitle}

Informations du Candidat :
- Nom complet : ${applicationData.firstName} ${applicationData.lastName}
- Email : ${applicationData.email}
- Téléphone : ${applicationData.phone}
${applicationData.address ? `- Adresse : ${applicationData.address}` : ''}

${applicationData.experience ? `Expérience Professionnelle :\n${applicationData.experience}\n` : ''}

Lettre de Motivation :
${applicationData.motivation}

CV joint : ${cvFileName}

Date : ${new Date().toLocaleString('fr-FR')}
  `;

  try {
    await transporter.sendMail({
      from: `"${siteName}" <${emailFrom}>`,
      to: adminEmail,
      subject: `Nouvelle candidature : ${applicationData.jobTitle} - ${applicationData.firstName} ${applicationData.lastName}`,
      text: textContent,
      html: htmlContent,
      attachments: [
        {
          filename: cvFileName,
          content: cvBuffer,
        },
      ],
    });

    console.log(`✅ Email de candidature envoyé à ${adminEmail}`);
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}

// Envoyer un email de confirmation au candidat
export async function sendConfirmationEmailToCandidate(
  candidateEmail: string,
  candidateName: string,
  jobTitle: string
): Promise<void> {
  const transporter = createTransporter();
  
  if (!transporter) {
    // Si pas de configuration email, on ne fait rien (pas d'erreur)
    return;
  }

  const emailFrom = process.env.EMAIL_SERVICE_FROM || process.env.SMTP_USER || 'noreply@eps.mr';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'EPS - El Baraka Prestations de Service';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border: 1px solid #e5e7eb;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">Candidature Reçue</h1>
      </div>
      
      <div class="content">
        <p>Bonjour ${candidateName},</p>
        
        <p>Nous avons bien reçu votre candidature pour le poste de <strong>${jobTitle}</strong>.</p>
        
        <p>Notre équipe va examiner votre dossier et vous contactera dans les plus brefs délais.</p>
        
        <p>Nous vous remercions de votre intérêt pour rejoindre ${siteName}.</p>
        
        <p>Cordialement,<br>
        L'équipe ${siteName}</p>
      </div>

      <div class="footer">
        <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"${siteName}" <${emailFrom}>`,
      to: candidateEmail,
      subject: `Confirmation de candidature - ${jobTitle}`,
      html: htmlContent,
    });

    console.log(`✅ Email de confirmation envoyé à ${candidateEmail}`);
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email de confirmation:', error);
    // On ne throw pas l'erreur pour ne pas bloquer le processus principal
  }
}

