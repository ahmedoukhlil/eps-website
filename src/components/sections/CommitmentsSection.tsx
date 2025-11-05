'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { commitments } from '@/lib/data';
import { motion } from 'framer-motion';

export const CommitmentsSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-eps-navy mb-6">
            Nos Engagements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des valeurs fondamentales qui guident notre action au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-eps-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">{commitment.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-eps-navy mb-4">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-eps-navy rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            Notre Mission
          </h3>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Fournir des services aéroportuaires de qualité supérieure en respectant les plus hauts standards 
            de sécurité, d'hygiène et de professionnalisme, tout en contribuant au développement durable 
            de l'aviation en Mauritanie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
