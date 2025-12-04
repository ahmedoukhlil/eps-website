'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const featuredServices = [
  {
    title: "Nettoyage",
    description: "Solutions complètes de nettoyage professionnel pour tous vos espaces",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    textColor: "text-blue-600",
    link: "/services/nettoyage",
    features: [
      "Nettoyage régulier",
      "Remises en état",
      "Désinfection",
      "Services spécialisés"
    ]
  },
  {
    title: "Manutention",
    description: "Services de manutention aéroportuaire et logistique professionnels",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    textColor: "text-indigo-600",
    link: "/services/manutention",
    features: [
      "Chargement & déchargement",
      "Assistance au sol",
      "Coordination opérations",
      "Normes internationales"
    ]
  },
  {
    title: "Communication Événementielle",
    description: "Solutions créatives de communication et organisation d'événements",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    textColor: "text-purple-600",
    link: "/services/communication",
    features: [
      "Impression numérique",
      "Stands d'exposition",
      "Location supports",
      "Design sur mesure"
    ]
  }
];

const animations: Array<'zoomRotateIn' | 'flipInX' | 'bounceIn' | 'scaleIn'> = ['zoomRotateIn', 'flipInX', 'bounceIn'];

export const FeaturedServicesSection: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={30} color="rgba(59, 130, 246, 0.2)" speed={0.2} />
      
      {/* Decorative background with parallax */}
      <div className="absolute inset-0 opacity-30">
        <div 
          ref={parallax1.elementRef}
          className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <ScrollAnimateWrapper className="text-center mb-16" animation="revealUp">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            NOS SERVICES PRINCIPAUX
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Expertise
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              multi-services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Des solutions professionnelles adaptées à tous vos besoins
          </p>
        </ScrollAnimateWrapper>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {featuredServices.map((service, index) => (
            <ScrollAnimateWrapper
              key={index}
              animation={animations[index % animations.length]}
              delay={`stagger-${index + 1}`}
              className="group relative"
            >
              <Link href={service.link}>
                <div className={`relative h-full bg-gradient-to-br ${service.bgGradient} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent transform hover:-translate-y-4 perspective-1000 overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl text-white mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-black ${service.textColor} mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm md:text-base text-gray-600">
                          <svg className={`w-5 h-5 mr-2 ${service.textColor} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      <span className={service.textColor}>En savoir plus</span>
                      <svg className={`w-5 h-5 ml-2 ${service.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </Link>
            </ScrollAnimateWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimateWrapper className="text-center mt-16" animation="revealUp" delay="stagger-4">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Découvrir tous nos services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};


