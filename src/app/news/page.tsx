'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const articles = [
  {
    id: 1,
    title: 'EPS Remporte le Prix de l\'Excellence Environnementale 2023',
    slug: 'prix-excellence-environnementale-2023',
    excerpt: 'Notre engagement pour l\'environnement reconnu au niveau national avec l\'obtention du Prix de l\'Excellence Environnementale.',
    content: 'Nous sommes fiers d\'annoncer que EPS - El Baraka Prestations de Service a été récompensée par le Prix de l\'Excellence Environnementale 2023, décerné par le Ministère de l\'Environnement...',
    image: '/images/news/formation.jpg',
    category: 'Récompenses',
    author: 'Direction EPS',
    date: '2023-12-15',
    readTime: '3 min',
    tags: ['Environnement', 'Prix', 'Excellence'],
    featured: true
  },
  {
    id: 2,
    title: 'Nouvelle Certification ISO 14001 pour EPS',
    slug: 'certification-iso-14001',
    excerpt: 'EPS obtient la certification ISO 14001, confirmant notre engagement envers la gestion environnementale.',
    content: 'Dans le cadre de notre démarche d\'amélioration continue, EPS vient d\'obtenir la certification ISO 14001...',
    image: '/images/news/hygiene.jpg',
    category: 'Certifications',
    author: 'Équipe Qualité',
    date: '2023-11-28',
    readTime: '4 min',
    tags: ['ISO', 'Certification', 'Qualité'],
    featured: true
  },
  {
    id: 3,
    title: 'Formation Spécialisée : Techniques de Nettoyage Écologique',
    slug: 'formation-nettoyage-ecologique',
    excerpt: 'Nos équipes se forment aux dernières techniques de nettoyage respectueuses de l\'environnement.',
    content: 'L\'innovation et la formation continue sont au cœur de notre stratégie. Cette semaine, nos équipes ont participé à une formation spécialisée...',
    image: '/images/services/nettoyage.jpg',
    category: 'Formation',
    author: 'Fatima Mint Ali',
    date: '2023-11-15',
    readTime: '5 min',
    tags: ['Formation', 'Écologie', 'Innovation'],
    featured: false
  },
  {
    id: 4,
    title: 'Expansion : EPS Ouvre une Nouvelle Agence à Kaédi',
    slug: 'ouverture-agence-kaedi',
    excerpt: 'Pour mieux servir nos clients du sud du pays, nous ouvrons une nouvelle agence à Kaédi.',
    content: 'Dans le cadre de notre expansion nationale, EPS est fière d\'annoncer l\'ouverture de sa nouvelle agence à Kaédi...',
    image: '/images/projects/nouakchott.jpg',
    category: 'Expansion',
    author: 'Ahmed Mohamed',
    date: '2023-10-30',
    readTime: '3 min',
    tags: ['Expansion', 'Kaédi', 'Agence'],
    featured: false
  },
  {
    id: 5,
    title: 'Partenariat Stratégique avec l\'Université de Nouakchott',
    slug: 'partenariat-universite-nouakchott',
    excerpt: 'Un partenariat innovant pour la recherche et développement dans les technologies de nettoyage.',
    content: 'EPS et l\'Université de Nouakchott Al-Aasriya signent un accord de partenariat stratégique...',
    image: '/images/services/communication.jpg',
    category: 'Partenariats',
    author: 'Omar Sidi',
    date: '2023-10-15',
    readTime: '4 min',
    tags: ['Partenariat', 'Université', 'R&D'],
    featured: false
  },
  {
    id: 6,
    title: 'Campagne de Sensibilisation : "Mauritanie Propre"',
    slug: 'campagne-mauritanie-propre',
    excerpt: 'EPS lance une grande campagne de sensibilisation environnementale à travers tout le pays.',
    content: 'Dans le cadre de notre responsabilité sociale, EPS lance la campagne "Mauritanie Propre"...',
    image: '/images/services/gestion-faune.jpg',
    category: 'Responsabilité Sociale',
    author: 'Aicha Brahim',
    date: '2023-09-20',
    readTime: '6 min',
    tags: ['Campagne', 'Environnement', 'Sensibilisation'],
    featured: false
  }
];

const categories = [
  { name: 'Tous', value: 'all', count: articles.length },
  { name: 'Récompenses', value: 'Récompenses', count: articles.filter(a => a.category === 'Récompenses').length },
  { name: 'Certifications', value: 'Certifications', count: articles.filter(a => a.category === 'Certifications').length },
  { name: 'Formation', value: 'Formation', count: articles.filter(a => a.category === 'Formation').length },
  { name: 'Expansion', value: 'Expansion', count: articles.filter(a => a.category === 'Expansion').length },
  { name: 'Partenariats', value: 'Partenariats', count: articles.filter(a => a.category === 'Partenariats').length }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Récompenses': 'bg-yellow-100 text-yellow-800',
    'Certifications': 'bg-blue-100 text-blue-800',
    'Formation': 'bg-green-100 text-green-800',
    'Expansion': 'bg-purple-100 text-purple-800',
    'Partenariats': 'bg-indigo-100 text-indigo-800',
    'Responsabilité Sociale': 'bg-pink-100 text-pink-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            ref={parallax1.elementRef}
            className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${parallax1.offset.x}px, ${parallax1.offset.y}px) rotate(${parallax1.offset.rotation}deg) scale(${parallax1.offset.scaleValue})`
            }}
          ></div>
          <div
            ref={parallax2.elementRef}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${parallax2.offset.x}px, ${parallax2.offset.y}px) rotate(${parallax2.offset.rotation}deg) scale(${parallax2.offset.scaleValue})`
            }}
          ></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Actualités & Blog</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Actualités</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Suivez l'actualité d'<span className="text-yellow-400 font-semibold">EPS</span>,
                  nos innovations, réussites et engagement pour un avenir plus propre
                </p>
              </div>
            </ScrollAnimateWrapper>
          </ScrollAnimateWrapper>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                À la Une
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les dernières actualités importantes d'EPS
              </p>
            </ScrollAnimateWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <ScrollAnimateWrapper 
                  key={article.id}
                  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      À LA UNE
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                      <p className="text-white/90 text-sm">{article.excerpt}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span>Par {article.author}</span>
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                      Lire l'article
                    </button>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="fadeIn">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <ScrollAnimateWrapper 
                key={article.id}
                animation={index % 3 === 0 ? 'slideInLeft' : index % 3 === 1 ? 'slideInUp' : 'slideInRight'}
                delay={`stagger-${(index % 3) + 1}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Par {article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime} de lecture</span>
                    <button className="bg-rose-100 hover:bg-rose-200 text-rose-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Lire plus
                    </button>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCategoryColor(selectedArticle.category)}`}>
                  {selectedArticle.category}
                </span>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedArticle.title}</h2>
                <p className="text-white/90">{selectedArticle.excerpt}</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Par {selectedArticle.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(selectedArticle.date).toLocaleDateString('fr-FR')}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedArticle.readTime} de lecture
                  </span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedArticle.content}
                </p>
                
                {/* Placeholder for full article content */}
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedArticle.tags.map((tag, idx) => (
                  <span key={idx} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-xl text-center transition-all duration-300 text-xs sm:text-sm"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/services"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-xl text-center transition-all duration-300 text-xs sm:text-sm"
                >
                  Nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <ParticlesBackground particleCount={40} color="rgba(236, 72, 153, 0.1)" speed={0.3} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Restez Informé
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités 
                et conseils d'experts directement dans votre boîte mail
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm">
                  S'abonner
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Pas de spam, désinscription possible à tout moment
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-rose-600 to-purple-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={60} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Une Question ? Un Projet ?
            </h2>
            <p className="text-xl text-rose-100 mb-12 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Découvrir nos services
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </main>
  );
}