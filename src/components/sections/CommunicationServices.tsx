'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const communicationServices = [
  {
    title: "Impression numérique",
    description: "Impression haute qualité pour tous vos supports de communication professionnels",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    title: "Impression sur bâches, textile et gadgets",
    description: "Personnalisation de tous types de supports : bâches publicitaires, textiles et objets promotionnels",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600"
  },
  {
    title: "Organisation de stands d'exposition",
    description: "Design sur mesure et communication de marque efficace pour vos événements à des prix très intéressants",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    title: "Location de supports",
    description: "Large gamme de supports événementiels disponibles à la location pour tous vos besoins",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600"
  }
];

const clientTypes = [
  {
    name: "Entreprises",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Associations",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-green-500 to-green-600"
  },
  {
    name: "Institutions gouvernementales",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Particuliers",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "from-orange-500 to-orange-600"
  }
];

const commAnimations: Array<'flipInX' | 'zoomRotateIn' | 'bounceIn' | 'scaleIn'> = ['flipInX', 'zoomRotateIn', 'bounceIn', 'scaleIn'];

export const CommunicationServices: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.4, direction: 'down', rotate: true });
  const parallax2 = useParallax({ speed: 0.3, direction: 'up' });

  return (
    <>
      {/* Communication Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground particleCount={20} color="rgba(168, 85, 247, 0.25)" speed={0.25} />
        
        {/* Decorative elements with parallax */}
        <div 
          ref={parallax1.elementRef}
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"
          style={{ 
            transform: `translateY(${parallax1.offset.y}px) rotate(${parallax1.offset.rotation}deg)` 
          }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-orange-100 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-3000"></div>

        <div className="container-custom relative z-10">
          <ScrollAnimateWrapper className="text-center mb-20" animation="revealUp">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-purple-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              COMMUNICATION & ÉVÉNEMENTIEL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Services de communication
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                visuelle & événementielle
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Une organisation qui vous garantit l'impact d'un design sur mesure et une communication de marque efficace à des prix très intéressants
            </p>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
            {communicationServices.map((service, index) => (
              <ScrollAnimateWrapper
                key={index}
                animation={commAnimations[index % commAnimations.length]}
                delay={`stagger-${index + 1}`}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2 overflow-hidden perspective-1000"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl text-white mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* Client Types */}
          <ScrollAnimateWrapper className="text-center mb-16" animation="fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pour qui ?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
              Tous nos produits nous permettent de répondre à vos demandes
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
            {clientTypes.map((client, index) => (
              <ScrollAnimateWrapper
                key={index}
                animation="scaleIn"
                delay={`stagger-${index + 1}`}
                className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 group transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${client.color} rounded-xl sm:rounded-2xl text-white mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  {client.icon}
                </div>
                <span className="text-base font-bold text-gray-700 group-hover:text-purple-600 text-center transition-colors duration-300">
                  {client.name}
                </span>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimateWrapper animation="fadeInUp" className="text-center">
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Faites appel à notre société EPS.sarl
              </h3>
              <p className="text-purple-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                Demandez un devis gratuit pour établir le contrat de communication selon vos besoins !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-purple-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Nous contacter
                </Link>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </>
  );
};

