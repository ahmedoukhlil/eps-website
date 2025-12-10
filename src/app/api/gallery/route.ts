import { NextRequest, NextResponse } from 'next/server';
import { fetchAllMedia, fetchMedia } from '@/lib/wordpress';
import { convertAllMediaToGallery, convertWPMediaToGalleryImage, GalleryImage } from '@/lib/wordpress-adapters';

// GET - Récupérer toutes les images ou une image spécifique depuis WordPress
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    // Récupérer une image spécifique par ID
    if (id) {
      const wpMedia = await fetchMedia(Number(id));
      if (!wpMedia) {
        return NextResponse.json({ error: 'Image non trouvée' }, { status: 404 });
      }
      
      const image = convertWPMediaToGalleryImage(wpMedia);
      return NextResponse.json(image);
    }

    // Récupérer toutes les images
    const wpMedia = await fetchAllMedia(limit);
    
    if (!wpMedia || wpMedia.length === 0) {
      return NextResponse.json([]);
    }

    // Convertir les médias WordPress en images de galerie
    let images = convertAllMediaToGallery(wpMedia);
    
    // Filtrer par catégorie si fourni
    if (category) {
      images = images.filter(img => img.category === category);
    }
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Erreur GET /api/gallery:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST, PUT, DELETE - Les opérations de création/modification/suppression
// doivent être effectuées directement dans WordPress via l'interface d'administration
// Les images doivent être uploadées dans la médiathèque WordPress

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les images doivent être uploadées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress (Médiathèque) pour ajouter/modifier/supprimer des images'
  }, { status: 405 });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les images doivent être modifiées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress (Médiathèque) pour ajouter/modifier/supprimer des images'
  }, { status: 405 });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les images doivent être supprimées directement dans WordPress',
    message: 'Utilisez l\'interface WordPress (Médiathèque) pour ajouter/modifier/supprimer des images'
  }, { status: 405 });
}

