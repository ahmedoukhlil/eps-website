'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/cleaning-office-1.jpg",
    alt: "Nettoyage de bureaux professionnels",
    category: "Bureaux",
  },
  {
    src: "/images/gallery/cleaning-hospital.jpg",
    alt: "Nettoyage hospitalier",
    category: "Santé",
  },
  {
    src: "/images/gallery/cleaning-restaurant.jpg",
    alt: "Nettoyage de restaurant",
    category: "Restauration",
  },
  {
    src: "/images/gallery/cleaning-school.jpg",
    alt: "Nettoyage d'école",
    category: "Éducation",
  },
  {
    src: "/images/gallery/cleaning-industrial.jpg",
    alt: "Nettoyage industriel",
    category: "Industrie",
  },
  {
    src: "/images/gallery/cleaning-hotel.jpg",
    alt: "Nettoyage d'hôtel",
    category: "Hôtellerie",
  },
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <ScrollAnimateWrapper className="text-center mb-16" animation="fadeInUp">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            NOTRE TRAVAIL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos réalisations en images
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques exemples de nos interventions dans différents secteurs
          </p>
        </ScrollAnimateWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollAnimateWrapper
              key={index}
              animation="scaleIn"
              delay={`stagger-${index + 1}`}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold mb-2">
                  {image.category}
                </span>
                <h3 className="text-lg font-bold">
                  {image.alt}
                </h3>
              </div>
            </ScrollAnimateWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

