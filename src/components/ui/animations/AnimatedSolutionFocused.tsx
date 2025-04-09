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

export const AnimatedSolutionFocused = () => {
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
              Solution Focused Hypnotherapy
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A modern, evidence-based approach to positive change
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is SFH Section */}
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
                className="order-2 md:order-1"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/relaxed-patient-session.jpg" 
                    alt="Solution Focused Hypnotherapy session" 
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Solution Focused Hypnotherapy?</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Solution Focused Hypnotherapy (SFH) is a modern therapeutic approach that combines the 
                    principles of solution-focused brief therapy with the powerful tools of clinical hypnosis.
                  </p>
                  <p>
                    Unlike traditional hypnotherapy that may focus on past problems, SFH is forward-looking and 
                    goal-oriented. We focus on your preferred future and the steps needed to get there, rather 
                    than dwelling on the problems that brought you to therapy.
                  </p>
                  <p>
                    The approach is based on neuroscience and our understanding of how the brain works. 
                    It's practical, effective, and focuses on solutions rather than problems, helping you 
                    build the mental resources needed to make positive changes in your life.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
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
              How Solution Focused Hypnotherapy Works
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              A structured, neuroscience-based approach to creating lasting change
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-indigo-200 transform md:translate-x-px"></div>
              
              {/* First step */}
              <div className="relative flex flex-col md:flex-row items-center mb-16">
                <motion.div 
                  className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold z-10 mb-4 md:mb-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  1
                </motion.div>
                <motion.div 
                  className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a thorough discussion about what you want to achieve and how hypnotherapy works. 
                    I'll explain the science behind the approach and answer all your questions. This session is 
                    educational and informative, helping you understand how your mind works and how we can work together.
                  </p>
                </motion.div>
                <div className="hidden md:block md:w-1/2 order-1 md:order-2"></div>
              </div>
              
              {/* Second step */}
              <div className="relative flex flex-col md:flex-row items-center mb-16">
                <motion.div 
                  className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold z-10 mb-4 md:mb-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  2
                </motion.div>
                <div className="hidden md:block md:w-1/2 order-2 md:order-1"></div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 order-1 md:order-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Solution-Focused Conversation</h3>
                  <p className="text-gray-700">
                    Each session begins with a positive, solution-focused conversation where we explore your progress 
                    and focus on your goals. Rather than analyzing problems, we concentrate on what's working, 
                    what's better, and the small steps you're taking toward your preferred future.
                  </p>
                </motion.div>
              </div>
              
              {/* Third step */}
              <div className="relative flex flex-col md:flex-row items-center mb-16">
                <motion.div 
                  className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold z-10 mb-4 md:mb-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  3
                </motion.div>
                <motion.div 
                  className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Guided Relaxation</h3>
                  <p className="text-gray-700">
                    The second part of each session involves guided relaxation and hypnosis. During this time, 
                    your conscious mind can relax while I speak to your subconscious, helping to rewire neural 
                    pathways and establish new, positive patterns of thinking and behavior.
                  </p>
                </motion.div>
                <div className="hidden md:block md:w-1/2 order-1 md:order-2"></div>
              </div>
              
              {/* Fourth step */}
              <div className="relative flex flex-col md:flex-row items-center">
                <motion.div 
                  className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold z-10 mb-4 md:mb-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  4
                </motion.div>
                <div className="hidden md:block md:w-1/2 order-2 md:order-1"></div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 order-1 md:order-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Reinforcement & Integration</h3>
                  <p className="text-gray-700">
                    Between sessions, you'll have access to a recorded relaxation audio to listen to at home, 
                    reinforcing the positive changes. This helps to integrate new patterns of thinking and behavior 
                    into your everyday life, leading to sustainable, lasting change.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Solution Focused Hypnotherapy
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Solution Focused Hypnotherapy can help with a wide range of issues
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit cards */}
            {[
              {
                title: "Reduced Anxiety & Stress",
                description: "Learn to manage anxiety, calm your nervous system, and respond more effectively to stress triggers."
              },
              {
                title: "Improved Sleep",
                description: "Develop healthier sleep patterns and overcome insomnia through relaxation and positive thought patterns."
              },
              {
                title: "Enhanced Confidence",
                description: "Build self-esteem, overcome limiting beliefs, and develop a more positive self-image."
              },
              {
                title: "Better Focus & Motivation",
                description: "Improve concentration, clarify goals, and strengthen your intrinsic motivation."
              },
              {
                title: "Overcoming Fears & Phobias",
                description: "Address specific fears and phobias with techniques that help rewire your brain's response."
              },
              {
                title: "Habit Change",
                description: "Break unwanted habits and create healthier behaviors through positive neurological change."
              },
            ].map((benefit, index) => (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Common Questions About Hypnotherapy
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Understanding the facts about modern clinical hypnotherapy
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Items */}
            {[
              {
                question: "Will I be in control during hypnosis?",
                answer: "Absolutely. Hypnosis is not about control but about focused relaxation. You remain aware throughout the session and cannot be made to do anything against your will or values. You can end the trance state at any time."
              },
              {
                question: "What does hypnosis feel like?",
                answer: "Most people describe hypnosis as a pleasant state of deep relaxation with heightened focus. It's similar to that drifting feeling just before sleep or being absorbed in a good book or movie. You'll remain aware of your surroundings."
              },
              {
                question: "How many sessions will I need?",
                answer: "The number of sessions varies depending on your specific goals and situation. Many clients see significant improvements within 6-12 sessions. We'll discuss a reasonable timeframe during your initial consultation."
              },
              {
                question: "Is hypnotherapy scientifically proven?",
                answer: "Yes. There is substantial scientific evidence supporting hypnotherapy's effectiveness for various conditions including anxiety, stress, IBS, pain management, and habit control. It's recognized by many medical and psychological organizations."
              },
              {
                question: "Can anyone be hypnotized?",
                answer: "Most people can experience hypnosis to some degree. The key factors are willingness, an open mind, and following the guidance provided. The depth of trance may vary, but even a light trance state can be beneficial."
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-indigo-700">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
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
              Ready to Experience Solution Focused Hypnotherapy?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Take the first step toward positive change and discover how Solution Focused Hypnotherapy can help you.
            </motion.p>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-800 font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Explore Our Services
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