'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

// Structure des services par groupes
const serviceGroups = [
  {
    name: 'Nettoyage',
    description: 'Solutions complètes de nettoyage et gestion environnementale',
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        id: 'nettoyage',
        title: 'Nettoyage Professionnel',
        description: 'Solutions complètes de nettoyage pour tous types d\'espaces professionnels et résidentiels.',
        image: '/images/services/nettoyage.jpg',
        href: '/services/nettoyage',
        features: [
          'Nettoyage de bureaux et espaces commerciaux',
          'Entretien d\'immeubles résidentiels',
          'Nettoyage industriel spécialisé',
          'Nettoyage après travaux',
          'Services de désinfection',
          'Nettoyage de vitres et façades'
        ],
        benefits: [
          'Équipe professionnelle formée',
          'Produits écologiques certifiés',
          'Matériel de pointe',
          'Intervention 24h/7j',
          'Devis gratuit sous 24h',
          'Garantie satisfaction'
        ]
      },
      {
        id: 'gestion-faune',
        title: 'Gestion de la Faune',
        description: 'Gestion respectueuse et professionnelle de la faune urbaine et périurbaine.',
        image: '/images/services/gestion-faune.jpg',
        href: '/services/faune',
        features: [
          'Capture et relocalisation',
          'Prévention des intrusions',
          'Nettoyage des déjections',
          'Installation de protections',
          'Conseil en aménagement',
          'Suivi écologique'
        ],
        benefits: [
          'Approche respectueuse',
          'Méthodes non-létales',
          'Expertise reconnue',
          'Solutions durables',
          'Respect de la réglementation',
          'Sensibilisation'
        ]
      },
      {
        id: 'lutte-antiparasitaire',
        title: 'Lutte Antiparasitaire',
        description: 'Protection efficace contre tous types de nuisibles avec des méthodes respectueuses de l\'environnement.',
        image: '/images/services/lutte-antiparasitaire.jpg',
        href: '/services/antiparasitaire',
        features: [
          'Dératisation professionnelle',
          'Désinsectisation ciblée',
          'Traitement anti-termites',
          'Prévention des infestations',
          'Audit et diagnostic',
          'Suivi régulier'
        ],
        benefits: [
          'Méthodes écologiques',
          'Techniciens certifiés',
          'Garantie de résultats',
          'Intervention rapide',
          'Suivi post-traitement',
          'Conseils de prévention'
        ]
      },
    ]
  },
  {
    name: 'Manutention',
    description: 'Services spécialisés de manutention et assistance aéroportuaire',
    color: 'from-indigo-500 to-purple-500',
    services: [
      {
        id: 'manutention',
        title: 'Manutention Aéroportuaire',
        description: 'Services spécialisés de manutention dans les aéroports pour le chargement et déchargement des bagages et l\'affrètement.',
        image: '/images/services/manutention.jpg',
        href: '/services/manutention',
        features: [
          'Chargement et déchargement des bagages',
          'Manutention de fret aérien',
          'Services d\'affrètement',
          'Tri et acheminement des bagages',
          'Manutention cargo spécialisée',
          'Support logistique aéroportuaire'
        ],
        benefits: [
          'Personnel certifié aéroportuaire',
          'Équipements spécialisés aviation',
          'Respect normes IATA',
          'Traçabilité complète',
          'Intervention 24h/7j',
          'Expertise secteur aérien'
        ]
      },
      {
        id: 'assistance-pmr',
        title: 'Assistance PMR Aéroportuaire',
        description: 'Services d\'assistance spécialisés pour les passagers à mobilité réduite dans les aéroports.',
        image: '/images/services/assistance-pmr.jpg',
        href: '/services/pmr',
        features: [
          'Accompagnement embarquement/débarquement',
          'Assistance fauteuil roulant',
          'Transport entre terminaux',
          'Aide aux contrôles de sécurité',
          'Assistance bagages PMR',
          'Support personnalisé passagers'
        ],
        benefits: [
          'Personnel formé assistance PMR',
          'Équipements adaptés mobilité',
          'Respect dignité passagers',
          'Coordination avec compagnies',
          'Service discret et professionnel',
          'Disponibilité permanente'
        ]
      },
    ]
  },
  {
    name: 'Communications',
    description: 'Solutions créatives de communication et organisation d\'événements',
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        id: 'communication',
        title: 'Communication & Événementiel',
        description: 'Solutions créatives de communication et organisation d\'événements professionnels.',
        image: '/images/services/communication.jpg',
        href: '/services/communication',
        features: [
          'Impression numérique haute qualité',
          'Impression sur bâches et textile',
          'Création de supports publicitaires',
          'Organisation de stands d\'exposition',
          'Location de matériel événementiel',
          'Conseil en communication'
        ],
        benefits: [
          'Créativité et innovation',
          'Matériel professionnel',
          'Délais respectés',
          'Prix compétitifs',
          'Service clé en main',
          'Accompagnement projet'
        ]
      },
    ]
  }
];

const sectors = [
  {
    name: 'Bureaux & Entreprises',
    description: 'Espaces de travail modernes',
    icon: '🏢'
  },
  {
    name: 'Centres Commerciaux',
    description: 'Espaces publics à fort passage',
    icon: '🛍️'
  },
  {
    name: 'Établissements de Santé',
    description: 'Hygiène renforcée',
    icon: '🏥'
  },
  {
    name: 'Écoles & Universités',
    description: 'Environnement éducatif sain',
    icon: '🎓'
  },
  {
    name: 'Hôtels & Restaurants',
    description: 'Secteur hôtelier exigeant',
    icon: '🏨'
  },
  {
    name: 'Industrie',
    description: 'Environnements spécialisés',
    icon: '🏭'
  }
];

export default function ServicesPage() {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

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
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Services Professionnels</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Nos Services</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-6 sm:mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Des solutions professionnelles complètes pour répondre à tous vos besoins en
                  <span className="text-yellow-400 font-semibold"> nettoyage</span> et
                  <span className="text-yellow-400 font-semibold"> communication & événementiel</span>
                </p>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
                >
                  <span className="drop-shadow-sm">Demander un devis</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
                >
                  <span className="drop-shadow-lg">Voir nos réalisations</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
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

      {/* Services by Groups */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Notre Gamme de Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions professionnelles organisées par domaines d'expertise
            </p>
          </ScrollAnimateWrapper>

          <div className="space-y-16">
            {serviceGroups.map((group, groupIndex) => (
              <div key={group.name} className="space-y-8">
                {/* Group Header */}
                <ScrollAnimateWrapper animation="revealUp" delay={`stagger-${groupIndex + 1}`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl mb-4 shadow-lg`}>
                      <span className="text-2xl">
                        {group.name === 'Nettoyage' ? '🧹' : group.name === 'Manutention' ? '📦' : '📢'}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                      {group.name}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {group.description}
                    </p>
                  </div>
                </ScrollAnimateWrapper>

                {/* Services in Group */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {group.services.map((service, index) => (
                    <ScrollAnimateWrapper 
                      key={service.id} 
                      animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                      delay={`stagger-${(index % 2) + 1}`}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <Link href={service.href}>
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-white/90">{service.description}</p>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Nos Prestations
                              </h4>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Nos Avantages
                              </h4>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <Link
                              href={service.href}
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all"
                            >
                              En savoir plus
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </ScrollAnimateWrapper>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(59, 130, 246, 0.1)" speed={0.3} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous intervenons dans tous les secteurs avec une expertise adaptée
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <ScrollAnimateWrapper 
                key={sector.name}
                animation="bounceIn"
                delay={`stagger-${(index % 3) + 1}`}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={40} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Demander un devis
              </Link>
              <Link
                href="tel:+222XXXXXXXX"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </main>
  );
}