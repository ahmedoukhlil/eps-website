'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
import {
  SparklesIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  TruckIcon,
  CubeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface EquipmentImage {
  src: string;
  alt: string;
}

interface Equipment {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
  images: EquipmentImage[];
}

const equipment: Equipment[] = [
  {
    id: 1,
    name: 'Monobrosse',
    description: 'Machine polyvalente pour le nettoyage et le lustrage des sols durs',
    icon: SparklesIcon,
    category: 'Nettoyage Sols',
    features: ['Nettoyage en profondeur', 'Lustrage des surfaces', 'Polyvalence'],
    images: [
      { src: '/images/equipment/monobrosse-1.jpg', alt: 'Monobrosse professionnelle' },
      { src: '/images/equipment/monobrosse-2.jpg', alt: 'Monobrosse en action' },
      { src: '/images/equipment/monobrosse-3.jpg', alt: 'Détail monobrosse' }
    ]
  },
  {
    id: 2,
    name: 'Autolaveuse',
    description: 'Équipement professionnel pour le lavage et l\'aspiration simultanés des grandes surfaces',
    icon: BeakerIcon,
    category: 'Nettoyage Industriel',
    features: ['Lavage et aspiration', 'Grandes surfaces', 'Efficacité maximale'],
    images: [
      { src: '/images/equipment/autolaveuse-1.jpg', alt: 'Autolaveuse professionnelle' },
      { src: '/images/equipment/autolaveuse-2.jpg', alt: 'Autolaveuse en opération' },
      { src: '/images/equipment/autolaveuse-3.jpg', alt: 'Détail autolaveuse' }
    ]
  },
  {
    id: 3,
    name: 'Chariot Professionnel',
    description: 'Chariots spécialisés adaptés à chaque type d\'espace et de nettoyage',
    icon: WrenchScrewdriverIcon,
    category: 'Équipement Mobile',
    features: ['Chariot toilettes', 'Chariot sols', 'Chariot bureaux'],
    images: [
      { src: '/images/equipment/chariot-1.jpg', alt: 'Chariot professionnel' },
      { src: '/images/equipment/chariot-2.jpg', alt: 'Chariot toilettes' },
      { src: '/images/equipment/chariot-3.jpg', alt: 'Chariot bureaux' }
    ]
  },
  {
    id: 4,
    name: 'Aspirateur Multifonction',
    description: 'Aspirateur professionnel polyvalent pour tous types de surfaces et de déchets',
    icon: CubeIcon,
    category: 'Aspiration',
    features: ['Aspiration sèche/humide', 'Filtres haute performance', 'Polyvalence'],
    images: [
      { src: '/images/equipment/aspirateur-1.jpg', alt: 'Aspirateur multifonction' },
      { src: '/images/equipment/aspirateur-2.jpg', alt: 'Aspirateur en utilisation' },
      { src: '/images/equipment/aspirateur-3.jpg', alt: 'Détail aspirateur' }
    ]
  },
  {
    id: 5,
    name: 'Camion Balayeur',
    description: 'Véhicule spécialisé pour l\'entretien mécanique des voiries et parkings',
    icon: TruckIcon,
    category: 'Entretien Extérieur',
    features: ['Balayage mécanique', 'Grandes surfaces', 'Efficacité optimale'],
    images: [
      { src: '/images/equipment/camion-1.jpg', alt: 'Camion balayeur' },
      { src: '/images/equipment/camion-2.jpg', alt: 'Camion balayeur en action' },
      { src: '/images/equipment/camion-3.jpg', alt: 'Détail camion balayeur' }
    ]
  }
];

// Composant Carrousel pour chaque équipement
const EquipmentCarousel: React.FC<{ images: EquipmentImage[]; name: string; height?: string; showFullImage?: boolean }> = ({ images, name, height = 'h-64', showFullImage = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play avec pause au hover
  React.useEffect(() => {
    if (!isAutoPlaying || isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change d'image toutes les 4 secondes

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div 
      className={`relative w-full ${height} rounded-xl overflow-hidden ${height === 'h-64' ? 'mb-6' : ''} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images avec transition slide */}
      <div className="relative w-full h-full overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={`min-w-full h-full relative flex-shrink-0 overflow-hidden ${showFullImage ? 'bg-gray-50 flex items-center justify-center' : 'bg-gray-100'}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${showFullImage ? 'object-contain' : 'object-cover'} object-center ${showFullImage ? '' : 'group-hover:scale-105'} transition-transform duration-700 ease-out`}
                quality={95}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/services/nettoyage.jpg';
                }}
              />
              {/* Overlay gradient amélioré - seulement pour les carrousels normaux */}
              {height === 'h-64' && !showFullImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
              )}
              
              {/* Overlay avec effet de brillance au hover - amélioré - seulement si pas en mode full image */}
              {!showFullImage && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/15 transition-all duration-700 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] pointer-events-none"></div>
              )}
              
              {/* Effet de focus subtil avec bordure élégante - seulement si pas en mode full image */}
              {!showFullImage && (
                <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/30 transition-all duration-500 pointer-events-none"></div>
              )}
              
              {/* Légère ombre portée pour plus de profondeur - seulement si pas en mode full image */}
              {!showFullImage && (
                <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Améliorées pour meilleure visibilité */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-20 hover:scale-110 hover:shadow-2xl group-hover:opacity-100 opacity-80 border border-white/50"
            aria-label="Image précédente"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-20 hover:scale-110 hover:shadow-2xl group-hover:opacity-100 opacity-80 border border-white/50"
            aria-label="Image suivante"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-900" />
          </button>
        </>
      )}

      {/* Indicators améliorés avec meilleure visibilité */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-10 shadow-lg ring-2 ring-white/50'
                  : 'bg-white/50 hover:bg-white/70 w-2.5'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter amélioré avec meilleur design */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full z-20 shadow-xl border border-white/30">
          <span className="text-white/90">{currentIndex + 1}</span>
          <span className="mx-1.5 text-white/60">/</span>
          <span className="text-white/70">{images.length}</span>
        </div>
      )}
    </div>
  );
};

export const EquipmentSection: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.2, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.25, direction: 'down' });
  const [currentEquipmentIndex, setCurrentEquipmentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play pour le carrousel principal avec pause au hover
  React.useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentEquipmentIndex((prev) => (prev + 1) % equipment.length);
    }, 5000); // Change d'équipement toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const nextEquipment = () => {
    setCurrentEquipmentIndex((prev) => (prev + 1) % equipment.length);
    setIsAutoPlaying(false);
  };

  const prevEquipment = () => {
    setCurrentEquipmentIndex((prev) => (prev - 1 + equipment.length) % equipment.length);
    setIsAutoPlaying(false);
  };

  const goToEquipment = (index: number) => {
    setCurrentEquipmentIndex(index);
    setIsAutoPlaying(false);
  };

  // Gestion du swipe tactile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextEquipment();
    }
    if (isRightSwipe) {
      prevEquipment();
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={30} color="rgba(59, 130, 246, 0.15)" speed={0.2} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
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
        {/* Header */}
        <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-700 text-xs font-semibold">Nos Moyens</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Matériel Utilisé dans Nos Opérations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
            Un équipement moderne et performant pour garantir des prestations rapides, fiables et conformes aux standards internationaux
          </p>
        </ScrollAnimateWrapper>

        {/* Equipment Carousel - Cartes pleine largeur cliquables */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentEquipmentIndex * 100}%)` }}
            >
              {equipment.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === currentEquipmentIndex;
                return (
                  <div 
                    key={item.id} 
                    className="min-w-full flex-shrink-0 w-full"
                  >
                    <ScrollAnimateWrapper
                      animation={isActive ? "revealUp" : "fadeIn"}
                      delay="stagger-1"
                      className="group"
                    >
                      <div 
                        onClick={() => setSelectedEquipment(item)}
                        className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl transition-all duration-500 border-2 cursor-pointer ${
                          isActive 
                            ? 'border-blue-300 shadow-blue-200/50' 
                            : 'border-gray-200 opacity-70'
                        } relative overflow-hidden hover:shadow-2xl hover:border-blue-400`}
                      >
                        {/* Effet de brillance au hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-blue-50/50 transition-all duration-500 pointer-events-none"></div>
                        
                        {/* Badge actif et clic */}
                        <div className="absolute top-4 right-4 flex gap-2 z-20">
                          {isActive && (
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                              Actuel
                            </div>
                          )}
                          <div className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-gray-200 flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Voir détails
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-10">
                          {/* Colonne gauche - Images */}
                          <div className="relative z-10 order-2 md:order-1">
                            <div className={`transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-95'} bg-gray-50 rounded-xl overflow-hidden`}>
                              <EquipmentCarousel images={item.images} name={item.name} showFullImage={true} />
                            </div>
                          </div>

                          {/* Colonne droite - Contenu */}
                          <div className="flex flex-col justify-center order-1 md:order-2">
                            {/* Icon avec effet amélioré */}
                            <div className="mb-6">
                              <div className="relative inline-block">
                                <div className={`w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl ${
                                  isActive ? 'animate-pulse-subtle' : ''
                                }`}>
                                  <Icon className="w-10 h-10 text-white" />
                                </div>
                                {/* Effet de halo au hover */}
                                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
                              </div>
                            </div>

                            {/* Category Badge amélioré */}
                            <div className="mb-4">
                              <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full border border-blue-200/50 shadow-sm group-hover:shadow-md transition-all duration-300">
                                {item.category}
                              </span>
                            </div>

                            {/* Title avec effet amélioré */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                              {item.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                              {item.description}
                            </p>

                            {/* Features améliorées */}
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                              {item.features.map((feature, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-center gap-3 group/feature hover:translate-x-1 transition-transform duration-300"
                                >
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-base text-gray-700 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimateWrapper>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows améliorées */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevEquipment();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 z-20 hover:scale-110 border-2 border-gray-200 hover:border-blue-300 group"
            aria-label="Équipement précédent"
          >
            <ChevronLeftIcon className="w-7 h-7 text-gray-800 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextEquipment();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 z-20 hover:scale-110 border-2 border-gray-200 hover:border-blue-300 group"
            aria-label="Équipement suivant"
          >
            <ChevronRightIcon className="w-7 h-7 text-gray-800 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Miniatures des équipements en bas */}
          <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-2 scrollbar-hide">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === currentEquipmentIndex;
              return (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToEquipment(index);
                  }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 min-w-[100px] ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 border border-gray-200'
                  }`}
                  aria-label={`Aller à ${item.name}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-xs font-semibold text-center ${
                    isActive ? 'text-white' : 'text-gray-600'
                  }`}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Equipment Counter amélioré */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="text-sm text-gray-600 font-medium">
                Équipement
              </span>
              <span className="text-lg font-bold text-blue-600">
                {currentEquipmentIndex + 1}
              </span>
              <span className="text-sm text-gray-400">
                / {equipment.length}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-5" className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Équipement Professionnel Certifié
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  L'ensemble de nos équipements est régulièrement entretenu et renouvelé pour garantir des performances optimales. 
                  Nous utilisons exclusivement du matériel professionnel conforme aux normes internationales de qualité et de sécurité.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </div>

      {/* Modal de détails - Design simplifié et élégant */}
      {selectedEquipment && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedEquipment(null)}
        >
          <div 
            className="bg-white rounded-xl sm:rounded-2xl max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header simplifié */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = selectedEquipment.icon;
                    return (
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-2xl font-bold">{selectedEquipment.name}</h2>
                    <p className="text-white/80 text-sm mt-1">{selectedEquipment.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Fermer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenu simplifié */}
            <div className="overflow-y-auto max-h-[calc(95vh-200px)]">
              {/* Image principale - Carrousel adapté pour modal avec affichage complet de l'image */}
              <div className="relative bg-gray-900 flex items-center justify-center min-h-[500px]">
                <EquipmentCarousel images={selectedEquipment.images} name={selectedEquipment.name} height="h-[500px]" showFullImage={true} />
              </div>

              {/* Contenu textuel */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {selectedEquipment.description}
                </p>

                {/* Caractéristiques - Liste simple et élégante */}
                <div className="space-y-2.5">
                  {selectedEquipment.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 py-2.5"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer simplifié */}
            <div className="border-t border-gray-200 p-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedEquipment(null)}
                className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setSelectedEquipment(null);
                  window.location.href = '/contact';
                }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

