'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface AnimatedServiceProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: Benefit[];
  process: ProcessStep[];
  faqs: FAQ[];
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function AnimatedService({
  title,
  subtitle,
  description,
  image,
  benefits,
  process,
  faqs
}: AnimatedServiceProps) {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            {...fadeIn}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        className="py-16 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">
            Take the first step towards positive change. Book your consultation today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  );
} 