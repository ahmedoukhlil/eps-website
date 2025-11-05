'use client';

import React from 'react';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
import { useMagneticHover } from '@/hooks/useMagneticHover';

export const EffectsShowcase: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.5, direction: 'down' });
  const parallax3 = useParallax({ speed: 0.4, rotate: true });
  
  const magnetic1 = useMagneticHover({ strength: 0.3 });
  const magnetic2 = useMagneticHover({ strength: 0.5 });

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={30} color="rgba(59, 130, 246, 0.3)" speed={0.3} />

      {/* Decorative parallax elements */}
      <div 
        ref={parallax1.elementRef}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-30"
        style={{
          transform: `translateY(${parallax1.offset.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      <div 
        ref={parallax2.elementRef}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-full filter blur-3xl opacity-30"
        style={{
          transform: `translateY(${parallax2.offset.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <ScrollAnimateWrapper animation="revealUp" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            EFFETS AVANCÉS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Animations de type
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Slider Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des effets visuels impressionnants qui donnent vie à votre site web
          </p>
        </ScrollAnimateWrapper>

        {/* Grid of effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Effect 1: Reveal Up */}
          <ScrollAnimateWrapper animation="revealUp" delay="stagger-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reveal Up</h3>
              <p className="text-gray-600">Apparition progressive avec effet de masque depuis le bas</p>
            </div>
          </ScrollAnimateWrapper>

          {/* Effect 2: Zoom Rotate In */}
          <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zoom Rotate</h3>
              <p className="text-gray-600">Effet de zoom combiné avec une rotation fluide</p>
            </div>
          </ScrollAnimateWrapper>

          {/* Effect 3: Flip In X */}
          <ScrollAnimateWrapper animation="flipInX" delay="stagger-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group perspective-1000">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flip 3D</h3>
              <p className="text-gray-600">Rotation 3D sur l'axe X avec effet de profondeur</p>
            </div>
          </ScrollAnimateWrapper>

          {/* Effect 4: Bounce In */}
          <ScrollAnimateWrapper animation="bounceIn" delay="stagger-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bounce Elastic</h3>
              <p className="text-gray-600">Animation élastique avec rebond naturel</p>
            </div>
          </ScrollAnimateWrapper>

          {/* Effect 5: Enhanced Fade Up */}
          <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-5">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fade Up Enhanced</h3>
              <p className="text-gray-600">Fade classique amélioré avec blur et scale</p>
            </div>
          </ScrollAnimateWrapper>

          {/* Effect 6: Scale In 3D */}
          <ScrollAnimateWrapper animation="scaleIn" delay="stagger-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale 3D</h3>
              <p className="text-gray-600">Zoom avec rotation 3D et effet de blur</p>
            </div>
          </ScrollAnimateWrapper>
        </div>

        {/* Magnetic Hover Effects */}
        <ScrollAnimateWrapper animation="fadeInUp" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Effets magnétiques <span className="text-blue-600">au survol</span>
            </h3>
            <p className="text-gray-600">Les éléments sont attirés par votre curseur</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div
              ref={magnetic1.elementRef}
              className="relative"
              style={{
                transform: `translate(${magnetic1.position.x}px, ${magnetic1.position.y}px)`,
                transition: magnetic1.isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                Bouton Magnétique 1
              </button>
            </div>

            <div
              ref={magnetic2.elementRef}
              className="relative"
              style={{
                transform: `translate(${magnetic2.position.x}px, ${magnetic2.position.y}px)`,
                transition: magnetic2.isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                Bouton Magnétique 2
              </button>
            </div>
          </div>
        </ScrollAnimateWrapper>

        {/* Parallax Cards */}
        <ScrollAnimateWrapper animation="fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Effets <span className="text-purple-600">Parallax</span>
            </h3>
            <p className="text-gray-600">Les éléments bougent à différentes vitesses au scroll</p>
          </div>

          <div className="relative h-96 overflow-hidden rounded-3xl">
            {/* Background layer - slow */}
            <div 
              ref={parallax3.elementRef}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
              style={{
                transform: `translateY(${parallax3.offset.y}px) rotate(${parallax3.offset.rotation}deg) scale(${parallax3.offset.scaleValue})`,
                transition: 'transform 0.1s ease-out',
              }}
            />
            
            {/* Content layer */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white p-8">
                <h4 className="text-4xl font-black mb-4">Parallax 3D</h4>
                <p className="text-xl opacity-90">Scrollez pour voir l'effet de profondeur</p>
              </div>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

