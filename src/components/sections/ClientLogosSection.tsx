'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Tous les logos des clients disponibles dans le dossier - Aviation en premier
const clientLogos = [
  // Clients Aviation (en premier)
  {
    name: "Royal Air Maroc",
    logo: "/images/logos/Logo_Royal_Air_Maroc_logo.png",
    category: "Aviation"
  },
  {
    name: "Turkish Airlines",
    logo: "/images/logos/Turkish_Airlines_logo_2019_compact_logo.png",
    category: "Aviation"
  },
  {
    name: "Air France",
    logo: "/images/logos/AF_logo.png",
    category: "Aviation"
  },
  {
    name: "MAI",
    logo: "/images/logos/MAI_logo.png",
    category: "Aviation"
  },
  // Autres clients
  {
    name: "Kinross Tasiast",
    logo: "/images/logos/Kinross_logo.png",
    category: "Mines"
  },
  {
    name: "SNIM",
    logo: "/images/logos/Snim_logo.png",
    category: "Mines"
  },
  {
    name: "SOMELEC",
    logo: "/images/logos/somelec_logo.png",
    category: "Énergie"
  },
  {
    name: "Total Energies",
    logo: "/images/logos/totalenergies_logo.png",
    category: "Pétrole"
  },
  {
    name: "Société Générale",
    logo: "/images/logos/Societe-Generale_Logo.png",
    category: "Banque"
  },
  {
    name: "QNB",
    logo: "/images/logos/qnb_logo.png",
    category: "Banque"
  },
  {
    name: "Maersk Line",
    logo: "/images/logos/maersk-line_logo.png",
    category: "Transport"
  },
  {
    name: "MOOV",
    logo: "/images/logos/moov_logo.png",
    category: "Télécommunications"
  },
  {
    name: "Premier Ministère",
    logo: "/images/logos/Premier-ministere_logo.png",
    category: "Gouvernement"
  },
  {
    name: "Police Nationale",
    logo: "/images/logos/police_logo.png",
    category: "Sécurité"
  },
  {
    name: "ANARPAM",
    logo: "/images/logos/anarpam_logo.png",
    category: "Administration"
  },
  {
    name: "BCM",
    logo: "/images/logos/bcm_logo.png",
    category: "Banque"
  },
  {
    name: "BIM",
    logo: "/images/logos/bim_logo.png",
    category: "Banque"
  },
  {
    name: "MCM",
    logo: "/images/logos/mcm_logo.png",
    category: "Banque"
  },
  {
    name: "PAN",
    logo: "/images/logos/pan_logo.png",
    category: "Logistique & Transport"
  },
  {
    name: "SAM",
    logo: "/images/logos/SAM_LOGO.png",
    category: "Aviation"
  },
  {
    name: "SNDE",
    logo: "/images/logos/snde_logo.png",
    category: "Énergie"
  }
];

export const ClientLogosSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slidesToShow = 9; // Nombre de logos visibles par slide
  const totalSlides = Math.ceil(clientLogos.length / slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={25} color="rgba(59, 130, 246, 0.15)" speed={0.2} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <ScrollAnimateWrapper animation="slideInLeft" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                NOS CLIENTS DE CONFIANCE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-gray-900">
                Interventions et
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Références</span>
                <span className="block">Représentatives au</span>
                <span className="block">Service des Projets</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Stratégiques</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  EPS - El Baraka Prestations de Service est un acteur majeur des services 
                  aéroportuaires en Mauritanie, reconnu pour sa maîtrise des projets 
                  complexes et sa capacité à proposer des solutions techniques sur mesure.
                </p>
                <p>
                  Grâce à une approche intégrée, l'entreprise garantit une gestion efficace des 
                  opérations, en alliant innovation, exigence de qualité et respect rigoureux 
                  des standards internationaux.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Nos Réalisations
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Nous Contacter
                </Link>
              </div>
            </div>
          </ScrollAnimateWrapper>

          {/* Right Column - Client Logos Slider */}
          <ScrollAnimateWrapper animation="slideInRight" className="relative">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              {/* Slider Container */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-3 gap-4 px-4">
                        {clientLogos
                          .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                          .map((client, index) => (
                            <div
                              key={index}
                              className="group relative bg-gray-50 hover:bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-blue-200"
                            >
                              <div className="h-24 flex items-center justify-center relative">
                                <Image
                                  src={client.logo}
                                  alt={client.name}
                                  width={200}
                                  height={100}
                                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 p-3 max-w-full max-h-full"
                                  sizes="(max-width: 768px) 33vw, 20vw"
                                />
                              </div>
                              
                              {/* Client info on hover */}
                              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                                  <div className="text-xs font-semibold text-gray-800 truncate">
                                    {client.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {client.category}
                                  </div>
                                </div>
                              </div>
                          
                              {/* Hover effect overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                {/* Slide Indicators */}
                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{clientLogos.length}+</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-xs text-gray-500">Années</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99%</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </div>
    </section>
  );
};
