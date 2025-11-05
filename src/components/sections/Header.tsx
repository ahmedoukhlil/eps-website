'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Nettoyage Professionnel', href: '/services/nettoyage' },
      { name: 'Lutte Antiparasitaire', href: '/services/antiparasitaire' },
      { name: 'Gestion de la Faune', href: '/services/faune' },
      { name: 'Manutention Aéroportuaire', href: '/services/manutention' },
      { name: 'Assistance PMR', href: '/services/pmr' },
      { name: 'Communication & Événementiel', href: '/services/communication' },
    ]
  },
  {
    name: 'Entreprise',
    href: '/about',
    submenu: [
      { name: 'À propos', href: '/about' },
      { name: 'Nos Projets', href: '/projects' },
      { name: 'Zone d\'Intervention', href: '/zone' },
      { name: 'Carrières', href: '/careers' },
    ]
  },
  { name: 'Actualités', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Desktop only */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+22245253250" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                <PhoneIcon className="w-4 h-4" />
                <span>+222 45 25 32 50</span>
              </a>
              <a href="mailto:info@eps.mr" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                <EnvelopeIcon className="w-4 h-4" />
                <span>info@eps.mr</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">🕒 Disponible 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <nav className="container-custom">
          <div className={`flex items-center justify-between relative transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative group-hover:scale-105 transition-all duration-300 flex items-center justify-center z-10" style={{width: '120px', height: '120px'}}>
                <Image
                  src="/images/logos/logo-eps.png"
                  alt="EPS - El Baraka Prestations de Service"
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 mx-2 rounded-lg"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Devis gratuit
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 absolute right-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white py-6 animate-fadeIn">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Devis gratuit
                  </Link>
                </div>
                {/* Mobile Contact Info */}
                <div className="pt-6 px-4 border-t border-gray-100 mt-4 space-y-3">
                  <a href="tel:+22245253250" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">+222 45 25 32 50</span>
                  </a>
                  <a href="mailto:info@eps.mr" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">info@eps.mr</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
