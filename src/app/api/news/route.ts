import { NextRequest, NextResponse } from 'next/server';
import {
  getNews,
  getNewsArticle,
  getNewsArticleBySlug,
  createNewsArticle,
  updateNewsArticle,
  deleteNewsArticle,
  NewsArticle,
} from '@/lib/data-storage';

// GET - Récupérer toutes les actualités ou une actualité spécifique
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

    if (id) {
      const article = getNewsArticle(Number(id));
      if (!article) {
        return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
      }
      return NextResponse.json(article);
    }

    if (slug) {
      const article = getNewsArticleBySlug(slug);
      if (!article) {
        return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
      }
      return NextResponse.json(article);
    }

    const news = getNews();
    // Filtrer uniquement les articles publiés pour l'API publique
    const publishedOnly = searchParams.get('publishedOnly') === 'true';
    const filtered = publishedOnly ? news.filter(n => n.published !== false) : news;
    
    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Erreur GET /api/news:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const article = createNewsArticle(body);
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Erreur POST /api/news:', error);
    return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
  }
}

// PUT - Mettre à jour un article
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const updated = updateNewsArticle(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Erreur PUT /api/news:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}

// DELETE - Supprimer un article
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const deleted = deleteNewsArticle(Number(id));
    if (!deleted) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur DELETE /api/news:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}

