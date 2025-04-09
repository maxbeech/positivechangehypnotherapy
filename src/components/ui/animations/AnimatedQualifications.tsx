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

export const AnimatedQualifications = () => {
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
              Qualifications & Training
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional expertise backed by comprehensive training and continuous development
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="order-2 md:order-1"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/professional-therapist.jpg" 
                    alt="Professional Hypnotherapist" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Qualifications</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Solution Focused Hypnotherapy Diploma</h3>
                    <p className="text-gray-700 mb-2">The Clifton Practice, Bristol</p>
                    <p className="text-gray-600">
                      Comprehensive training in Solution Focused Hypnotherapy, including neuroscience, 
                      positive psychology, and clinical hypnosis techniques.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Clinical Hypnotherapy Certification</h3>
                    <p className="text-gray-700 mb-2">National Council for Hypnotherapy</p>
                    <p className="text-gray-600">
                      Advanced training in clinical hypnosis, therapeutic techniques, and professional practice.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Professional Memberships</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Member of the National Council for Hypnotherapy (MCNCH)</li>
                      <li>Member of the Association for Solution Focused Hypnotherapy (AfSFH)</li>
                      <li>Registered with the Complementary & Natural Healthcare Council (CNHC)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Professional Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Continuous Professional Development
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Committed to ongoing learning and professional excellence
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Neuroscience",
                  description: "Regular training in the latest neuroscience research and its applications in hypnotherapy."
                },
                {
                  title: "Therapeutic Techniques",
                  description: "Continuous development of therapeutic skills and intervention strategies."
                },
                {
                  title: "Professional Practice",
                  description: "Ongoing training in ethics, professional standards, and best practices."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Standards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Professional Standards & Insurance
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Fully insured and committed to maintaining the highest professional standards
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Professional Insurance</h3>
                    <p className="text-gray-700">
                      Fully insured with professional indemnity and public liability coverage through 
                      the National Council for Hypnotherapy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Code of Ethics</h3>
                    <p className="text-gray-700">
                      Adherence to strict ethical guidelines and professional standards set by 
                      the National Council for Hypnotherapy and CNHC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Client Confidentiality</h3>
                    <p className="text-gray-700">
                      Strict adherence to client confidentiality and data protection regulations, 
                      ensuring your privacy and trust.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Take the first step toward positive change with a qualified and experienced hypnotherapist.
            </motion.p>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-800 font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Contact Me
              </Link>
              <Link 
                href="https://positivechangehypnotherapy.co.uk/booking" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white bg-transparent text-white font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
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