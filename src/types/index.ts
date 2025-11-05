/**
 * Common TypeScript types and interfaces for the application
 */

// ============================================
// Service Related Types
// ============================================
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  process: ProcessStep[];
  kpis: KPI[];
  slug: string;
  href?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  id?: string;
  number?: number;
}

export interface KPI {
  value: string;
  label: string;
  icon: string;
  id?: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}

// ============================================
// Project Related Types
// ============================================
export interface Project {
  id: string;
  title: string;
  name?: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  categories?: string[];
  results: string[];
  client: string;
  date: string;
  location?: string;
  featured?: boolean;
}

// ============================================
// News/Blog Types
// ============================================
export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

export type BlogPost = News;

// ============================================
// Contact & Form Types
// ============================================
export interface ContactForm {
  type: 'client' | 'institution' | 'career';
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
  position?: string;
  consent?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  consent: boolean;
}

// ============================================
// Commitment & Reference Types
// ============================================
export interface Commitment {
  title: string;
  description: string;
  icon: string;
  id?: string;
}

export interface Reference {
  name: string;
  logo: string;
  description: string;
  id?: string;
  website?: string;
  category?: string;
}

export type Client = Reference;

// ============================================
// Language & i18n Types
// ============================================
export interface Language {
  code: string;
  name: string;
  flag: string;
}

// ============================================
// Team & Career Types
// ============================================
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  bio?: string;
  image: string;
  email?: string;
  phone?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  salaryRange?: string;
  postedDate: string;
  closingDate?: string;
  isActive: boolean;
}

// ============================================
// Testimonial Types
// ============================================
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  image?: string;
  date?: string;
}

// ============================================
// Navigation Types
// ============================================
export interface NavItem {
  name: string;
  href: string;
  submenu?: SubNavItem[];
  external?: boolean;
}

export interface SubNavItem {
  name: string;
  href: string;
  description?: string;
}

// ============================================
// Feature Types
// ============================================
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ============================================
// Gallery & Media Types
// ============================================
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  width?: number;
  height?: number;
}

// ============================================
// Stats & Metrics Types
// ============================================
export interface Stat {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  icon?: string;
  description?: string;
}

// ============================================
// FAQ Types
// ============================================
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ============================================
// SEO Types
// ============================================
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// ============================================
// API & Pagination Types
// ============================================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// ============================================
// Form Field Types
// ============================================
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
}

// ============================================
// Animation Types
// ============================================
export type AnimationType =
  | 'fadeInUp'
  | 'fadeIn'
  | 'scaleIn'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'revealUp'
  | 'zoomRotateIn'
  | 'flipInX'
  | 'bounceIn';

export type AnimationDelay =
  | 'stagger-1'
  | 'stagger-2'
  | 'stagger-3'
  | 'stagger-4'
  | 'stagger-5'
  | 'stagger-6';
