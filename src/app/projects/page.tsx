'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const projects = [
  {
    id: 1,
    title: 'Centre Commercial Nouakchott Plaza',
    category: 'Nettoyage Commercial',
    description: 'Nettoyage complet et maintenance d\'un centre commercial de 15 000 m² avec 80 boutiques.',
    image: '/images/projects/nouakchott.jpg',
    client: 'Nouakchott Plaza',
    duration: '6 mois',
    surface: '15 000 m²',
    team: '12 personnes',
    services: ['Nettoyage quotidien', 'Entretien des sols', 'Nettoyage des vitres', 'Désinfection'],
    results: ['100% satisfaction client', 'Réduction 30% des coûts', 'Amélioration hygiène'],
    status: 'Terminé',
    year: '2023'
  },
  {
    id: 2,
    title: 'Hôtel Oumtounsy International',
    category: 'Hôtellerie',
    description: 'Service de nettoyage professionnel pour un hôtel 4 étoiles de 120 chambres.',
    image: '/images/projects/oumtounsy.jpg',
    client: 'Oumtounsy Hotels',
    duration: '12 mois',
    surface: '8 000 m²',
    team: '18 personnes',
    services: ['Nettoyage chambres', 'Entretien espaces communs', 'Blanchisserie', 'Désinfection'],
    results: ['Certification hygiène', 'Satisfaction 98%', 'Renouvellement contrat'],
    status: 'En cours',
    year: '2023'
  },
  {
    id: 3,
    title: 'Campus Universitaire de Nouakchott',
    category: 'Éducation',
    description: 'Nettoyage et maintenance des bâtiments universitaires pour 5000 étudiants.',
    image: '/images/services/nettoyage.jpg',
    client: 'Université de Nouakchott',
    duration: '24 mois',
    surface: '25 000 m²',
    team: '25 personnes',
    services: ['Nettoyage salles de cours', 'Entretien laboratoires', 'Désinfection', 'Gestion déchets'],
    results: ['Environnement sain', 'Respect normes', 'Économies réalisées'],
    status: 'En cours',
    year: '2022'
  },
  {
    id: 4,
    title: 'Complexe Industriel SNIM',
    category: 'Industrie',
    description: 'Nettoyage industriel spécialisé et lutte antiparasitaire pour un site minier.',
    image: '/images/services/lutte-antiparasitaire.jpg',
    client: 'SNIM',
    duration: '18 mois',
    surface: '50 000 m²',
    team: '30 personnes',
    services: ['Nettoyage industriel', 'Dératisation', 'Désinsectisation', 'Maintenance'],
    results: ['Zéro incident', 'Conformité totale', 'Productivité améliorée'],
    status: 'Terminé',
    year: '2022'
  },
  {
    id: 5,
    title: 'Salon International du Tourisme',
    category: 'Événementiel',
    description: 'Organisation complète d\'un salon professionnel avec 200 exposants.',
    image: '/images/services/communication.jpg',
    client: 'Ministère du Tourisme',
    duration: '3 mois',
    surface: '5 000 m²',
    team: '15 personnes',
    services: ['Stands d\'exposition', 'Signalétique', 'Impression', 'Coordination'],
    results: ['200 exposants', '10 000 visiteurs', 'Succès médiatique'],
    status: 'Terminé',
    year: '2023'
  },
  {
    id: 6,
    title: 'Résidence El Baraka',
    category: 'Résidentiel',
    description: 'Entretien complet d\'une résidence de standing avec services aux résidents.',
    image: '/images/services/assistance-pmr.jpg',
    client: 'Résidence El Baraka',
    duration: 'Permanent',
    surface: '12 000 m²',
    team: '8 personnes',
    services: ['Nettoyage commun', 'Jardinage', 'Assistance PMR passagers', 'Conciergerie'],
    results: ['Satisfaction 100%', 'Services premium', 'Fidélisation client'],
    status: 'En cours',
    year: '2021'
  }
];

const categories = [
  { name: 'Tous', value: 'all', count: projects.length },
  { name: 'Commercial', value: 'Nettoyage Commercial', count: projects.filter(p => p.category === 'Nettoyage Commercial').length },
  { name: 'Hôtellerie', value: 'Hôtellerie', count: projects.filter(p => p.category === 'Hôtellerie').length },
  { name: 'Éducation', value: 'Éducation', count: projects.filter(p => p.category === 'Éducation').length },
  { name: 'Industrie', value: 'Industrie', count: projects.filter(p => p.category === 'Industrie').length },
  { name: 'Événementiel', value: 'Événementiel', count: projects.filter(p => p.category === 'Événementiel').length },
  { name: 'Résidentiel', value: 'Résidentiel', count: projects.filter(p => p.category === 'Résidentiel').length }
];

const stats = [
  { label: 'Projets Réalisés', value: '150+', icon: '📊' },
  { label: 'Clients Satisfaits', value: '100+', icon: '😊' },
  { label: 'Surface Traitée', value: '500K m²', icon: '📏' },
  { label: 'Années d\'Expérience', value: '15+', icon: '⏰' }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-green-100 text-green-800';
      case 'Terminé': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32 overflow-hidden">
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

        <div className="container-custom relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Nos Réalisations</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Nos Projets</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Découvrez nos <span className="text-yellow-400 font-semibold">réalisations exceptionnelles</span> et
                  la satisfaction de nos clients à travers des projets variés et innovants
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

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Nos Chiffres Clés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les résultats de notre expertise et de notre engagement
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimateWrapper 
                key={stat.label}
                animation="bounceIn"
                delay={`stagger-${(index % 4) + 1}`}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-purple-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimateWrapper animation="fadeIn">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
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

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimateWrapper 
                key={project.id}
                animation={index % 3 === 0 ? 'slideInLeft' : index % 3 === 1 ? 'slideInUp' : 'slideInRight'}
                delay={`stagger-${(index % 3) + 1}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                    {project.year}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Client</p>
                      <p className="font-semibold text-gray-900">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Surface</p>
                      <p className="font-semibold text-gray-900">{project.surface}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                        +{project.services.length - 3} autres
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Voir les détails
                  </button>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-white/90">{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Client</h4>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Durée</h4>
                  <p className="text-gray-600">{selectedProject.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Surface</h4>
                  <p className="text-gray-600">{selectedProject.surface}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Équipe</h4>
                  <p className="text-gray-600">{selectedProject.team}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Services Fournis
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Résultats Obtenus
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300"
                >
                  Projet similaire ?
                </Link>
                <Link
                  href="/services"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300"
                >
                  Nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={60} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Votre Projet, Notre Expertise
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Rejoignez nos clients satisfaits et bénéficiez de notre savoir-faire 
              pour mener à bien vos projets les plus ambitieux
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Discuter de votre projet
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