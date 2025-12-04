'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
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
  const [isPaused, setIsPaused] = useState(false);
  
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  // Dupliquer les logos pour un défilement infini fluide
  const duplicatedLogos = [...clientLogos, ...clientLogos];

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
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            NOS CLIENTS DE CONFIANCE
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight text-gray-900">
            Nos
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients de Confiance</span>
          </h2>
        </ScrollAnimateWrapper>

        {/* Elegant Carousel */}
        <ScrollAnimateWrapper animation="fadeInUp" className="relative">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 shadow-2xl">
            {/* Carousel Container with Infinite Scroll */}
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Gradient Overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Logos Container with CSS Animation */}
              <div 
                className={`flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 ${isPaused ? '' : 'animate-scroll-infinite'}`}
                style={{ width: 'max-content' }}
              >
                {duplicatedLogos.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="group flex-shrink-0 relative bg-gray-50 hover:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 border border-gray-100 hover:border-blue-300"
                  >
                    <div className="h-20 sm:h-24 md:h-28 lg:h-32 w-32 sm:w-36 md:w-40 lg:w-44 flex items-center justify-center relative">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={200}
                        height={100}
                        className="object-contain transition-all duration-500 p-2 sm:p-3 max-w-full max-h-full"
                        sizes="(max-width: 768px) 25vw, 15vw"
                      />
                    </div>
                    
                    {/* Client info on hover */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center whitespace-nowrap shadow-xl">
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-300 mt-1">
                          {client.category}
                        </div>
                      </div>
                    </div>
                
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom stats */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{clientLogos.length}+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Clients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Années</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99%</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};
