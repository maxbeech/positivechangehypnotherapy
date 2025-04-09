'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const QualificationsPage = () => {
  // Qualifications data
  const qualifications = [
    {
      title: "Solution Focused Hypnotherapy Diploma",
      institution: "Clifton Practice Hypnotherapy Training School",
      year: "2023",
      description: "Comprehensive training in Solution Focused Hypnotherapy, including clinical hypnosis, neuroscience, and therapeutic techniques."
    },
    {
      title: "Professional Hypnotherapy Practitioner Diploma",
      institution: "National Council for Hypnotherapy",
      year: "2023",
      description: "Advanced practitioner qualification recognized by the UK's leading hypnotherapy organization."
    },
    {
      title: "Solution Focused Brief Therapy Certification",
      institution: "Solution Focused Brief Therapy Association",
      year: "2023",
      description: "Specialized training in solution-focused approaches to therapy and change work."
    }
  ];

  // Professional memberships
  const memberships = [
    {
      organization: "National Council for Hypnotherapy",
      role: "Full Member",
      description: "The UK's leading not-for-profit hypnotherapy organization, ensuring high standards of practice."
    },
    {
      organization: "Solution Focused Brief Therapy Association",
      role: "Professional Member",
      description: "International organization promoting solution-focused approaches in therapy."
    },
    {
      organization: "Complementary & Natural Healthcare Council",
      role: "Registered Practitioner",
      description: "UK regulator for complementary healthcare practitioners."
    }
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Qualifications
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fully qualified and insured Solution Focused Hypnotherapist
            </motion.p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Professional Qualifications
            </motion.h2>
            
            <div className="space-y-8">
              {qualifications.map((qualification, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{qualification.title}</h3>
                      <p className="text-indigo-600 font-medium mb-2">{qualification.institution} • {qualification.year}</p>
                      <p className="text-gray-600">{qualification.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Professional Memberships
            </motion.h2>
            
            <div className="space-y-8">
              {memberships.map((membership, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{membership.organization}</h3>
                      <p className="text-indigo-600 font-medium mb-2">{membership.role}</p>
                      <p className="text-gray-600">{membership.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-indigo-50 rounded-xl p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Insurance & Compliance</h2>
              <p className="text-gray-600 mb-6">
                I maintain full professional indemnity insurance and adhere to strict ethical guidelines 
                and codes of conduct set by my professional bodies. This ensures you receive the highest 
                standard of care and protection.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualificationsPage; 