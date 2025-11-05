'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

interface ContentBlock {
  title: string;
  highlight: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const contentBlocks: ContentBlock[] = [
  {
    title: "Excellence en nettoyage",
    highlight: "professionnel et innovant",
    description: "Cette promesse nous la concrétisons chaque jour à travers une organisation optimisée et des expertises ciblées",
    details: "En effet, EPS - El Baraka Prestations de Service incarne l'excellence en matière de nettoyage professionnel en Mauritanie. Fort de notre expertise reconnue, nous offrons une gamme complète de services haute performance pour tous les secteurs d'activité. Notre approche unique combine expertise locale, standards internationaux et technologies de pointe pour répondre aux exigences des projets les plus ambitieux.",
    image: "/images/team-cleaning.png",
    imageAlt: "Équipe professionnelle EPS",
    buttonText: "Découvrir nos services",
    buttonLink: "/services",
  },
  {
    title: "Des équipes qualifiées",
    highlight: "à votre service",
    description: "Un personnel formé et certifié pour garantir la qualité de nos prestations",
    details: "Nos équipes sont composées de professionnels expérimentés et régulièrement formés aux dernières techniques de nettoyage. Chaque membre de notre personnel est certifié et équipé du matériel le plus moderne pour assurer un service irréprochable. Nous investissons continuellement dans la formation de nos collaborateurs pour maintenir les plus hauts standards de qualité et de sécurité.",
    image: "/images/team-work.heic",
    imageAlt: "Personnel qualifié EPS",
    reverse: true,
    buttonText: "Rencontrer notre équipe",
    buttonLink: "/about",
  },
  {
    title: "Produits certifiés",
    highlight: "et spécialisés par secteur",
    description: "Des solutions adaptées aux exigences de chaque domaine d'activité",
    details: "Nous utilisons exclusivement des produits certifiés et adaptés à chaque secteur : produits agréés IATA pour le nettoyage des cabines d'avion, solutions spécifiques certifiées pour le secteur de la restauration, produits conformes aux normes d'hygiène de l'hôtellerie, et gammes hospitalières répondant aux standards sanitaires les plus stricts du secteur de la santé. Cette approche ciblée garantit efficacité, sécurité et conformité réglementaire pour chaque environnement.",
    image: "/images/nettoyage.png",
    imageAlt: "Produits certifiés professionnels",
    buttonText: "Nos certifications",
    buttonLink: "/about",
  },
];

export const ImageContentSection: React.FC = () => {
  const parallax1 = useParallax({ speed: 0.2, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.25, direction: 'down' });
  const parallax3 = useParallax({ speed: 0.15, direction: 'up' });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={20} color="rgba(59, 130, 246, 0.2)" speed={0.15} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={parallax1.elementRef}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {contentBlocks.map((block, index) => {
          const imageParallax = index === 0 ? parallax1 : index === 1 ? parallax2 : parallax3;
          
          return (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
              block.reverse ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Image Section with Parallax */}
            <div
              className={block.reverse ? 'lg:col-start-2' : ''}
              style={{
                transform: `translateY(${imageParallax.offset.y * 0.3}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <ScrollAnimateWrapper
                animation={block.reverse ? "zoomRotateIn" : "flipInX"}
              >
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group perspective-1000">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-transparent opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500"></div>
                </div>
              </ScrollAnimateWrapper>
            </div>

            {/* Content Section */}
            <ScrollAnimateWrapper
              animation={block.reverse ? "revealUp" : "fadeInUp"}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  "{block.title}{' '}
                  <span className="text-blue-600">{block.highlight}</span>"
                </h2>
                <p className="text-xl text-gray-700 font-medium italic mb-6">
                  {block.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {block.details}
                </p>
              </div>

              {block.buttonText && block.buttonLink && (
                <div className="pt-4">
                  <Link
                    href={block.buttonLink}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {block.buttonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}
            </ScrollAnimateWrapper>
          </div>
        );
        })}
      </div>
    </section>
  );
};

