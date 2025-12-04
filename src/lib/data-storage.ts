import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Créer le dossier data s'il n'existe pas
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Chemins des fichiers JSON
const CAREERS_FILE = path.join(DATA_DIR, 'careers.json');
const NEWS_FILE = path.join(DATA_DIR, 'news.json');
const GALLERY_FILE = path.join(DATA_DIR, 'gallery.json');

// Fonctions utilitaires pour lire/écrire les fichiers
export function readJsonFile<T>(filePath: string, defaultValue: T[]): T[] {
  try {
    if (!fs.existsSync(filePath)) {
      return defaultValue;
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Erreur lors de la lecture de ${filePath}:`, error);
    return defaultValue;
  }
}

export function writeJsonFile<T>(filePath: string, data: T[]): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Erreur lors de l'écriture de ${filePath}:`, error);
    throw error;
  }
}

// Gestion des carrières
export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  urgent: boolean;
  posted: string;
  isActive?: boolean;
}

export function getCareers(): Career[] {
  return readJsonFile<Career>(CAREERS_FILE, []);
}

export function getCareer(id: number): Career | undefined {
  const careers = getCareers();
  return careers.find(c => c.id === id);
}

export function createCareer(career: Omit<Career, 'id'>): Career {
  const careers = getCareers();
  const newId = careers.length > 0 ? Math.max(...careers.map(c => c.id)) + 1 : 1;
  const newCareer: Career = {
    ...career,
    id: newId,
    isActive: career.isActive !== undefined ? career.isActive : true,
  };
  careers.push(newCareer);
  writeJsonFile(CAREERS_FILE, careers);
  return newCareer;
}

export function updateCareer(id: number, updates: Partial<Career>): Career | null {
  const careers = getCareers();
  const index = careers.findIndex(c => c.id === id);
  if (index === -1) return null;
  
  careers[index] = { ...careers[index], ...updates };
  writeJsonFile(CAREERS_FILE, careers);
  return careers[index];
}

export function deleteCareer(id: number): boolean {
  const careers = getCareers();
  const filtered = careers.filter(c => c.id !== id);
  if (filtered.length === careers.length) return false;
  
  writeJsonFile(CAREERS_FILE, filtered);
  return true;
}

// Gestion des actualités
export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  published?: boolean;
}

export function getNews(): NewsArticle[] {
  return readJsonFile<NewsArticle>(NEWS_FILE, []);
}

export function getNewsArticle(id: number): NewsArticle | undefined {
  const news = getNews();
  return news.find(n => n.id === id);
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  const news = getNews();
  return news.find(n => n.slug === slug);
}

export function createNewsArticle(article: Omit<NewsArticle, 'id' | 'slug'>): NewsArticle {
  const news = getNews();
  const newId = news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 1;
  const slug = article.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  const newArticle: NewsArticle = {
    ...article,
    id: newId,
    slug,
    published: article.published !== undefined ? article.published : true,
  };
  news.push(newArticle);
  writeJsonFile(NEWS_FILE, news);
  return newArticle;
}

export function updateNewsArticle(id: number, updates: Partial<NewsArticle>): NewsArticle | null {
  const news = getNews();
  const index = news.findIndex(n => n.id === id);
  if (index === -1) return null;
  
  // Si le titre change, régénérer le slug
  if (updates.title && updates.title !== news[index].title) {
    updates.slug = updates.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  news[index] = { ...news[index], ...updates };
  writeJsonFile(NEWS_FILE, news);
  return news[index];
}

export function deleteNewsArticle(id: number): boolean {
  const news = getNews();
  const filtered = news.filter(n => n.id !== id);
  if (filtered.length === news.length) return false;
  
  writeJsonFile(NEWS_FILE, filtered);
  return true;
}

// Gestion de la galerie
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category: string;
  uploadedAt: string;
  uploadedBy?: string;
}

export function getGalleryImages(): GalleryImage[] {
  return readJsonFile<GalleryImage>(GALLERY_FILE, []);
}

export function getGalleryImage(id: number): GalleryImage | undefined {
  const images = getGalleryImages();
  return images.find(img => img.id === id);
}

export function createGalleryImage(image: Omit<GalleryImage, 'id' | 'uploadedAt'>): GalleryImage {
  const images = getGalleryImages();
  const newId = images.length > 0 ? Math.max(...images.map(img => img.id)) + 1 : 1;
  const newImage: GalleryImage = {
    ...image,
    id: newId,
    uploadedAt: new Date().toISOString(),
  };
  images.push(newImage);
  writeJsonFile(GALLERY_FILE, images);
  return newImage;
}

export function updateGalleryImage(id: number, updates: Partial<GalleryImage>): GalleryImage | null {
  const images = getGalleryImages();
  const index = images.findIndex(img => img.id === id);
  if (index === -1) return null;
  
  images[index] = { ...images[index], ...updates };
  writeJsonFile(GALLERY_FILE, images);
  return images[index];
}

export function deleteGalleryImage(id: number): boolean {
  const images = getGalleryImages();
  const filtered = images.filter(img => img.id !== id);
  if (filtered.length === images.length) return false;
  
  writeJsonFile(GALLERY_FILE, filtered);
  return true;
}

