'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

export default function CommunicationPage() {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

        <div className="absolute inset-0 opacity-10">
          <div
            ref={parallax1.elementRef}
            className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${parallax1.offset.x}px, ${parallax1.offset.y}px) rotate(${parallax1.offset.rotation}deg) scale(${parallax1.offset.scaleValue})`
            }}
          ></div>
          <div
            ref={parallax2.elementRef}
            className="absolute bottom-20 right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${parallax2.offset.x}px, ${parallax2.offset.y}px) rotate(${parallax2.offset.rotation}deg) scale(${parallax2.offset.scaleValue})`
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Solutions Créatives</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Communication & Événementiel</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-6 sm:mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto border border-white/20">
                <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Stratégies de <span className="text-yellow-400 font-semibold">communication innovantes</span> et
                  organisation d'<span className="text-yellow-400 font-semibold">événements mémorables</span> pour
                  valoriser votre image de marque
                </p>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
                >
                  <span className="drop-shadow-sm">Discutons de votre projet</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
                >
                  <span className="drop-shadow-lg">Tous nos services</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimateWrapper>
          </ScrollAnimateWrapper>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Nos Services de Communication
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              De la stratégie à l'exécution, nous donnons vie à vos idées
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie de Communication</h3>
              <p className="text-gray-600">Élaboration de stratégies sur mesure pour renforcer votre présence et votre notoriété.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organisation d'Événements</h3>
              <p className="text-gray-600">Conception et gestion complète de vos événements professionnels et corporate.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Création de Contenu</h3>
              <p className="text-gray-600">Production de contenus visuels et rédactionnels impactants pour vos supports.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relations Publiques</h3>
              <p className="text-gray-600">Gestion de votre image et relations avec les médias et influenceurs.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Digitale</h3>
              <p className="text-gray-600">Stratégies digitales innovantes pour maximiser votre présence en ligne.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Événementiel sur Mesure</h3>
              <p className="text-gray-600">Lancements de produits, séminaires, conférences, galas et événements privés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <ParticlesBackground particleCount={20} color="rgba(255, 255, 255, 0.3)" speed={0.3} />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="scaleIn" className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Prêt à Marquer les Esprits ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Transformons ensemble vos idées en expériences inoubliables
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-sm"
              >
                <span className="drop-shadow-sm">Démarrer un projet</span>
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </main>
  );
}
