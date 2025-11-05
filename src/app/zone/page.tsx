'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const zones = [
  {
    id: 1,
    name: 'Nouakchott',
    region: 'Nouakchott',
    description: 'Notre zone principale d\'intervention avec une couverture complète de tous les arrondissements.',
    coverage: '100%',
    responseTime: '30 min',
    services: ['Tous services', 'Intervention urgence', 'Maintenance préventive'],
    districts: ['Tevragh Zeina', 'Ksar', 'Sebkha', 'Arafat', 'Dar Naim', 'Toujounine', 'El Mina', 'Riad', 'Teyarett'],
    population: '1.2M habitants',
    businessCount: '5000+ entreprises',
    color: 'from-blue-500 to-blue-600',
    icon: '🏙️'
  },
  {
    id: 2,
    name: 'Nouadhibou',
    region: 'Dakhlet Nouadhibou',
    description: 'Port économique principal avec services spécialisés pour l\'industrie et la pêche.',
    coverage: '90%',
    responseTime: '45 min',
    services: ['Nettoyage industriel', 'Lutte antiparasitaire', 'Services portuaires'],
    districts: ['Centre-ville', 'Zone portuaire', 'Cité', 'Numerowatt'],
    population: '130K habitants',
    businessCount: '800+ entreprises',
    color: 'from-green-500 to-green-600',
    icon: '🚢'
  },
  {
    id: 3,
    name: 'Rosso',
    region: 'Trarza',
    description: 'Zone frontalière stratégique avec services adaptés au commerce transfrontalier.',
    coverage: '80%',
    responseTime: '1h',
    services: ['Nettoyage commercial', 'Désinfection', 'Manutention aéroportuaire'],
    districts: ['Centre', 'Marché', 'Zone commerciale'],
    population: '70K habitants',
    businessCount: '300+ entreprises',
    color: 'from-purple-500 to-purple-600',
    icon: '🌉'
  },
  {
    id: 4,
    name: 'Kaédi',
    region: 'Gorgol',
    description: 'Centre agricole important avec services spécialisés pour l\'agro-industrie.',
    coverage: '75%',
    responseTime: '1h30',
    services: ['Nettoyage agricole', 'Gestion faune', 'Désinsectisation'],
    districts: ['Centre', 'Zone agricole', 'Marché'],
    population: '60K habitants',
    businessCount: '200+ entreprises',
    color: 'from-yellow-500 to-orange-500',
    icon: '🌾'
  },
  {
    id: 5,
    name: 'Zouerate',
    region: 'Tiris Zemmour',
    description: 'Zone minière avec services spécialisés pour l\'industrie extractive.',
    coverage: '70%',
    responseTime: '2h',
    services: ['Nettoyage industriel', 'Sécurité', 'Maintenance spécialisée'],
    districts: ['Cité minière', 'Zone industrielle'],
    population: '45K habitants',
    businessCount: '100+ entreprises',
    color: 'from-red-500 to-red-600',
    icon: '⛏️'
  },
  {
    id: 6,
    name: 'Atar',
    region: 'Adrar',
    description: 'Capitale historique avec services touristiques et patrimoniaux.',
    coverage: '65%',
    responseTime: '2h30',
    services: ['Nettoyage hôtelier', 'Maintenance patrimoine', 'Services touristiques'],
    districts: ['Centre historique', 'Zone touristique'],
    population: '40K habitants',
    businessCount: '150+ entreprises',
    color: 'from-indigo-500 to-indigo-600',
    icon: '🏛️'
  }
];

const serviceTypes = [
  {
    name: 'Intervention Urgence',
    description: 'Service d\'urgence 24h/7j',
    zones: ['Nouakchott', 'Nouadhibou'],
    icon: '🚨',
    color: 'bg-red-100 text-red-800'
  },
  {
    name: 'Nettoyage Industriel',
    description: 'Services spécialisés industrie',
    zones: ['Nouakchott', 'Nouadhibou', 'Zouerate'],
    icon: '🏭',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Services Hôteliers',
    description: 'Nettoyage et maintenance hôtels',
    zones: ['Nouakchott', 'Nouadhibou', 'Atar'],
    icon: '🏨',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Agriculture & Élevage',
    description: 'Services agricoles spécialisés',
    zones: ['Kaédi', 'Rosso'],
    icon: '🌾',
    color: 'bg-yellow-100 text-yellow-800'
  }
];

export default function ZonePage() {
  const [selectedZone, setSelectedZone] = useState<typeof zones[0] | null>(null);
  const [activeTab, setActiveTab] = useState('zones');

  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

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
              <span className="text-white text-xs font-medium drop-shadow-lg">Zones d'Intervention</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Nos Zones</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Une <span className="text-yellow-400 font-semibold">couverture nationale</span> avec des services
                  de proximité adaptés aux spécificités de chaque région
                </p>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-sm"
                >
                  <span className="drop-shadow-sm">Demander une intervention</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:+222XXXXXXXX"
                  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm"
                >
                  <span className="drop-shadow-lg">Urgence 24h/7j</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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

      {/* Coverage Stats */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Notre Couverture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une présence stratégique sur tout le territoire mauritanien
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Régions Couvertes', value: '6', icon: '🗺️' },
              { label: 'Villes Principales', value: '6', icon: '🏙️' },
              { label: 'Population Couverte', value: '1.5M+', icon: '👥' },
              { label: 'Temps Moyen', value: '45 min', icon: '⏱️' }
            ].map((stat, index) => (
              <ScrollAnimateWrapper 
                key={stat.label}
                animation="bounceIn"
                delay={`stagger-${(index % 4) + 1}`}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-teal-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimateWrapper animation="fadeIn">
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('zones')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'zones'
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Zones d'Intervention
                  </button>
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'services'
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Services par Zone
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Zones Grid */}
      {activeTab === 'zones' && (
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {zones.map((zone, index) => (
                <ScrollAnimateWrapper 
                  key={zone.id}
                  animation={index % 3 === 0 ? 'slideInLeft' : index % 3 === 1 ? 'slideInUp' : 'slideInRight'}
                  delay={`stagger-${(index % 3) + 1}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedZone(zone)}
                >
                  <div className={`h-2 bg-gradient-to-r ${zone.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${zone.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {zone.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{zone.name}</h3>
                        <p className="text-gray-600">{zone.region}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{zone.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-teal-600">{zone.coverage}</div>
                        <div className="text-sm text-gray-600">Couverture</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-cyan-600">{zone.responseTime}</div>
                        <div className="text-sm text-gray-600">Temps Réponse</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Services Disponibles</h4>
                      <div className="flex flex-wrap gap-2">
                        {zone.services.slice(0, 2).map((service, idx) => (
                          <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                            {service}
                          </span>
                        ))}
                        {zone.services.length > 2 && (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            +{zone.services.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                      Voir les détails
                    </button>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services by Zone */}
      {activeTab === 'services' && (
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceTypes.map((service, index) => (
                <ScrollAnimateWrapper 
                  key={service.name}
                  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                  delay={`stagger-${(index % 2) + 1}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Zones Couvertes</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.zones.map((zone, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${service.color}`}>
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Demander ce service
                  </Link>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zone Modal */}
      {selectedZone && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedZone(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`h-2 bg-gradient-to-r ${selectedZone.color}`}></div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedZone.color} rounded-full flex items-center justify-center text-3xl`}>
                    {selectedZone.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedZone.name}</h2>
                    <p className="text-xl text-gray-600">{selectedZone.region}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedZone(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{selectedZone.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Couverture</h4>
                  <p className="text-2xl font-bold text-teal-600">{selectedZone.coverage}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Temps Réponse</h4>
                  <p className="text-2xl font-bold text-cyan-600">{selectedZone.responseTime}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Population</h4>
                  <p className="text-lg font-bold text-gray-700">{selectedZone.population}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">Entreprises</h4>
                  <p className="text-lg font-bold text-gray-700">{selectedZone.businessCount}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Services Disponibles</h3>
                  <ul className="space-y-2">
                    {selectedZone.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quartiers/Districts</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedZone.districts.map((district, idx) => (
                      <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                        {district}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300"
                >
                  Demander une intervention
                </Link>
                <a
                  href="tel:+222XXXXXXXX"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <ParticlesBackground particleCount={40} color="rgba(20, 184, 166, 0.1)" speed={0.3} />
        
        <div className="container-custom relative z-10">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Carte Interactive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visualisez notre couverture géographique en Mauritanie
            </p>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="zoomRotateIn">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 lg:p-16 text-center">
              <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Carte Interactive Bientôt Disponible</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Une carte interactive détaillée sera prochainement disponible pour visualiser 
                nos zones d'intervention et localiser nos équipes en temps réel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🗺️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Zones Détaillées</h4>
                  <p className="text-gray-600 text-sm">Visualisation précise de chaque zone d'intervention</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">📍</div>
                  <h4 className="font-bold text-gray-900 mb-2">Géolocalisation</h4>
                  <p className="text-gray-600 text-sm">Localisation en temps réel de nos équipes</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">⏱️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Temps Réel</h4>
                  <p className="text-gray-600 text-sm">Estimation précise des temps d'intervention</p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={60} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Besoin d'une Intervention ?
            </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-3xl mx-auto">
              Quelle que soit votre localisation en Mauritanie, nos équipes sont prêtes 
              à intervenir rapidement pour répondre à vos besoins
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-teal-50 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Planifier une intervention
              </Link>
              <a
                href="tel:+222XXXXXXXX"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Urgence 24h/7j
              </a>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </main>
  );
}