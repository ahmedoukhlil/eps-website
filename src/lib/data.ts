import { Service, Commitment, Reference, Project, News } from '@/types';

export const services: Service[] = [
  {
    id: 'manutention',
    title: 'Manutention Aéroportuaire',
    description: 'Services spécialisés de manutention dans les aéroports pour le chargement et déchargement des bagages et l\'affrètement.',
    icon: '🚛',
    image: '/images/services/manutention.jpg',
    features: [
      'Chargement et déchargement des bagages',
      'Manutention de fret aérien',
      'Services d\'affrètement',
      'Tri et acheminement des bagages',
      'Équipements spécialisés'
    ],
    process: [
      {
        step: 1,
        title: 'Planification',
        description: 'Analyse des besoins et planification des opérations',
        icon: '📋'
      },
      {
        step: 2,
        title: 'Exécution',
        description: 'Mise en œuvre avec équipements et personnel qualifié',
        icon: '⚙️'
      },
      {
        step: 3,
        title: 'Contrôle',
        description: 'Vérification qualité et conformité sécurité',
        icon: '✅'
      }
    ],
    kpis: [
      { value: '99.8%', label: 'Taux de réussite', icon: '📊' },
      { value: '<15min', label: 'Temps de traitement', icon: '⏱️' },
      { value: '24/7', label: 'Disponibilité', icon: '🕐' }
    ],
    slug: 'manutention-aeroportuaire'
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage & Hygiène',
    description: 'Services de nettoyage professionnel pour aéroports avec produits écologiques et protocoles stricts.',
    icon: '🧽',
    image: '/images/services/nettoyage.jpg',
    features: [
      'Nettoyage terminal passagers',
      'Sanitaires et espaces communs',
      'Nettoyage piste et hangars',
      'Désinfection spécialisée'
    ],
    process: [
      {
        step: 1,
        title: 'Évaluation',
        description: 'Audit des espaces et définition des protocoles',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Nettoyage',
        description: 'Exécution avec produits écologiques et équipements professionnels',
        icon: '🧽'
      },
      {
        step: 3,
        title: 'Contrôle',
        description: 'Vérification qualité et certification hygiène',
        icon: '✅'
      }
    ],
    kpis: [
      { value: '100%', label: 'Conformité hygiène', icon: '🧼' },
      { value: '0', label: 'Incidents sanitaires', icon: '🛡️' },
      { value: 'ISO', label: 'Certification qualité', icon: '🏆' }
    ],
    slug: 'nettoyage-hygiene'
  },
  {
    id: 'assistance-pmr',
    title: 'Assistance PMR Aéroportuaire',
    description: 'Services d\'assistance spécialisés pour les passagers à mobilité réduite dans les aéroports.',
    icon: '♿',
    image: '/images/services/assistance-pmr.jpg',
    features: [
      'Accompagnement personnalisé',
      'Équipements adaptés',
      'Formation spécialisée',
      'Disponibilité 24/7'
    ],
    process: [
      {
        step: 1,
        title: 'Réservation',
        description: 'Prise en charge de la demande d\'assistance',
        icon: '📞'
      },
      {
        step: 2,
        title: 'Accompagnement',
        description: 'Assistance personnalisée avec équipements adaptés',
        icon: '🤝'
      },
      {
        step: 3,
        title: 'Suivi',
        description: 'Vérification satisfaction et amélioration continue',
        icon: '📝'
      }
    ],
    kpis: [
      { value: '100%', label: 'Satisfaction client', icon: '😊' },
      { value: '<5min', label: 'Temps d\'attente', icon: '⏱️' },
      { value: '24/7', label: 'Disponibilité', icon: '🕐' }
    ],
    slug: 'assistance-pmr'
  },
  {
    id: 'lutte-antiparasitaire',
    title: 'Lutte Antiparasitaire',
    description: 'Services de lutte contre les nuisibles avec méthodes écologiques et préventives.',
    icon: '🐛',
    image: '/images/services/lutte-antiparasitaire.jpg',
    features: [
      'Inspection préventive',
      'Traitement écologique',
      'Surveillance continue',
      'Rapports détaillés'
    ],
    process: [
      {
        step: 1,
        title: 'Inspection',
        description: 'Audit complet des zones à risque',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Traitement',
        description: 'Application de méthodes écologiques et préventives',
        icon: '🧪'
      },
      {
        step: 3,
        title: 'Suivi',
        description: 'Surveillance continue et rapports réguliers',
        icon: '📊'
      }
    ],
    kpis: [
      { value: '0', label: 'Infestations', icon: '🛡️' },
      { value: '100%', label: 'Efficacité prévention', icon: '✅' },
      { value: 'Éco', label: 'Méthodes écologiques', icon: '🌱' }
    ],
    slug: 'lutte-antiparasitaire'
  },
  {
    id: 'gestion-faune',
    title: 'Gestion de la Faune Sauvage',
    description: 'Services de gestion et protection de la faune sauvage dans les zones aéroportuaires.',
    icon: '🦅',
    image: '/images/services/gestion-faune.jpg',
    features: [
      'Identification espèces',
      'Méthodes de dissuasion',
      'Protection environnementale',
      'Formation sécurité'
    ],
    process: [
      {
        step: 1,
        title: 'Identification',
        description: 'Recensement et identification des espèces présentes',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Dissuasion',
        description: 'Mise en place de méthodes de dissuasion respectueuses',
        icon: '🛡️'
      },
      {
        step: 3,
        title: 'Protection',
        description: 'Surveillance et protection de l\'écosystème',
        icon: '🌿'
      }
    ],
    kpis: [
      { value: '95%', label: 'Réduction incidents', icon: '📉' },
      { value: '0', label: 'Accidents faune', icon: '🛡️' },
      { value: 'Éco', label: 'Méthodes respectueuses', icon: '🌱' }
    ],
    slug: 'gestion-faune-sauvage'
  },
  {
    id: 'communication',
    title: 'Communication & Événementiel',
    description: 'Solutions créatives de communication et organisation d\'événements professionnels.',
    icon: '📢',
    image: '/images/services/communication.jpg',
    features: [
      'Impression numérique haute qualité',
      'Impression sur bâches et textile',
      'Création de supports publicitaires',
      'Organisation de stands d\'exposition',
      'Location des supports',
      'Conseil en stratégie de communication'
    ],
    process: [
      {
        step: 1,
        title: 'Conception',
        description: 'Création et design des supports de communication',
        icon: '🎨'
      },
      {
        step: 2,
        title: 'Production',
        description: 'Impression et fabrication des supports',
        icon: '🖨️'
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Mise en place et organisation des événements',
        icon: '🏗️'
      }
    ],
    kpis: [
      { value: '100%', label: 'Satisfaction client', icon: '😊' },
      { value: '24h', label: 'Délai de production', icon: '⚡' },
      { value: 'Qualité', label: 'Supports premium', icon: '🏆' }
    ],
    slug: 'communication-evenementiel'
  }
];

export const commitments: Commitment[] = [
  {
    title: 'Sécurité',
    description: 'Garantir la sécurité opérationnelle dans tous nos services',
    icon: '🛡️'
  },
  {
    title: 'Hygiène',
    description: 'Maintenir des standards d\'hygiène irréprochables',
    icon: '🧼'
  },
  {
    title: 'Qualité',
    description: 'Assurer une qualité constante dans nos prestations',
    icon: '⭐'
  },
  {
    title: 'Environnement',
    description: 'Respecter et protéger l\'environnement dans nos activités',
    icon: '🌱'
  },
  {
    title: 'Professionnalisme',
    description: 'Maintenir un niveau de professionnalisme exemplaire',
    icon: '👔'
  }
];

export const references: Reference[] = [
  {
    name: 'Aéroport Nouakchott',
    logo: '/images/logos/nouakchott.png',
    description: 'Partenariat de longue date pour les services aéroportuaires'
  },
  {
    name: 'Projet Oumtounsy',
    logo: '/images/logos/oumtounsy.png',
    description: 'Référence majeure en gestion d\'infrastructures aéroportuaires'
  }
];

export const projects: Project[] = [
  {
    id: 'nouakchott-expansion',
    title: 'Expansion Aéroport Nouakchott',
    description: 'Extension des services de manutention et nettoyage pour l\'aéroport international',
    image: '/images/projects/nouakchott.jpg',
    category: 'Infrastructure',
    results: ['+50% capacité', '100% satisfaction client', '0 incident sécurité'],
    client: 'Aéroport Nouakchott',
    date: '2023'
  },
  {
    id: 'oumtounsy-modernisation',
    title: 'Modernisation Oumtounsy',
    description: 'Mise à niveau complète des services aéroportuaires',
    image: '/images/projects/oumtounsy.jpg',
    category: 'Modernisation',
    results: ['Certification ISO', 'Équipements neufs', 'Formation personnel'],
    client: 'Gouvernement Mauritanien',
    date: '2024'
  }
];

export const news: News[] = [
  {
    id: 'nouvelles-normes-hygiene',
    title: 'Nouvelles Normes d\'Hygiène Aéroportuaires',
    excerpt: 'Mise à jour des protocoles de nettoyage selon les dernières réglementations internationales',
    content: 'Contenu complet de l\'article...',
    image: '/images/news/hygiene.jpg',
    date: '2024-01-15',
    category: 'Actualités',
    slug: 'nouvelles-normes-hygiene'
  },
  {
    id: 'formation-personnel',
    title: 'Formation Continue du Personnel',
    excerpt: 'Programme de formation intensif pour améliorer la qualité des services',
    content: 'Contenu complet de l\'article...',
    image: '/images/news/formation.jpg',
    date: '2024-01-10',
    category: 'Formation',
    slug: 'formation-personnel'
  }
];
