/**
 * Configuration et types pour l'intégration WordPress Headless
 * Gérer tous les contenus du site via WordPress REST API
 */

export const WORDPRESS_CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://cms.eps-mauritanie.com/wp-json/wp/v2',
  authUrl: process.env.NEXT_PUBLIC_WORDPRESS_AUTH_URL || 'https://cms.eps-mauritanie.com/wp-json/jwt-auth/v1',
  username: process.env.WORDPRESS_USERNAME || '',
  password: process.env.WORDPRESS_PASSWORD || '',
  revalidate: parseInt(process.env.REVALIDATE_TIME || '3600'), // 1 heure par défaut
};

// ============================================
// Types WordPress de base
// ============================================

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: Record<string, any>; // Advanced Custom Fields
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
  media_details?: {
    width: number;
    height: number;
    sizes?: Record<string, any>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

// ============================================
// Types pour les Custom Post Types
// ============================================

/**
 * Service CPT
 * Custom Post Type: eps_service
 */
export interface WPService {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  content: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    icon: string;
    description: string;
    features: string[]; // Repeater field
    process: Array<{
      step: number;
      title: string;
      description: string;
      icon: string;
    }>;
    kpis: Array<{
      value: string;
      label: string;
      icon: string;
    }>;
  };
}

/**
 * Témoignage CPT
 * Custom Post Type: eps_testimonial
 */
export interface WPTestimonial {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    name: string;
    position: string;
    company: string;
    rating: number;
    avatar: string; // URL de l'image ou initiales
    testimonial_text: string;
    date?: string;
  };
}

/**
 * Projet CPT
 * Custom Post Type: eps_project
 */
export interface WPProject {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  content: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    description: string;
    category: string;
    client: string;
    date: string;
    location?: string;
    results: string[]; // Repeater field
    images?: number[]; // Gallery field
    featured?: boolean;
  };
}

/**
 * Référence Client CPT
 * Custom Post Type: eps_reference
 */
export interface WPReference {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    logo: number; // Media ID
    description: string;
    website?: string;
    category?: string;
  };
}

/**
 * Engagement CPT
 * Custom Post Type: eps_commitment
 */
export interface WPCommitment {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    icon: string;
    description: string;
    order?: number;
  };
}

/**
 * Membre d'équipe CPT
 * Custom Post Type: eps_team_member
 */
export interface WPTeamMember {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    name: string;
    role: string;
    position: string;
    bio?: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

/**
 * Offre d'emploi CPT
 * Custom Post Type: eps_job
 */
export interface WPJob {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    requirements: string[]; // Repeater field
    responsibilities: string[]; // Repeater field
    benefits?: string[]; // Repeater field
    salary_range?: string;
    posted_date: string;
    closing_date?: string;
    is_active: boolean;
  };
}

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Fonction générique pour récupérer des données depuis WordPress
 */
async function fetchFromWordPress<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const url = `${WORDPRESS_CONFIG.apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      ...options,
      next: { revalidate: WORDPRESS_CONFIG.revalidate },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

// ============================================
// Fonctions pour les Posts (Actualités)
// ============================================

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const posts = await fetchFromWordPress<WordPressPost[]>('posts?_embed');
  return posts || [];
};

export const fetchPost = async (slug: string): Promise<WordPressPost | null> => {
  const posts = await fetchFromWordPress<WordPressPost[]>(`posts?slug=${slug}&_embed`);
  return posts?.[0] || null;
};

// ============================================
// Fonctions pour les Custom Post Types
// ============================================

/**
 * Récupérer tous les témoignages
 */
export const fetchTestimonials = async (): Promise<WPTestimonial[]> => {
  const testimonials = await fetchFromWordPress<WPTestimonial[]>('eps_testimonial?_embed&acf_format=standard');
  return testimonials || [];
};

/**
 * Récupérer un témoignage par ID
 */
export const fetchTestimonial = async (id: number): Promise<WPTestimonial | null> => {
  return await fetchFromWordPress<WPTestimonial>(`eps_testimonial/${id}?acf_format=standard`);
};

/**
 * Récupérer tous les services
 */
export const fetchServices = async (): Promise<WPService[]> => {
  const services = await fetchFromWordPress<WPService[]>('eps_service?_embed&acf_format=standard');
  return services || [];
};

/**
 * Récupérer un service par slug
 */
export const fetchService = async (slug: string): Promise<WPService | null> => {
  const services = await fetchFromWordPress<WPService[]>(`eps_service?slug=${slug}&acf_format=standard`);
  return services?.[0] || null;
};

/**
 * Récupérer tous les projets
 */
export const fetchProjects = async (): Promise<WPProject[]> => {
  const projects = await fetchFromWordPress<WPProject[]>('eps_project?_embed&acf_format=standard');
  return projects || [];
};

/**
 * Récupérer un projet par slug
 */
export const fetchProject = async (slug: string): Promise<WPProject | null> => {
  const projects = await fetchFromWordPress<WPProject[]>(`eps_project?slug=${slug}&acf_format=standard`);
  return projects?.[0] || null;
};

/**
 * Récupérer toutes les références clients
 */
export const fetchReferences = async (): Promise<WPReference[]> => {
  const references = await fetchFromWordPress<WPReference[]>('eps_reference?acf_format=standard');
  return references || [];
};

/**
 * Récupérer tous les engagements
 */
export const fetchCommitments = async (): Promise<WPCommitment[]> => {
  const commitments = await fetchFromWordPress<WPCommitment[]>('eps_commitment?acf_format=standard&orderby=menu_order&order=asc');
  return commitments || [];
};

/**
 * Récupérer tous les membres de l'équipe
 */
export const fetchTeamMembers = async (): Promise<WPTeamMember[]> => {
  const members = await fetchFromWordPress<WPTeamMember[]>('eps_team_member?_embed&acf_format=standard');
  return members || [];
};

/**
 * Récupérer toutes les offres d'emploi actives
 */
export const fetchJobs = async (activeOnly: boolean = true): Promise<WPJob[]> => {
  const endpoint = activeOnly
    ? 'eps_job?acf_format=standard&meta_key=is_active&meta_value=true'
    : 'eps_job?acf_format=standard';
  const jobs = await fetchFromWordPress<WPJob[]>(endpoint);
  return jobs || [];
};

/**
 * Récupérer une offre d'emploi par ID
 */
export const fetchJob = async (id: number): Promise<WPJob | null> => {
  return await fetchFromWordPress<WPJob>(`eps_job/${id}?acf_format=standard`);
};

// ============================================
// Fonctions pour les médias et catégories
// ============================================

export const fetchCategories = async (): Promise<WordPressCategory[]> => {
  const categories = await fetchFromWordPress<WordPressCategory[]>('categories');
  return categories || [];
};

export const fetchMedia = async (id: number): Promise<WordPressMedia | null> => {
  return await fetchFromWordPress<WordPressMedia>(`media/${id}`);
};
