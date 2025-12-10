/**
 * Adaptateurs pour convertir les données WordPress en types de l'application
 * Permet de gérer le contenu via WordPress tout en conservant la structure actuelle
 */

import {
  WPService,
  WPTestimonial,
  WPProject,
  WPReference,
  WPCommitment,
  WPTeamMember,
  WPJob,
  WordPressMedia,
  WordPressPost,
  fetchMedia,
} from './wordpress';

import {
  Service,
  Testimonial,
  Project,
  Reference,
  Commitment,
  TeamMember,
  JobPosting,
} from '@/types';

// ============================================
// Conversion des Services
// ============================================

export async function convertWPServiceToService(wpService: WPService): Promise<Service> {
  let imageUrl = '/images/services/default.jpg';

  if (wpService.featured_media) {
    const media = await fetchMedia(wpService.featured_media);
    if (media) {
      imageUrl = media.source_url;
    }
  }

  return {
    id: wpService.slug,
    title: wpService.title.rendered,
    description: wpService.acf.description,
    icon: wpService.acf.icon,
    image: imageUrl,
    features: wpService.acf.features || [],
    process: wpService.acf.process?.map((p) => ({
      step: p.step,
      title: p.title,
      description: p.description,
      icon: p.icon,
    })) || [],
    kpis: wpService.acf.kpis?.map((k) => ({
      value: k.value,
      label: k.label,
      icon: k.icon,
    })) || [],
    slug: wpService.slug,
  };
}

// ============================================
// Conversion des Témoignages
// ============================================

export function convertWPTestimonialToTestimonial(wpTestimonial: WPTestimonial): Testimonial {
  return {
    id: wpTestimonial.id.toString(),
    name: wpTestimonial.acf.name,
    role: wpTestimonial.acf.position,
    company: wpTestimonial.acf.company,
    content: wpTestimonial.acf.testimonial_text || wpTestimonial.content.rendered,
    rating: wpTestimonial.acf.rating,
    image: wpTestimonial.acf.avatar || undefined,
    date: wpTestimonial.acf.date,
  };
}

// ============================================
// Conversion des Projets
// ============================================

export async function convertWPProjectToProject(wpProject: WPProject): Promise<Project> {
  let imageUrl = '/images/projects/default.jpg';
  const images: string[] = [];

  // Image principale
  if (wpProject.featured_media) {
    const media = await fetchMedia(wpProject.featured_media);
    if (media) {
      imageUrl = media.source_url;
      images.push(media.source_url);
    }
  }

  // Galerie d'images
  if (wpProject.acf.images && wpProject.acf.images.length > 0) {
    for (const imageId of wpProject.acf.images) {
      const media = await fetchMedia(imageId);
      if (media) {
        images.push(media.source_url);
      }
    }
  }

  return {
    id: wpProject.slug,
    title: wpProject.title.rendered,
    description: wpProject.acf.description,
    image: imageUrl,
    images: images.length > 0 ? images : undefined,
    category: wpProject.acf.category,
    results: wpProject.acf.results || [],
    client: wpProject.acf.client,
    date: wpProject.acf.date,
    location: wpProject.acf.location,
    featured: wpProject.acf.featured,
  };
}

// ============================================
// Conversion des Références
// ============================================

export async function convertWPReferenceToReference(wpReference: WPReference): Promise<Reference> {
  let logoUrl = '/images/logos/default.png';

  if (wpReference.acf.logo) {
    const media = await fetchMedia(wpReference.acf.logo);
    if (media) {
      logoUrl = media.source_url;
    }
  }

  return {
    name: wpReference.title.rendered,
    logo: logoUrl,
    description: wpReference.acf.description,
    id: wpReference.id.toString(),
    website: wpReference.acf.website,
    category: wpReference.acf.category,
  };
}

// ============================================
// Conversion des Engagements
// ============================================

export function convertWPCommitmentToCommitment(wpCommitment: WPCommitment): Commitment {
  return {
    title: wpCommitment.title.rendered,
    description: wpCommitment.acf.description,
    icon: wpCommitment.acf.icon,
    id: wpCommitment.id.toString(),
  };
}

// ============================================
// Conversion des Membres d'équipe
// ============================================

export async function convertWPTeamMemberToTeamMember(wpMember: WPTeamMember): Promise<TeamMember> {
  let imageUrl = '/images/team/default.jpg';

  if (wpMember.featured_media) {
    const media = await fetchMedia(wpMember.featured_media);
    if (media) {
      imageUrl = media.source_url;
    }
  }

  return {
    id: wpMember.id.toString(),
    name: wpMember.acf.name,
    role: wpMember.acf.role,
    position: wpMember.acf.position,
    bio: wpMember.acf.bio,
    image: imageUrl,
    email: wpMember.acf.email,
    phone: wpMember.acf.phone,
    social: {
      linkedin: wpMember.acf.linkedin,
      twitter: wpMember.acf.twitter,
      facebook: wpMember.acf.facebook,
    },
  };
}

// ============================================
// Conversion des Offres d'emploi
// ============================================

export function convertWPJobToJobPosting(wpJob: WPJob): JobPosting {
  return {
    id: wpJob.id.toString(),
    title: wpJob.title.rendered,
    department: wpJob.acf.department,
    location: wpJob.acf.location,
    type: wpJob.acf.type,
    description: wpJob.content.rendered,
    requirements: wpJob.acf.requirements || [],
    responsibilities: wpJob.acf.responsibilities || [],
    benefits: wpJob.acf.benefits,
    salaryRange: wpJob.acf.salary_range,
    postedDate: wpJob.acf.posted_date,
    closingDate: wpJob.acf.closing_date,
    isActive: wpJob.acf.is_active,
  };
}

// ============================================
// Fonctions de conversion en masse
// ============================================

export async function convertAllServices(wpServices: WPService[]): Promise<Service[]> {
  return Promise.all(wpServices.map(convertWPServiceToService));
}

export function convertAllTestimonials(wpTestimonials: WPTestimonial[]): Testimonial[] {
  return wpTestimonials.map(convertWPTestimonialToTestimonial);
}

export async function convertAllProjects(wpProjects: WPProject[]): Promise<Project[]> {
  return Promise.all(wpProjects.map(convertWPProjectToProject));
}

export async function convertAllReferences(wpReferences: WPReference[]): Promise<Reference[]> {
  return Promise.all(wpReferences.map(convertWPReferenceToReference));
}

export function convertAllCommitments(wpCommitments: WPCommitment[]): Commitment[] {
  return wpCommitments.map(convertWPCommitmentToCommitment);
}

export async function convertAllTeamMembers(wpMembers: WPTeamMember[]): Promise<TeamMember[]> {
  return Promise.all(wpMembers.map(convertWPTeamMemberToTeamMember));
}

export function convertAllJobs(wpJobs: WPJob[]): JobPosting[] {
  return wpJobs.map(convertWPJobToJobPosting);
}

// ============================================
// Conversion des Posts (Actualités)
// ============================================

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  author?: string;
  tags?: string[];
}

export async function convertWPPostToNewsArticle(
  wpPost: WordPressPost,
  categoriesMap?: Map<number, string>
): Promise<NewsArticle> {
  let imageUrl = '/images/services/nettoyage.jpg'; // Image par défaut

  // Récupérer l'image mise en avant depuis _embedded (plus rapide)
  if (wpPost._embedded?.['wp:featuredmedia']?.[0]) {
    const embeddedMedia = wpPost._embedded['wp:featuredmedia'][0];
    // Utiliser la taille large si disponible, sinon medium, sinon source_url
    imageUrl = embeddedMedia.media_details?.sizes?.large?.source_url ||
               embeddedMedia.media_details?.sizes?.medium?.source_url ||
               embeddedMedia.source_url;
  } else if (wpPost.featured_media) {
    // Fallback : récupérer via fetchMedia si _embed n'est pas disponible
    const media = await fetchMedia(wpPost.featured_media);
    if (media) {
      imageUrl = media.source_url;
    }
  }

  // Extraire la catégorie (première catégorie disponible)
  let category = 'Actualités';
  if (wpPost.categories && wpPost.categories.length > 0 && categoriesMap) {
    const categoryId = wpPost.categories[0];
    category = categoriesMap.get(categoryId) || 'Actualités';
  }

  // Calculer le temps de lecture approximatif (250 mots par minute)
  const wordCount = wpPost.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 250));

  // Extraire l'excerpt (ou générer depuis le contenu)
  const excerpt = wpPost.excerpt.rendered 
    ? wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').trim()
    : wpPost.content.rendered.replace(/<[^>]*>/g, '').substring(0, 150).trim() + '...';

  // Déterminer si l'article est featured (via ACF ou sticky)
  const featured = wpPost.acf?.featured === true || wpPost.acf?.sticky === true || false;

  return {
    id: wpPost.id,
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    excerpt: excerpt || 'Découvrez cette actualité...',
    content: wpPost.content.rendered,
    image: imageUrl,
    category: category,
    date: wpPost.date,
    readTime: `${readTime} min`,
    featured: featured,
    author: wpPost.acf?.author || 'EPS',
    tags: wpPost.tags?.map(String) || [],
  };
}

export async function convertAllPosts(
  wpPosts: WordPressPost[],
  categoriesMap?: Map<number, string>
): Promise<NewsArticle[]> {
  return Promise.all(wpPosts.map(post => convertWPPostToNewsArticle(post, categoriesMap)));
}

// ============================================
// Conversion des Images de Galerie
// ============================================

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title?: string;
  caption?: string;
}

export function convertWPMediaToGalleryImage(
  wpMedia: WordPressMedia,
  category: string = 'Galerie'
): GalleryImage {
  return {
    id: wpMedia.id,
    src: wpMedia.source_url,
    alt: wpMedia.alt_text || 'Image EPS',
    category: category,
    title: wpMedia.caption?.rendered || undefined,
    caption: wpMedia.caption?.rendered || undefined,
  };
}

export function convertAllMediaToGallery(
  wpMedia: WordPressMedia[],
  categoryMap?: Map<number, string>
): GalleryImage[] {
  return wpMedia.map(media => {
    // Essayer de déterminer la catégorie depuis les métadonnées ou utiliser une valeur par défaut
    const category = categoryMap?.get(media.id) || 'Galerie';
    return convertWPMediaToGalleryImage(media, category);
  });
}
