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

const PhobiasFearPage = () => {
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
              Phobias & Fears Treatment
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Free yourself from limiting fears and phobias to live with greater freedom
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/pexels-yankrukov-5793974.jpg" 
                    alt="Phobias and Fears Treatment" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Breaking Free from Phobias & Fears</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Phobias and specific fears can significantly limit your life, causing intense anxiety, avoidance behaviors, and missed opportunities. Whether it's a fear of flying, public speaking, heights, spiders, or any other specific phobia, these reactions can feel overwhelming and beyond your control.
                  </p>
                  <p>
                    The good news is that phobias are among the most treatable anxiety conditions. Solution Focused Hypnotherapy offers a gentle, effective approach to overcoming fears without the need to repeatedly confront the feared situation or delve into past traumas.
                  </p>
                  <p>
                    By working with both your conscious and subconscious mind, we can help you reprogram your automatic fear responses, allowing you to approach previously frightening situations with a new sense of calm and control.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Hypnotherapy Treats Phobias & Fears
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Understanding the science of fear and how therapeutic hypnosis creates lasting freedom
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-10"
              >
                {/* Item 1 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-700">The Fear Response</h3>
                    <p className="text-gray-700">
                      Phobias involve an overactive fear response in your brain's amygdala, which triggers fight-or-flight reactions even when there's no real danger. Hypnotherapy helps reduce this automatic response by working directly with the subconscious mind, where these reactions originate.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-700">Gentle Reconditioning</h3>
                    <p className="text-gray-700">
                      Unlike exposure therapy, which repeatedly confronts you with the feared object or situation, hypnotherapy works more gently. Through visualization in a deeply relaxed state, your brain can safely "rehearse" calm responses, gradually retraining your nervous system without distress.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                {/* Item 3 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-700">Disconnecting the Emotional Response</h3>
                    <p className="text-gray-700">
                      Phobias involve strong emotional associations with the feared object or situation. During hypnosis, we can help separate the trigger from the emotional response, allowing you to perceive the previously feared stimulus more neutrally.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-700">Building Resources</h3>
                    <p className="text-gray-700">
                      Solution-focused techniques help you identify and strengthen your inner resources for managing fear. Through hypnosis, these resources become more accessible in challenging situations, providing you with a sense of control and capability.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Phobias Section */}
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
              Common Phobias & Fears We Help With
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Solution Focused Hypnotherapy can help with most specific phobias, including:
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phobia 1 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Flying & Travel</h3>
                <p className="text-gray-700">
                  Fear of flying (aerophobia), fear of driving, using public transport, crossing bridges, going through tunnels, or fear of travel in general.
                </p>
              </motion.div>

              {/* Phobia 2 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Social Situations</h3>
                <p className="text-gray-700">
                  Fear of public speaking, performing, being watched or judged, social interactions, meeting new people, or eating in front of others.
                </p>
              </motion.div>

              {/* Phobia 3 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Medical Fears</h3>
                <p className="text-gray-700">
                  Fear of needles, blood, dentists, medical procedures, hospitals, vomiting (emetophobia), or choking.
                </p>
              </motion.div>

              {/* Phobia 4 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16.999V19a2 2 0 01-2 2h-8a2 2 0 01-2-2v-7.277A4 4 0 016.25 8h1.444a.75.75 0 01.416.135l7.555, 4.996a.75.75 0 01.334.624zm5-11.472v11.499a2 2 0 01-2 2h-2v-13a2 2 0 012-2h.5a.5.5 0 01.5.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Environmental Fears</h3>
                <p className="text-gray-700">
                  Fear of heights (acrophobia), deep water, storms, thunder and lightning, darkness, or enclosed spaces (claustrophobia).
                </p>
              </motion.div>

              {/* Phobia 5 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Animal Fears</h3>
                <p className="text-gray-700">
                  Fear of spiders (arachnophobia), dogs, snakes, birds, insects, or other animals and creatures.
                </p>
              </motion.div>

              {/* Phobia 6 */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Situation-Specific Fears</h3>
                <p className="text-gray-700">
                  Fear of specific situations such as exams, job interviews, leaving home (agoraphobia), or being alone.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Ready to Break Free from Your Fears?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              Take the first step toward a life without limiting phobias with Solution Focused Hypnotherapy.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" className="inline-block bg-white text-indigo-900 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition duration-300">
                Book Your Consultation
              </Link>
              <p className="mt-4 text-indigo-200 text-sm">
                Initial consultations include a full explanation of hypnotherapy and how it can help you overcome your specific fears.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhobiasFearPage; 