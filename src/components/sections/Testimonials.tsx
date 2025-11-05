'use client';

import React from 'react';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

// Données de fallback au cas où WordPress n'est pas encore configuré
const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Ould Mohamed",
    role: "Directeur Général",
    company: "Centre Commercial Al-Khaima",
    content: "Un service impeccable ! L'équipe d'EPS a transformé nos locaux commerciaux. Professionnalisme et efficacité au rendez-vous. Nous recommandons vivement leurs services.",
    rating: 5,
  },
  {
    id: "2",
    name: "Fatima Mint Ali",
    role: "Responsable d'établissement",
    company: "École Internationale de Nouakchott",
    content: "Nous faisons confiance à EPS depuis 3 ans. Leur réactivité et la qualité de leur travail nous permettent de maintenir un environnement sain pour nos élèves.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mohamed Salem",
    role: "Gérant",
    company: "Hôtel Azalai",
    content: "Service de nettoyage exceptionnel ! L'attention aux détails et le respect des normes d'hygiène font d'EPS un partenaire de choix pour notre établissement hôtelier.",
    rating: 5,
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = fallbackTestimonials }) => {
  // Créer les hooks magnétiques pour chaque carte
  // Note: On crée un nombre fixe de hooks pour respecter les règles de React
  const magnetic1 = useMagneticHover({ strength: 0.2 });
  const magnetic2 = useMagneticHover({ strength: 0.2 });
  const magnetic3 = useMagneticHover({ strength: 0.2 });
  const magnetic4 = useMagneticHover({ strength: 0.2 });
  const magnetic5 = useMagneticHover({ strength: 0.2 });
  const magnetic6 = useMagneticHover({ strength: 0.2 });

  const magneticCards = [magnetic1, magnetic2, magnetic3, magnetic4, magnetic5, magnetic6];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground particleCount={25} color="rgba(34, 197, 94, 0.25)" speed={0.2} />
      
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <ScrollAnimateWrapper className="text-center mb-20" animation="revealUp">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ce que disent
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              nos clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre priorité absolue et notre plus grande fierté
          </p>
        </ScrollAnimateWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={magneticCards[index].elementRef}
              style={{
                transform: `translate(${magneticCards[index].position.x}px, ${magneticCards[index].position.y}px)`,
                transition: magneticCards[index].isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
            >
              <ScrollAnimateWrapper
                animation="bounceIn"
                delay={`stagger-${index + 1}`}
                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 group perspective-1000"
              >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
              </ScrollAnimateWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

