'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { references, projects } from '@/lib/data';
import { motion } from 'framer-motion';

export const ReferencesSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-eps-navy mb-6">
            Nos Références
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des partenaires de confiance et des projets d'envergure qui témoignent de notre expertise
          </p>
        </motion.div>

        {/* Clients Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-eps-navy text-center mb-8">
            Nos Partenaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((reference, index) => (
              <Card key={reference.name} className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={reference.logo} 
                      alt={reference.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-eps-navy mb-2">
                      {reference.name}
                    </h4>
                    <p className="text-gray-600">
                      {reference.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-eps-navy text-center mb-8">
            Projets Phares
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-eps-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-eps-navy mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-eps-navy mb-2">Résultats :</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((result, idx) => (
                        <span 
                          key={idx}
                          className="bg-eps-blue/10 text-eps-blue px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Client :</span> {project.client}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Année :</span> {project.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="text-lg px-8 py-4">
            Découvrir nos réalisations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
