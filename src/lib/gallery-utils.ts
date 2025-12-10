/**
 * Utilitaires pour récupérer les images de galerie depuis WordPress
 */

import { fetchAllMedia } from './wordpress';
import { convertAllMediaToGallery, GalleryImage } from './wordpress-adapters';

/**
 * Récupère les images de galerie depuis WordPress
 * @param limit - Nombre maximum d'images à récupérer (par défaut: 12)
 * @returns Tableau d'images de galerie
 */
export async function getGalleryImages(limit: number = 12): Promise<GalleryImage[]> {
  try {
    const wpMedia = await fetchAllMedia(limit);
    if (wpMedia && wpMedia.length > 0) {
      return convertAllMediaToGallery(wpMedia);
    }
    return [];
  } catch (error) {
    console.error('Erreur lors de la récupération des images de galerie:', error);
    return [];
  }
}

