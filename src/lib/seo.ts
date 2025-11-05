// Configuration SEO pour le site EPS

export const SEO_CONFIG = {
  siteName: 'EPS - El Baraka Prestations de Service',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://eps-mauritanie.com',
  defaultDescription: 'Services aéroportuaires professionnels en Mauritanie : manutention bagages et fret, nettoyage, assistance PMR passagers, lutte antiparasitaire, gestion faune sauvage et communication institutionnelle.',
  defaultKeywords: [
    'manutention aéroportuaire Mauritanie',
    'nettoyage aéroport Nouakchott',
    'lutte antiparasitaire aéroport',
    'assistance PMR aéroport',
    'services aéroportuaires',
    'EPS Mauritanie',
    'El Baraka Prestations',
    'aéroport Nouakchott',
    'gestion faune sauvage aéroport',
    'communication institutionnelle aéroport'
  ],
  social: {
    twitter: '@eps_mauritanie',
    facebook: 'EPSMauritanie',
    linkedin: 'eps-mauritanie'
  }
};

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const generateSEOMeta = (props: SEOProps) => {
  const {
    title,
    description = SEO_CONFIG.defaultDescription,
    keywords = SEO_CONFIG.defaultKeywords,
    image = `${SEO_CONFIG.siteUrl}/images/og-image.jpg`,
    url = SEO_CONFIG.siteUrl,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags
  } = props;

  const fullTitle = title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.siteName;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type,
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: SEO_CONFIG.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
};

// Métadonnées spécifiques par page
export const PAGE_SEO = {
  home: {
    title: 'Accueil',
    description: 'EPS - El Baraka Prestations de Service, votre partenaire de confiance pour les services aéroportuaires en Mauritanie. Manutention bagages et fret, nettoyage, assistance PMR passagers et plus.',
    keywords: [
      'services aéroportuaires Mauritanie',
      'EPS Nouakchott',
      'manutention aéroport',
      'nettoyage aéroportuaire',
      'assistance PMR aéroport'
    ]
  },
  about: {
    title: 'À Propos',
    description: 'Découvrez EPS - El Baraka Prestations de Service, notre mission, nos valeurs et notre engagement pour l\'excellence des services aéroportuaires en Mauritanie.',
    keywords: [
      'à propos EPS',
      'entreprise aéroportuaire Mauritanie',
      'mission EPS',
      'valeurs EPS',
      'objectifs institutionnels'
    ]
  },
  services: {
    title: 'Nos Services',
    description: 'Découvrez nos 6 services aéroportuaires professionnels : manutention bagages et fret, nettoyage, assistance PMR passagers, lutte antiparasitaire, gestion faune sauvage et communication.',
    keywords: [
      'services aéroportuaires',
      'manutention aéroportuaire',
      'nettoyage hygiène aéroport',
      'assistance PMR',
      'lutte antiparasitaire aéroport',
      'gestion faune sauvage',
      'communication institutionnelle'
    ]
  },
  contact: {
    title: 'Contact',
    description: 'Contactez EPS - El Baraka Prestations de Service pour vos besoins en services aéroportuaires. Demandez un devis ou une intervention d\'urgence.',
    keywords: [
      'contact EPS',
      'devis services aéroportuaires',
      'intervention urgente aéroport',
      'EPS Nouakchott contact',
      'services aéroportuaires Mauritanie'
    ]
  },
  careers: {
    title: 'Carrières',
    description: 'Rejoignez l\'équipe EPS - El Baraka Prestations de Service. Découvrez nos offres d\'emploi dans l\'industrie aéroportuaire en Mauritanie.',
    keywords: [
      'emploi aéroportuaire Mauritanie',
      'carrières EPS',
      'offres d\'emploi aéroport',
      'recrutement EPS',
      'travail aéroportuaire Nouakchott'
    ]
  }
};
