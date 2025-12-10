'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { NewsArticle } from '@/lib/wordpress-adapters';

// Données d'exemple pour les actualités (fallback si WordPress n'est pas configuré)
const fallbackNews: NewsArticle[] = [
  {
    id: 1,
    title: 'EPS Remporte le Prix de l\'Excellence Environnementale 2023',
    slug: 'prix-excellence-environnementale-2023',
    excerpt: 'Notre engagement pour l\'environnement reconnu au niveau national avec l\'obtention du Prix de l\'Excellence Environnementale.',
    content: '',
    image: '/images/news/formation.jpg',
    category: 'Récompenses',
    date: '2023-12-15',
    readTime: '3 min',
    featured: true
  },
  {
    id: 2,
    title: 'Nouvelle Certification ISO 14001 pour EPS',
    slug: 'certification-iso-14001',
    excerpt: 'EPS obtient la certification ISO 14001, confirmant notre engagement envers la gestion environnementale.',
    content: '',
    image: '/images/news/hygiene.jpg',
    category: 'Certifications',
    date: '2023-11-28',
    readTime: '4 min',
    featured: true
  },
  {
    id: 3,
    title: 'Formation Spécialisée : Techniques de Nettoyage Écologique',
    slug: 'formation-nettoyage-ecologique',
    excerpt: 'Nos équipes se forment aux dernières techniques de nettoyage respectueuses de l\'environnement.',
    content: '',
    image: '/images/services/nettoyage.jpg',
    category: 'Formation',
    date: '2023-11-15',
    readTime: '5 min',
    featured: false
  }
];

interface NewsSectionProps {
  articles?: NewsArticle[];
}

const getCategoryColor = (category: string) => {
  const categoryLower = category.toLowerCase();
  const colors: { [key: string]: { bg: string; text: string; border: string } } = {
    'récompenses': { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    'certifications': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'formation': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    'expansion': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    'partenariats': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
    'responsabilité sociale': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
    'actualités': { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
    'news': { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
    'nouvelles': { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' }
  };
  return colors[categoryLower] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const NewsSection: React.FC<NewsSectionProps> = ({ articles }) => {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  // Utiliser les articles WordPress si disponibles, sinon utiliser les données de fallback
  const latestNews = articles && articles.length > 0 
    ? articles.slice(0, 3) // Prendre les 3 premiers articles
    : fallbackNews;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={25} color="rgba(59, 130, 246, 0.15)" speed={0.2} />
      
      {/* Decorative elements with parallax */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          ref={parallax1.elementRef}
          className="absolute top-20 left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-20 right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section - Centered */}
        <ScrollAnimateWrapper className="text-center mb-12 sm:mb-16 md:mb-20" animation="revealUp">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              <path d="M15 7h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V7z" />
            </svg>
            ACTUALITÉS & NOUVELLES
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight text-gray-900">
            Restez informé
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">de nos dernières actualités</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Découvrez nos dernières réalisations, certifications et événements marquants
          </p>
        </ScrollAnimateWrapper>

        {/* News Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {latestNews.map((article, index) => {
            const categoryColors = getCategoryColor(article.category);
            const animations: Array<'fadeInUp' | 'scaleIn' | 'flipInX' | 'zoomRotateIn'> = ['fadeInUp', 'scaleIn', 'flipInX'];
            
            return (
              <ScrollAnimateWrapper
                key={article.id}
                animation={animations[index % animations.length]}
                delay={`stagger-${index + 1}`}
                className="group"
              >
                <Link href={`/news/${article.slug}`}>
                  <article className="relative h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-3">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${categoryColors.bg} ${categoryColors.text} ${categoryColors.border} border backdrop-blur-sm shadow-sm`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {article.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900 backdrop-blur-sm shadow-sm">
                            ⭐ À la une
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Date and Read Time */}
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ClockIcon className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
                        <span>Lire la suite</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </article>
                </Link>
              </ScrollAnimateWrapper>
            );
          })}
        </div>

        {/* View All Button */}
        <ScrollAnimateWrapper className="text-center mt-12 sm:mt-16 md:mt-20" animation="fadeInUp" delay="stagger-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span>Voir toutes les actualités</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

