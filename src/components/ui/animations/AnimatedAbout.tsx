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

export const AnimatedAbout = () => {
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
              About Keira
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A passionate Solution Focused Hypnotherapist dedicated to empowering positive change
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/media/founder_profile_picture.webp" 
                    alt="Keira, Solution Focused Hypnotherapist" 
                    width={600} 
                    height={800} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white text-sm font-medium text-center px-2">Fully Qualified</span>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey Into Hypnotherapy</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hello, I'm Keira, a fully qualified and insured Solution Focused Hypnotherapist based in Leicester. 
                    My journey into hypnotherapy began after experiencing firsthand the transformative power of this 
                    therapeutic approach.
                  </p>
                  <p>
                    Having overcome my own struggles with anxiety and stress, I was inspired to help others achieve 
                    similar positive changes in their lives. I believe deeply in the brain's remarkable ability to 
                    rewire itself and create new, healthier patterns of thinking and behavior.
                  </p>
                  <p>
                    My approach combines neuroscience-based techniques with solution-focused therapy and clinical 
                    hypnosis to help clients overcome challenges and achieve their goals. I'm passionate about 
                    demystifying hypnotherapy and showing how this evidence-based approach can create lasting change.
                  </p>
                  <p>
                    When I'm not in my therapy room, you might find me enjoying nature walks, practicing mindfulness, 
                    or spending quality time with family and friends. These activities help me maintain my own positive 
                    mental wellbeing, allowing me to bring my best self to each session with clients.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    href="/about/solution-focused-hypnotherapy" 
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                  >
                    Learn About Solution Focused Hypnotherapy
                  </Link>
                  <Link 
                    href="/about/qualifications" 
                    className="inline-flex items-center px-5 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-medium transition-all duration-300 hover:bg-indigo-50 hover:scale-105"
                  >
                    View My Qualifications
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              My Philosophy
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              I believe in focusing on solutions rather than problems. By helping clients envision and build their 
              preferred future, we can create lasting positive change.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Safety & Trust</h3>
              <p className="text-gray-600 text-center">
                Creating a safe, non-judgmental space where clients feel comfortable to explore and transform.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Empowerment</h3>
              <p className="text-gray-600 text-center">
                Equipping clients with tools and techniques they can use for life-long positive change.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Transformation</h3>
              <p className="text-gray-600 text-center">
                Facilitating profound change by harnessing the power of neuroscience and positive psychology.
              </p>
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
              I'm here to guide you toward positive change and help you achieve your goals.
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
                Book a Session
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}; 