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

const SolutionFocusedPage = () => {
  // Key principles data
  const principles = [
    {
      title: "Solution Focused",
      description: "Instead of dwelling on problems, we focus on your desired outcomes and the steps to achieve them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Evidence Based",
      description: "Combining modern neuroscience with proven therapeutic techniques for effective results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Client Centered",
      description: "Your goals and preferences guide the therapy process, ensuring a personalized approach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Rapid Results",
      description: "Many clients experience significant improvements in just a few sessions."
    },
    {
      title: "Long Lasting Change",
      description: "The solution-focused approach helps create sustainable positive changes in your life."
    },
    {
      title: "No Side Effects",
      description: "A natural, drug-free approach to improving your mental wellbeing."
    },
    {
      title: "Personalized Approach",
      description: "Treatment plans tailored to your specific needs and goals."
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

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="prose prose-lg max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Solution Focused Hypnotherapy?</h2>
              <p className="text-gray-600 mb-6">
                Solution Focused Hypnotherapy is a modern, evidence-based approach that combines the power of clinical hypnosis 
                with solution-focused therapy techniques. Unlike traditional therapy that often focuses on problems and their causes, 
                Solution Focused Hypnotherapy looks forward to your desired outcomes and helps you achieve them.
              </p>
              <p className="text-gray-600 mb-6">
                This approach is based on the understanding that our brains are constantly changing and adapting (neuroplasticity). 
                By using hypnosis to access your unconscious mind, we can help create new neural pathways that support positive change 
                and help you achieve your goals more effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
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
              Key Principles
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Solution Focused Hypnotherapy
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards positive change with Solution Focused Hypnotherapy.
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

export default SolutionFocusedPage; 