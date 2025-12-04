import { NextRequest, NextResponse } from 'next/server';
import {
  getCareers,
  getCareer,
  createCareer,
  updateCareer,
  deleteCareer,
  Career,
} from '@/lib/data-storage';

// GET - Récupérer toutes les carrières ou une carrière spécifique
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (id) {
      const career = getCareer(Number(id));
      if (!career) {
        return NextResponse.json({ error: 'Carrière non trouvée' }, { status: 404 });
      }
      return NextResponse.json(career);
    }

    const careers = getCareers();
    // Filtrer uniquement les carrières actives pour l'API publique
    const activeOnly = searchParams.get('activeOnly') === 'true';
    const filtered = activeOnly ? careers.filter(c => c.isActive !== false) : careers;
    
    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Erreur GET /api/careers:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST - Créer une nouvelle carrière
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const career = createCareer(body);
    return NextResponse.json(career, { status: 201 });
  } catch (error) {
    console.error('Erreur POST /api/careers:', error);
    return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
  }
}

// PUT - Mettre à jour une carrière
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const updated = updateCareer(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Carrière non trouvée' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Erreur PUT /api/careers:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}

// DELETE - Supprimer une carrière
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const deleted = deleteCareer(Number(id));
    if (!deleted) {
      return NextResponse.json({ error: 'Carrière non trouvée' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur DELETE /api/careers:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}

