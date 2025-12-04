'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
import Image from 'next/image';
import {
  SparklesIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ShoppingBagIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function NettoyagePage() {
  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(255, 255, 255, 0.4)" speed={0.3} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            ref={parallax1.elementRef}
            className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${parallax1.offset.x}px, ${parallax1.offset.y}px) rotate(${parallax1.offset.rotation}deg) scale(${parallax1.offset.scaleValue})`
            }}
          ></div>
          <div
            ref={parallax2.elementRef}
            className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${parallax2.offset.x}px, ${parallax2.offset.y}px) rotate(${parallax2.offset.rotation}deg) scale(${parallax2.offset.scaleValue})`
            }}
          ></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Service Premium</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Nettoyage Professionnel</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-6 sm:mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto border border-white/20">
                <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Une gamme de prestations diversifiées en <span className="text-yellow-400 font-semibold">nettoyage professionnel</span> pour répondre à tous vos besoins
                </p>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
                >
                  <span className="drop-shadow-sm">Demander un devis</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
                >
                  <span className="drop-shadow-lg">Tous nos services</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
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

      {/* Services Types */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Notre Service en Matière de Nettoyage Professionnel
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Une gamme de prestations diversifiées en nettoyage professionnel adaptée à tous vos besoins
            </p>
          </ScrollAnimateWrapper>

          {/* Types de nettoyage détaillés */}
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
              {[
                {
                  title: 'Nettoyage Régulier',
                  description: 'Entretien quotidien, hebdomadaire ou mensuel selon vos besoins',
                  icon: '🔄',
                  color: 'from-blue-500 to-cyan-500',
                  features: ['Bureaux et espaces de travail', 'Sanitaires et espaces communs', 'Nettoyage des sols et surfaces']
                },
                {
                  title: 'Nettoyage Industriel',
                  description: 'Solutions spécialisées pour environnements industriels et techniques',
                  icon: '🏭',
                  color: 'from-indigo-500 to-purple-500',
                  features: ['Ateliers et usines', 'Hangars et entrepôts', 'Zones de production']
                },
                {
                  title: 'Nettoyage Spécialisé',
                  description: 'Services sur mesure pour situations particulières',
                  icon: '⭐',
                  color: 'from-orange-500 to-red-500',
                  features: ['Fin de chantier', 'Après sinistre', 'Désinfection approfondie']
                }
              ].map((type, idx) => (
                <ScrollAnimateWrapper key={type.title} animation="bounceIn" delay={`stagger-${idx + 1}`}>
                  <div className={`bg-gradient-to-br ${type.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white h-full flex flex-col`}>
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{type.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{type.title}</h3>
                    <p className="text-white/90 mb-3 sm:mb-4 flex-grow text-sm sm:text-base">{type.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                          <CheckCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Nettoyage des locaux d'entreprise */}
            <ScrollAnimateWrapper animation="slideInUp" delay="stagger-1">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 sm:p-5 md:p-6">
                  <BuildingOfficeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">1. Nettoyage des locaux d'entreprise</h3>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    En fonction de la typologie des locaux et de la nature du site, EPS propose une gamme complète de prestations adaptées aux besoins spécifiques de chaque client :
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Entretien et nettoyage régulier des bureaux et espaces professionnels',
                      'Nettoyage des vitres et surfaces vitrées (intérieur et extérieur)',
                      'Nettoyage de fin de chantier ou après sinistre',
                      'Désinfection, dératisation et désinsectisation',
                      'Nettoyage des moquettes et tapis',
                      'Entretien des sanitaires et espaces communs',
                      'Nettoyage des façades et surfaces extérieures'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimateWrapper>

            {/* Nettoyage aéroportuaire */}
            <ScrollAnimateWrapper animation="slideInUp" delay="stagger-2">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 sm:p-5 md:p-6">
                  <ShoppingBagIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">2. Nettoyage aéroportuaire</h3>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    Spécialisée dans les environnements sensibles et techniques, EPS assure le nettoyage et l'entretien des sites aéroportuaires, notamment :
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Nettoyage des terminaux et bâtiments annexes',
                      'Entretien des chaussées, parkings et voiries',
                      'Nettoyage intérieur des cabines d\'avion',
                      'Nettoyage des zones de sécurité et contrôles',
                      'Entretien des sanitaires publics',
                      'Nettoyage des halls et espaces d\'attente',
                      'Désinfection des zones à forte fréquentation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimateWrapper>

            {/* Moyens humains */}
            <ScrollAnimateWrapper animation="slideInUp" delay="stagger-3">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 sm:p-5 md:p-6">
                  <BeakerIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Nos moyens humains et matériels</h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-2">1) Moyens humains</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    Pour garantir la qualité et la continuité de nos prestations, EPS met à la disposition de ses clients :
                  </p>
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {[
                      'Une équipe d\'agents de nettoyage qualifiés, formés aux techniques modernes d\'entretien',
                      'Des superviseurs expérimentés chargés du contrôle qualité et du suivi opérationnel sur site'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm italic leading-relaxed">
                    Chaque membre du personnel dispose de compétences avérées dans son domaine d'intervention, assurant ainsi un travail rigoureux, efficace et conforme aux attentes du client.
                  </p>
                </div>
              </div>
            </ScrollAnimateWrapper>

            {/* Produits d'entretien */}
            <ScrollAnimateWrapper animation="slideInUp" delay="stagger-4">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 sm:p-5 md:p-6">
                  <HomeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">2) Moyens matériels et produits</h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-2">a) Produits d'entretien</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    Afin d'assurer un résultat optimal et respectueux de l'environnement, EPS utilise des produits professionnels certifiés, adaptés à la nature des surfaces et aux exigences de chaque site (tertiaire, industriel ou aéroportuaire).
                  </p>
                  <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">
                    Nos produits garantissent hygiène, sécurité et efficacité tout en préservant les matériaux et la santé du personnel.
                  </p>
                </div>
              </div>
            </ScrollAnimateWrapper>

            {/* Matériels */}
            <ScrollAnimateWrapper animation="slideInUp" delay="stagger-5">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 sm:p-5 md:p-6">
                  <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">b) Matériels</h3>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    Nous disposons d'un équipement moderne et performant, comprenant :
                  </p>
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {[
                      'Autolaveuses et aspirateurs industriels',
                      'Machines à vapeur et monobrosses',
                      'Balayeuses mécaniques pour parkings et chaussées',
                      'Chariots de nettoyage ergonomiques et accessoires professionnels'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm italic leading-relaxed">
                    L'ensemble de ces moyens nous permet d'assurer des prestations rapides, fiables et conformes aux standards internationaux de propreté et d'hygiène.
                  </p>
                </div>
              </div>
            </ScrollAnimateWrapper>

          </div>
        </div>
      </section>

      {/* Processus de travail */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <ParticlesBackground particleCount={30} color="rgba(59, 130, 246, 0.1)" speed={0.2} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Notre Processus de Travail
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir des résultats optimaux
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: '1',
                title: 'Audit & Diagnostic',
                description: 'Évaluation complète de vos besoins et de vos espaces pour définir un plan d\'action personnalisé',
                icon: DocumentCheckIcon,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '2',
                title: 'Proposition & Devis',
                description: 'Établissement d\'un devis détaillé avec planning, fréquences et protocoles adaptés à vos contraintes',
                icon: ClockIcon,
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '3',
                title: 'Intervention',
                description: 'Exécution des prestations par nos équipes qualifiées avec contrôle qualité en temps réel',
                icon: WrenchScrewdriverIcon,
                color: 'from-green-500 to-emerald-500'
              },
              {
                step: '4',
                title: 'Suivi & Amélioration',
                description: 'Contrôle régulier, reporting et ajustements pour garantir votre satisfaction continue',
                icon: StarIcon,
                color: 'from-orange-500 to-red-500'
              }
            ].map((process, idx) => (
              <ScrollAnimateWrapper key={process.step} animation="slideInUp" delay={`stagger-${idx + 1}`}>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <process.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${process.color} text-white rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3`}>
                    {process.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">{process.description}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages & Garanties */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <ScrollAnimateWrapper animation="slideInLeft">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                  Pourquoi Choisir EPS pour le Nettoyage ?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  EPS SARL vous garantit un service de nettoyage professionnel de qualité supérieure, 
                  adapté à vos besoins spécifiques et respectueux de l'environnement.
                </p>
                
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[
                    {
                      icon: UserGroupIcon,
                      title: 'Équipe Qualifiée',
                      description: 'Personnel formé et certifié aux techniques modernes de nettoyage professionnel'
                    },
                    {
                      icon: ShieldCheckIcon,
                      title: 'Produits Écologiques',
                      description: 'Utilisation exclusive de produits certifiés, respectueux de l\'environnement et de la santé'
                    },
                    {
                      icon: ClockIcon,
                      title: 'Disponibilité 24/7',
                      description: 'Intervention rapide et flexible, adaptée à vos contraintes horaires'
                    },
                    {
                      icon: StarIcon,
                      title: 'Garantie Satisfaction',
                      description: 'Engagement qualité avec suivi régulier et ajustements selon vos retours'
                    }
                  ].map((advantage, idx) => (
                    <div key={idx} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{advantage.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="slideInRight">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Nos Engagements</h3>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {[
                      { label: 'Conformité aux normes', value: '100%' },
                      { label: 'Clients satisfaits', value: '98%' },
                      { label: 'Interventions réussies', value: '99.5%' },
                      { label: 'Réactivité moyenne', value: '< 2h' }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{stat.label}</span>
                        <span className="text-xl sm:text-2xl font-black text-blue-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
                      <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      Garanties Incluses
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-600">
                      <li className="flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        Assurance responsabilité civile
                      </li>
                      <li className="flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        Contrôle qualité systématique
                      </li>
                      <li className="flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        Reporting régulier
                      </li>
                      <li className="flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        Support client dédié
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Secteurs d'Activité
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Des solutions adaptées à tous les secteurs d'activité
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Bureaux', icon: '🏢', color: 'from-blue-500 to-blue-600' },
              { name: 'Aéroports', icon: '✈️', color: 'from-cyan-500 to-cyan-600' },
              { name: 'Industrie', icon: '🏭', color: 'from-indigo-500 to-indigo-600' },
              { name: 'Commerce', icon: '🛍️', color: 'from-purple-500 to-purple-600' },
              { name: 'Santé', icon: '🏥', color: 'from-red-500 to-red-600' },
              { name: 'Éducation', icon: '🎓', color: 'from-green-500 to-green-600' },
              { name: 'Hôtellerie', icon: '🏨', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Résidentiel', icon: '🏠', color: 'from-pink-500 to-pink-600' }
            ].map((sector, idx) => (
              <ScrollAnimateWrapper key={sector.name} animation="bounceIn" delay={`stagger-${(idx % 4) + 1}`}>
                <div className={`bg-gradient-to-br ${sector.color} rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-white text-center group hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]`}>
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{sector.icon}</div>
                  <h3 className="font-bold text-sm sm:text-base">{sector.name}</h3>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Fréquences d'intervention */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Fréquences d'Intervention
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Des solutions flexibles adaptées à vos besoins
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                frequency: 'Quotidien',
                description: 'Entretien régulier pour maintenir un niveau de propreté optimal',
                icon: '📅',
                color: 'from-blue-500 to-cyan-500',
                bestFor: 'Bureaux, commerces, aéroports'
              },
              {
                frequency: 'Hebdomadaire',
                description: 'Nettoyage approfondi une fois par semaine',
                icon: '🗓️',
                color: 'from-purple-500 to-pink-500',
                bestFor: 'Entreprises, industries'
              },
              {
                frequency: 'Mensuel',
                description: 'Entretien mensuel pour espaces à faible fréquentation',
                icon: '📆',
                color: 'from-green-500 to-emerald-500',
                bestFor: 'Entrepôts, locaux techniques'
              },
              {
                frequency: 'Ponctuel',
                description: 'Intervention sur demande pour situations spécifiques',
                icon: '⚡',
                color: 'from-orange-500 to-red-500',
                bestFor: 'Fin de chantier, après sinistre'
              }
            ].map((freq, idx) => (
              <ScrollAnimateWrapper key={freq.frequency} animation="slideInUp" delay={`stagger-${idx + 1}`}>
                <div className={`bg-gradient-to-br ${freq.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white h-full flex flex-col`}>
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{freq.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{freq.frequency}</h3>
                  <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed">{freq.description}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2.5 sm:p-3">
                    <p className="text-xs font-semibold text-white/90 mb-1">Idéal pour :</p>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">{freq.bestFor}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <ParticlesBackground particleCount={20} color="rgba(255, 255, 255, 0.3)" speed={0.3} />

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="scaleIn" className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Prêt à Bénéficier d'un Service de Qualité ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
              >
                <span className="drop-shadow-sm">Demander un devis gratuit</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
              >
                <span className="drop-shadow-lg">Voir tous nos services</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
