'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const steps = [
  {
    number: "01",
    title: "Demande de devis",
    description: "Contactez-nous par téléphone, email ou formulaire en ligne. Nous répondons sous 24h.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Évaluation & Devis",
    description: "Notre expert visite vos locaux, évalue vos besoins et vous propose un devis détaillé gratuit.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Planification",
    description: "Nous définissons ensemble le planning d'intervention adapté à vos contraintes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Intervention",
    description: "Notre équipe certifiée intervient avec le matériel professionnel et les produits adaptés.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Contrôle qualité",
    description: "Vérification minutieuse du travail effectué selon notre check-list qualité.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Suivi & Satisfaction",
    description: "Recueil de votre satisfaction et mise en place d'un suivi régulier personnalisé.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const stepAnimations: Array<'flipInX' | 'zoomRotateIn' | 'bounceIn' | 'scaleIn' | 'revealUp' | 'fadeInUp'> = ['flipInX', 'zoomRotateIn', 'bounceIn', 'scaleIn', 'revealUp', 'fadeInUp'];

export const ProcessSection: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={20} color="rgba(147, 51, 234, 0.2)" speed={0.2} />
      
      {/* Decorative background with parallax */}
      <div className="absolute inset-0 opacity-30">
        <div 
          ref={parallax1.elementRef}
          className="absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <ScrollAnimateWrapper className="text-center mb-16" animation="revealUp">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            NOTRE PROCESSUS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Comment ça
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              marche ?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Un processus simple et transparent en 6 étapes pour votre tranquillité d'esprit
          </p>
        </ScrollAnimateWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollAnimateWrapper
              key={index}
              animation={stepAnimations[index % stepAnimations.length]}
              delay={`stagger-${index + 1}`}
              className="relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 group transform hover:-translate-y-2 perspective-1000"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-base md:text-lg lg:text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl text-purple-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 mt-3 sm:mt-4 md:mt-5 lg:mt-6 group-hover:bg-gradient-to-br group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-500">
                <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-purple-300 group-hover:text-purple-500 transition-colors duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </ScrollAnimateWrapper>
          ))}
        </div>

            <div className="text-center mt-12 sm:mt-14 md:mt-16">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6">Prêt à commencer votre projet ?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 lg:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                Obtenir une estimation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
      </div>
    </section>
  );
};

