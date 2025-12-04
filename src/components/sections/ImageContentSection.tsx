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
    title: "EPS – El Baraka Prestation de Services",
    highlight: "Votre partenaire de confiance",
    description: "Entreprise 100% mauritanienne, EPS met son savoir-faire au service de la qualité et de la satisfaction client",
    details: "Nous intervenons dans trois domaines clés : Nettoyage et entretien professionnels (bureaux, entreprises, zones aéroportuaires), Manutention et assistance aéroportuaire (PMR, bagages), et Communication et organisation d'événements. Grâce à une équipe qualifiée, un matériel haut de gamme et des tarifs compétitifs, EPS vous garantit efficacité, fiabilité et excellence.",
    image: "/images/team-cleaning.png",
    imageAlt: "Équipe professionnelle EPS",
    buttonText: "Découvrir nos services",
    buttonLink: "/services",
  },
  {
    title: "La qualité",
    highlight: "au service de vos ambitions",
    description: "Une équipe qualifiée, un matériel haut de gamme et des tarifs compétitifs",
    details: "Pour garantir la qualité et la continuité de nos prestations, EPS met à la disposition de ses clients une équipe d'agents qualifiés, formés aux techniques modernes d'entretien, ainsi que des superviseurs expérimentés chargés du contrôle qualité et du suivi opérationnel sur site. Chaque membre du personnel dispose de compétences avérées dans son domaine d'intervention, assurant ainsi un travail rigoureux, efficace et conforme aux attentes du client.",
    image: "/images/team-work.heic",
    imageAlt: "Personnel qualifié EPS",
    reverse: true,
    buttonText: "En savoir plus",
    buttonLink: "/about",
  },
  {
    title: "Moyens matériels",
    highlight: "et produits professionnels",
    description: "Équipement moderne et performant pour des prestations conformes aux standards internationaux",
    details: "Nous disposons d'un équipement moderne et performant, comprenant autolaveuses et aspirateurs industriels, machines à vapeur et monobrosses, balayeuses mécaniques pour parkings et chaussées, ainsi que chariots de nettoyage ergonomiques et accessoires professionnels. Nous utilisons également des produits professionnels certifiés, adaptés à la nature des surfaces et aux exigences de chaque site. L'ensemble de ces moyens nous permet d'assurer des prestations rapides, fiables et conformes aux standards internationaux de propreté et d'hygiène.",
    image: "/images/nettoyage.png",
    imageAlt: "Matériel professionnel EPS",
    buttonText: "Nos prestations",
    buttonLink: "/services/nettoyage",
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
          className="absolute top-20 left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${parallax1.offset.y}px)` }}
        ></div>
        <div 
          ref={parallax2.elementRef}
          className="absolute bottom-20 right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-green-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallax2.offset.y}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {contentBlocks.map((block, index) => {
          const imageParallax = index === 0 ? parallax1 : index === 1 ? parallax2 : parallax3;
          
          return (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-24 lg:mb-32 last:mb-0 ${
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
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group perspective-1000">
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  "{block.title}{' '}
                  <span className="text-blue-600">{block.highlight}</span>"
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium italic mb-4 sm:mb-5 md:mb-6">
                  {block.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
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

