import { NextRequest, NextResponse } from 'next/server';
import { fetchPosts, fetchPost, fetchCategories } from '@/lib/wordpress';
import { convertAllPosts, convertWPPostToNewsArticle, NewsArticle } from '@/lib/wordpress-adapters';

// GET - Récupérer toutes les actualités ou une actualité spécifique depuis WordPress
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const publishedOnly = searchParams.get('publishedOnly') === 'true';

    // Récupérer une actualité spécifique par slug
    if (slug) {
      const wpPost = await fetchPost(slug);
      if (!wpPost) {
        return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
      }
      
      const wpCategories = await fetchCategories();
      const categoriesMap = new Map<number, string>();
      if (wpCategories) {
        wpCategories.forEach(cat => {
          categoriesMap.set(cat.id, cat.name);
        });
      }
      
      const article = await convertWPPostToNewsArticle(wpPost, categoriesMap);
      return NextResponse.json(article);
    }

    // Récupérer toutes les actualités
    const wpPosts = await fetchPosts(limit);
    
    if (!wpPosts || wpPosts.length === 0) {
      return NextResponse.json([]);
    }

    // Récupérer les catégories pour mapper les IDs aux noms
    const wpCategories = await fetchCategories();
    const categoriesMap = new Map<number, string>();
    if (wpCategories) {
      wpCategories.forEach(cat => {
        categoriesMap.set(cat.id, cat.name);
      });
    }

    // Convertir les posts WordPress en articles
    const articles = await convertAllPosts(wpPosts, categoriesMap);
    
    // Filtrer uniquement les articles publiés si demandé
    // Note: WordPress gère déjà la publication, donc tous les posts récupérés sont publiés
    const filtered = publishedOnly ? articles.filter(a => a.featured !== false) : articles;
    
    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Erreur GET /api/news:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST, PUT, DELETE - Les opérations de création/modification/suppression
// doivent être effectuées directement dans WordPress via l'interface d'administration
// ou via l'API WordPress avec authentification

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les articles doivent être créés directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des articles'
  }, { status: 405 });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les articles doivent être modifiés directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des articles'
  }, { status: 405 });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ 
    error: 'Les articles doivent être supprimés directement dans WordPress',
    message: 'Utilisez l\'interface WordPress pour créer/modifier/supprimer des articles'
  }, { status: 405 });
}

