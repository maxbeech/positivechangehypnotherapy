'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import AnimatedSection from '@/components/AnimatedSection';

const OneOnOneProgram = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              1-to-1 Positive Change Program
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Personalized hypnotherapy sessions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <AnimatedSection>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/one-on-one.jpg" 
                    alt="One-on-One Hypnotherapy Sessions" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
              </AnimatedSection>
              
              {/* Content */}
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Personalized Hypnotherapy Journey</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our 1-to-1 Positive Change Program offers a completely personalized approach to hypnotherapy. Each session is tailored to your specific needs, goals, and circumstances, ensuring the most effective path to positive change.
                  </p>
                  <p>
                    Working together in a private, confidential setting, we'll address your unique challenges and help you develop powerful tools for lasting transformation. Whether you're dealing with anxiety, stress, confidence issues, or seeking personal growth, this program provides the focused attention and support you need.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OneOnOneProgram; 