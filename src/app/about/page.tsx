'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';

const teamMembers = [
  {
    name: 'Tama Salama',
    position: 'Directrice Générale',
    description: 'Fondatrice d\'EPS avec plus de 15 ans d\'expérience dans le secteur des services professionnels en Mauritanie. Diplômée en gestion d\'entreprise, elle a développé une expertise reconnue dans la création et le développement d\'entreprises de services, notamment dans le secteur aéroportuaire.',
    image: '/images/team/director.jpg',
    specialties: ['Stratégie d\'entreprise', 'Développement commercial', 'Relations clients']
  },
  {
    name: 'Mohamed Lemine Dereghly',
    position: 'Directeur Général Adjoint',
    description: 'Ingénieur de formation avec une solide expérience en gestion opérationnelle et développement des affaires. Spécialisé dans l\'optimisation des processus et la gestion de la qualité, il supervise le développement stratégique et les partenariats d\'EPS.',
    image: '/images/team/deputy.jpg',
    specialties: ['Gestion opérationnelle', 'Développement commercial', 'Partenariats stratégiques']
  },
  {
    name: 'Sid\'Ahmed Salama',
    position: 'Directeur Des Opérations',
    description: 'Expert en gestion opérationnelle avec une connaissance approfondie des normes aéroportuaires et des exigences de sécurité. Il coordonne l\'ensemble des équipes terrain et garantit la conformité aux standards internationaux (IATA, OACI) pour tous nos services aéroportuaires.',
    image: '/images/team/operations.jpg',
    specialties: ['Gestion opérationnelle', 'Normes aéroportuaires', 'Sécurité & Qualité']
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Nous nous engageons à fournir des services de la plus haute qualité, conformes aux normes internationales. Chaque intervention est supervisée et contrôlée pour garantir la satisfaction totale de nos clients.',
    icon: '⭐',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Intégrité',
    description: 'Transparence et honnêteté dans toutes nos relations professionnelles. Nous respectons nos engagements, nos délais et nos tarifs convenus, en toute transparence avec nos clients.',
    icon: '🤝',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Innovation',
    description: 'Adoption des dernières technologies et méthodes de travail pour améliorer continuellement nos services. Nous investissons dans la formation de nos équipes et l\'acquisition d\'équipements modernes.',
    icon: '💡',
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Responsabilité',
    description: 'Respect de nos clients, collaborateurs et de l\'environnement. Nous utilisons des produits écologiques certifiés et mettons en place des pratiques durables pour minimiser notre impact environnemental.',
    icon: '🌱',
    color: 'from-green-400 to-green-600'
  }
];

const milestones = [
  {
    year: '2008',
    title: 'Création d\'EPS SARL',
    description: 'Fondation d\'EPS SARL - El Baraka Prestations de Service à Nouakchott. Début des activités comme petite société de nettoyage avec un effectif minimal, spécialisée dans le nettoyage professionnel pour les bureaux et entreprises.'
  },
  {
    year: '2010-2012',
    title: 'Premiers Contrats & Expansion',
    description: 'Obtention des premiers contrats de nettoyage à l\'aéroport international de Nouakchott. Développement progressif de l\'activité avec l\'ajout de la lutte antiparasitaire et de la gestion de la faune aéroportuaire.'
  },
  {
    year: '2015',
    title: 'Certification & Agréments',
    description: 'Obtention des agréments nécessaires pour les services aéroportuaires et mise en place d\'un système de management de la qualité conforme aux standards internationaux. Formation de nos équipes aux normes IATA et OACI.'
  },
  {
    year: '2016-2017',
    title: 'Communication & Événementiel',
    description: 'Création de notre département communication et événementiel pour répondre aux besoins de nos clients en organisation d\'événements et supports de communication. Première diversification réussie de nos activités au-delà du nettoyage.'
  },
  {
    year: '2018',
    title: 'Partenariat Manutention Aéroportuaire',
    description: 'Diversification dans la manutention aéroportuaire en partenariat avec Afroport au niveau de l\'aéroport Oum Tounsy. Lancement des services de manutention de bagages et d\'assistance PMR (Personnes à Mobilité Réduite) pour les passagers.'
  },
  {
    year: '2023',
    title: 'Croissance & Reconnaissance',
    description: 'EPS SARL compte aujourd\'hui plus de 50 clients réguliers satisfaits, dont des institutions publiques et privées majeures. Équipe de plus de 40 professionnels qualifiés et certifiés, témoignant de la croissance organique de l\'entreprise.'
  }
];

export default function AboutPage() {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });
  const parallax3 = useParallax({ speed: 0.2, direction: 'left' });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            ref={parallax1.elementRef}
            className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${parallax1.offset.x}px, ${parallax1.offset.y}px) rotate(${parallax1.offset.rotation}deg) scale(${parallax1.offset.scaleValue})`
            }}
          ></div>
          <div
            ref={parallax2.elementRef}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${parallax2.offset.x}px, ${parallax2.offset.y}px) rotate(${parallax2.offset.rotation}deg) scale(${parallax2.offset.scaleValue})`
            }}
          ></div>
          <div
            ref={parallax3.elementRef}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-blob animation-delay-4000"
            style={{
              transform: `translate(${parallax3.offset.x}px, ${parallax3.offset.y}px) rotate(${parallax3.offset.rotation}deg) scale(${parallax3.offset.scaleValue})`
            }}
          ></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Notre Histoire</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">À Propos d'EPS SARL</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-6 sm:mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  <span className="text-yellow-400 font-semibold">Entreprise 100% mauritanienne</span>, EPS SARL a commencé comme une petite société de nettoyage et a évolué pour devenir un acteur majeur dans les services professionnels en Mauritanie.
                </p>
              </div>
            </ScrollAnimateWrapper>
          </ScrollAnimateWrapper>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-lg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimateWrapper animation="slideInLeft">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    Notre Mission
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>EPS SARL - El Baraka Prestations de Service</strong> est une entreprise 100% mauritanienne créée en 2008. 
                    Elle a commencé comme une petite société de nettoyage avec un effectif minimal, et au fil des années, 
                    elle a su se développer et se diversifier pour pénétrer d'autres domaines d'activité.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Nous intervenons dans trois domaines clés :
                  </p>
                  <ul className="text-lg text-gray-700 mb-6 leading-relaxed space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">•</span>
                      <span><span className="text-blue-600 font-semibold">Nettoyage et entretien professionnels</span> : bureaux, entreprises, zones aéroportuaires, lutte antiparasitaire et gestion de la faune</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">•</span>
                      <span><span className="text-green-600 font-semibold">Manutention et assistance aéroportuaire</span> : manutention de bagages et fret, assistance PMR (Personnes à Mobilité Réduite) pour les passagers, en partenariat avec Afroport à Oum Tounsy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-semibold mr-2">•</span>
                      <span><span className="text-purple-600 font-semibold">Communication et organisation d'événements</span> : impression numérique, supports publicitaires, organisation de stands et événements</span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Grâce à une équipe qualifiée et formée aux normes internationales (IATA, OACI), un matériel haut de gamme 
                    et des tarifs compétitifs, EPS vous garantit efficacité, fiabilité et excellence dans tous nos services.
                  </p>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Notre Objectif</h3>
                      <p className="text-gray-600">Excellence, innovation et satisfaction client</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="slideInRight">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                <div className="relative">
                  <Image
                    src="/images/team-work.HEIC"
                    alt="Équipe EPS au travail"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-gray-900 mb-1">Plus de 15 ans d'expérience</h3>
                      <p className="text-gray-600 text-sm">De petite société de nettoyage à acteur majeur des services professionnels</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <ParticlesBackground particleCount={40} color="rgba(59, 130, 246, 0.1)" speed={0.3} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimateWrapper 
                key={value.title}
                animation="bounceIn"
                delay={`stagger-${(index % 4) + 1}`}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les étapes clés de notre développement
            </p>
          </ScrollAnimateWrapper>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollAnimateWrapper 
                  key={milestone.year}
                  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                  delay={`stagger-${(index % 3) + 1}`}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0 relative z-10">
                    <div className="w-full h-full bg-white rounded-full m-0.5"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              EPS en Chiffres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats qui témoignent de notre engagement et de notre expertise
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Années d\'expérience', icon: '📅' },
              { value: '50+', label: 'Clients satisfaits', icon: '🤝' },
              { value: '40+', label: 'Professionnels qualifiés', icon: '👥' },
              { value: '24/7', label: 'Disponibilité', icon: '⏰' }
            ].map((stat, index) => (
              <ScrollAnimateWrapper
                key={stat.label}
                animation="bounceIn"
                delay={`stagger-${(index % 4) + 1}`}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <ParticlesBackground particleCount={50} color="rgba(99, 102, 241, 0.1)" speed={0.2} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe expérimentée et passionnée, au service de votre satisfaction
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimateWrapper
                key={member.name}
                animation="zoomRotateIn"
                delay={`stagger-${(index % 3) + 1}`}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Certifications & Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties de qualité et des partenariats solides
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimateWrapper animation="slideInLeft" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Certifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Agréments pour services aéroportuaires (IATA, OACI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Certification produits écologiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Formation continue du personnel aux normes internationales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Assurances professionnelles complètes</span>
                </li>
              </ul>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="slideInRight" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Partenaires</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span><strong>Afroport</strong> - Partenariat stratégique pour la manutention aéroportuaire à Oum Tounsy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Aéroport International de Nouakchott (Oum Tounsy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Institutions publiques et privées</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Entreprises et organisations diverses</span>
                </li>
              </ul>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={60} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Rejoignez Notre Aventure
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Découvrez comment EPS peut vous accompagner dans vos projets avec 
              notre expertise de plus de 15 ans et notre engagement qualité
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
              >
                <span className="drop-shadow-sm">Découvrir nos services</span>
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
              >
                <span className="drop-shadow-lg">Nous contacter</span>
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