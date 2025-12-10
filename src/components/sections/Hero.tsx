'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });
  const parallax3 = useParallax({ speed: 0.2, direction: 'left' });

  // Force le démarrage de la vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Tentative de lecture automatique
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Vidéo démarrée automatiquement');
            setVideoLoaded(true);
          })
          .catch((error) => {
            console.log('⚠️ Lecture automatique bloquée:', error);
            // La vidéo sera démarrée au premier clic utilisateur
          });
      }
    }
  }, [retryCount]);

  // Fonction pour retry le chargement de la vidéo
  const retryVideoLoad = () => {
    if (retryCount < 3) {
      setVideoError(false);
      setVideoLoaded(false);
      setRetryCount(prev => prev + 1);
      console.log(`🔄 Tentative ${retryCount + 1} de rechargement vidéo`);
    }
  };

  // Fonction pour démarrer la vidéo au clic
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        console.log('✅ Vidéo démarrée manuellement');
        setVideoLoaded(true);
      }).catch((error) => {
        console.log('❌ Erreur de lecture:', error);
      });
    }
  };

  return (
    <section className="relative overflow-hidden flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[calc(90vh-60px)]">
      {/* Background gradient de base (toujours visible) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={retryCount}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={handleVideoClick}
          onError={(e) => {
            setVideoError(true);
            console.log('❌ Erreur de chargement vidéo:', e);
            console.log('📁 Chemin recherché: /videos/1080p.mp4');
          }}
          onLoadStart={() => {
            console.log('🎬 Chargement de la vidéo...');
            console.log('📁 Depuis: /videos/1080p.mp4');
          }}
          onCanPlay={() => {
            console.log('✅ Vidéo prête à être lue');
            // Essayer de démarrer la vidéo dès qu'elle est prête
            const video = videoRef.current;
            if (video && video.paused) {
              video.play().catch(() => {
                console.log('⚠️ Lecture automatique bloquée - clic requis');
              });
            }
          }}
          onLoadedData={() => {
            console.log('📊 Données vidéo chargées');
          }}
          onPlay={() => {
            setVideoLoaded(true);
            console.log('▶️ Vidéo en cours de lecture');
          }}
          onPause={() => {
            console.log('⏸️ Vidéo en pause');
          }}
        >
          <source src="/videos/1080p.mp4" type="video/mp4" />
          {/* Fallback pour les navigateurs qui ne supportent pas la vidéo */}
        </video>
        
        {/* Overlay de lecture si vidéo en pause */}
        {!videoLoaded && !videoError && (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-900/80 flex items-center justify-center cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="text-center text-white">
              <div className="animate-pulse">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-lg font-medium">Cliquez pour lire la vidéo</p>
                <p className="text-sm opacity-75">Vidéo prête</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Fallback gradient si vidéo non disponible */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center" 
          style={{ display: videoError ? 'flex' : 'none' }}
        >
          <div className="text-center text-white">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <p className="text-lg font-medium mb-2">Vidéo non disponible</p>
              <p className="text-sm opacity-75 mb-4">Impossible de charger /videos/1080p.mp4</p>
            </div>
            {retryCount < 3 && (
              <button 
                onClick={retryVideoLoad}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                🔄 Réessayer ({retryCount}/3)
              </button>
            )}
          </div>
        </div>
        
        {/* Overlay renforcé pour une meilleure lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40"></div>
        
        {/* Overlay supplémentaire pour le contraste au centre */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      </div>

      {/* Particles Background (par-dessus la vidéo) */}
      <div className="relative z-10">
        <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />
      </div>
      
      {/* Animated gradient orbs with parallax (adaptés pour vidéo) */}
      <div className="absolute inset-0 z-10">
        <div 
          ref={parallax1.elementRef}
          className="absolute top-0 -left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute top-0 -right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax3.elementRef}
          className="absolute -bottom-8 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translateX(${parallax3.offset.x}px)` }}
        ></div>
      </div>

      {/* Enhanced floating particles (plus visibles sur vidéo) */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-float opacity-90 shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-float animation-delay-1000 opacity-80 shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white rounded-full animate-float animation-delay-2000 opacity-85 shadow-lg"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float animation-delay-3000 opacity-95 shadow-lg"></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-white rounded-full animate-float animation-delay-4000 opacity-70 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-float animation-delay-1000 opacity-60 shadow-lg"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container-custom relative z-20 py-12 md:py-20 lg:py-32">
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollAnimateWrapper animation="bounceIn" className="mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Disponible 24/7</span>
            </div>
          </ScrollAnimateWrapper>

          {/* Main heading */}
          <ScrollAnimateWrapper animation="revealUp" className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              <span className="drop-shadow-2xl text-shadow-lg">EPS – El Baraka</span>
              <span className="block mt-1 text-white drop-shadow-2xl text-shadow-lg">
                Prestation de Services
              </span>
            </h1>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white/20">
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                Votre partenaire de confiance pour un service professionnel et irréprochable.
              </p>
            </div>
          </ScrollAnimateWrapper>

          {/* CTA Buttons */}
          <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3" className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-sm"
              >
                <span className="drop-shadow-sm">Commencer maintenant</span>
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm"
              >
                <span className="drop-shadow-lg">Découvrir nos services</span>
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollAnimateWrapper>
          
          {/* Trust indicators */}
          <ScrollAnimateWrapper animation="fadeIn" delay="stagger-4">
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center gap-2 group bg-black/30 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg">
                <svg className="w-4 h-4 text-green-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium group-hover:text-white transition-colors duration-300 drop-shadow-lg">100% mauritanienne</span>
              </div>
              <div className="flex items-center gap-2 group bg-black/30 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg">
                <svg className="w-4 h-4 text-green-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium group-hover:text-white transition-colors duration-300 drop-shadow-lg">Équipe qualifiée</span>
              </div>
              <div className="flex items-center gap-2 group bg-black/30 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg">
                <svg className="w-4 h-4 text-green-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium group-hover:text-white transition-colors duration-300 drop-shadow-lg">Tarifs compétitifs</span>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
