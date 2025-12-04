import { NextRequest, NextResponse } from 'next/server';
import {
  getGalleryImages,
  getGalleryImage,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
  GalleryImage,
} from '@/lib/data-storage';

// GET - Récupérer toutes les images ou une image spécifique
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    if (id) {
      const image = getGalleryImage(Number(id));
      if (!image) {
        return NextResponse.json({ error: 'Image non trouvée' }, { status: 404 });
      }
      return NextResponse.json(image);
    }

    let images = getGalleryImages();
    
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

// POST - Créer une nouvelle entrée d'image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const image = createGalleryImage(body);
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error('Erreur POST /api/gallery:', error);
    return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
  }
}

// PUT - Mettre à jour une image
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const updated = updateGalleryImage(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Image non trouvée' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Erreur PUT /api/gallery:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}

// DELETE - Supprimer une image
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const deleted = deleteGalleryImage(Number(id));
    if (!deleted) {
      return NextResponse.json({ error: 'Image non trouvée' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur DELETE /api/gallery:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}

