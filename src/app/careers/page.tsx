'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { useParallax } from '@/hooks/useParallax';
import { Career } from '@/lib/data-storage';
import { JobApplicationForm } from '@/components/JobApplicationForm';

// Icônes pour les départements
const departmentIcons: Record<string, string> = {
  'Opérations': '🔧',
  'Commercial': '📈',
  'Technique': '🔬',
  'Communication': '🎨',
  'Management': '👥',
  'Administration': '📋',
};

const benefits = [
  {
    title: 'Formation Continue',
    description: 'Développement des compétences et certifications professionnelles',
    icon: '🎓',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Évolution de Carrière',
    description: 'Opportunités d\'avancement et de promotion interne',
    icon: '📈',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Équilibre Vie Pro/Perso',
    description: 'Horaires flexibles et respect du temps personnel',
    icon: '⚖️',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Rémunération Attractive',
    description: 'Salaires compétitifs et primes de performance',
    icon: '💰',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Environnement Moderne',
    description: 'Outils et équipements de dernière génération',
    icon: '🏢',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Esprit d\'Équipe',
    description: 'Ambiance collaborative et esprit d\'entraide',
    icon: '🤝',
    color: 'from-teal-500 to-teal-600'
  }
];

export default function CareersPage() {
  const [jobOffers, setJobOffers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const parallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down' });

  // Récupérer les carrières depuis l'API
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch('/api/careers?activeOnly=true');
        if (response.ok) {
          const data = await response.json();
          setJobOffers(data);
        } else {
          console.error('Erreur lors du chargement des carrières');
        }
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  // Calculer les départements dynamiquement
  const departments = React.useMemo(() => {
    const deptMap = new Map<string, number>();
    jobOffers.forEach(job => {
      const count = deptMap.get(job.department) || 0;
      deptMap.set(job.department, count + 1);
    });

    const depts = Array.from(deptMap.entries()).map(([name, count]) => ({
      name,
      value: name,
      count,
      icon: departmentIcons[name] || '💼'
    }));

    return [
      { name: 'Tous', value: 'all', count: jobOffers.length, icon: '💼' },
      ...depts.sort((a, b) => a.name.localeCompare(b.name))
    ];
  }, [jobOffers]);

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOffers 
    : jobOffers.filter(job => job.department === selectedDepartment);

  const urgentJobs = jobOffers.filter(job => job.urgent);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des offres d'emploi...</p>
        </div>
      </main>
    );
  }

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
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="bounceIn" className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-2xl">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              <span className="text-white text-xs font-medium drop-shadow-lg">Rejoignez Notre Équipe</span>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="revealUp" className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              <span className="drop-shadow-2xl text-shadow-lg">Carrières</span>
            </h1>

            <ScrollAnimateWrapper animation="fadeInUp" delay="stagger-2" className="mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-3xl mx-auto border border-white/20">
                <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-xl">
                  Construisez votre <span className="text-yellow-400 font-semibold">avenir professionnel</span> avec EPS.
                  Découvrez nos opportunités d'emploi et rejoignez une équipe dynamique et innovante
                </p>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="zoomRotateIn" delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#offres"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group border-2 border-white text-xs sm:text-sm"
                >
                  <span className="drop-shadow-sm">Voir les offres</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#spontanee"
                  className="inline-flex items-center justify-center border-2 border-white bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xs sm:text-sm"
                >
                  <span className="drop-shadow-lg">Candidature spontanée</span>
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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

      {/* Company Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Pourquoi Nous Rejoindre ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EPS offre un environnement de travail stimulant avec de nombreux avantages
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimateWrapper 
                key={benefit.title}
                animation="bounceIn"
                delay={`stagger-${(index % 3) + 1}`}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Jobs */}
      {urgentJobs.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <ScrollAnimateWrapper animation="revealUp" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold">RECRUTEMENT URGENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Postes à Pourvoir Rapidement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces postes nécessitent un recrutement immédiat
              </p>
            </ScrollAnimateWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgentJobs.map((job, index) => (
                <ScrollAnimateWrapper 
                  key={job.id}
                  animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-l-4 border-red-500"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">
                            URGENT
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {job.department}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span>{job.type}</span>
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-indigo-600">{job.salary}</span>
                      <button 
                        onClick={() => {
                          setSelectedJob(job);
                          setShowApplicationForm(true);
                        }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm"
                      >
                        Postuler Maintenant
                      </button>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section id="offres" className="py-12 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="fadeIn">
            <div className="flex flex-wrap justify-center gap-4">
              {departments.map((dept) => (
                <button
                  key={dept.value}
                  onClick={() => setSelectedDepartment(dept.value)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDepartment === dept.value
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <span>{dept.icon}</span>
                  {dept.name} ({dept.count})
                </button>
              ))}
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {filteredJobs.filter(job => !job.urgent).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucune offre d'emploi disponible pour le moment.</p>
              <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos nouvelles opportunités !</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.filter(job => !job.urgent).map((job, index) => (
              <ScrollAnimateWrapper 
                key={job.id}
                animation={index % 3 === 0 ? 'slideInLeft' : index % 3 === 1 ? 'slideInUp' : 'slideInRight'}
                delay={`stagger-${(index % 3) + 1}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">
                        {job.department}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span>{job.experience}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">{job.salary}</span>
                    <button 
                      onClick={() => {
                        setSelectedJob(job);
                        setShowApplicationForm(true);
                      }}
                      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Postuler
                    </button>
                  </div>
                </div>
              </ScrollAnimateWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {selectedJob.urgent && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                        URGENT
                      </span>
                    )}
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-bold">
                      {selectedJob.department}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedJob.type}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedJob.title}</h2>
                  <div className="flex items-center gap-6 text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                      </svg>
                      {selectedJob.experience}
                    </span>
                    <span className="text-lg font-bold text-indigo-600">{selectedJob.salary}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{selectedJob.description}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Prérequis</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Responsabilités</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Avantages</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setShowApplicationForm(true);
                    setSelectedJob(null);
                  }}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl text-center transition-all duration-300 text-sm sm:text-base"
                >
                  Postuler à ce poste
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spontaneous Application */}
      <section id="spontanee" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <ParticlesBackground particleCount={40} color="rgba(99, 102, 241, 0.1)" speed={0.3} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Candidature Spontanée
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Vous ne trouvez pas le poste qui vous correspond ? 
                Envoyez-nous votre candidature spontanée, nous étudierons votre profil avec attention
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">📧</div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">rh@eps.mr</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📄</div>
                  <h4 className="font-bold text-gray-900 mb-1">Documents</h4>
                  <p className="text-gray-600 text-sm">CV + Lettre de motivation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⏱️</div>
                  <h4 className="font-bold text-gray-900 mb-1">Délai</h4>
                  <p className="text-gray-600 text-sm">Réponse sous 48h</p>
                </div>
              </div>
              
              <Link
                href="mailto:rh@eps.mr"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer ma candidature
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-indigo-600 to-cyan-700 text-white relative overflow-hidden">
        <ParticlesBackground particleCount={60} color="rgba(255, 255, 255, 0.2)" speed={0.4} />
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimateWrapper animation="zoomRotateIn" className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Prêt à Nous Rejoindre ?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              Découvrez un environnement de travail stimulant où votre talent 
              et votre passion feront la différence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#offres"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                </svg>
                Consulter les offres
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Nous contacter
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Application Form */}
      {showApplicationForm && selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
          onSuccess={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
        />
      )}
    </main>
  );
}