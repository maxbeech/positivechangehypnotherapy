'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const CorporateProgram = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Hypnotherapy Programs
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Transform workplace wellbeing and performance through Solution Focused Hypnotherapy
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
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/pexels-anete-lusina-5240734.jpg" 
                    alt="Corporate Hypnotherapy Programs" 
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Corporate Hypnotherapy Programs</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Investing in employee wellbeing through hypnotherapy delivers measurable benefits for your organization. Our corporate programs are designed to help your team manage stress, improve performance, and foster a positive workplace culture.
                  </p>
                  <p>
                    We offer flexible programs that can be tailored to your organization's specific needs, from individual sessions to group workshops and comprehensive wellbeing programs.
                  </p>
                  <p>
                    Our approach combines evidence-based techniques with practical strategies that your employees can implement immediately in their work and personal lives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Benefits for Your Organization
            </h2>
            <p className="text-lg text-gray-700">
              Investing in employee wellbeing through hypnotherapy delivers measurable benefits for your organization.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Reduced Stress",
                  description: "Help employees manage workplace stress and prevent burnout, leading to improved mental health and job satisfaction."
                },
                {
                  title: "Enhanced Performance",
                  description: "Boost productivity and focus through improved mental clarity and reduced anxiety."
                },
                {
                  title: "Better Team Dynamics",
                  description: "Foster positive workplace relationships and improve communication through reduced stress and increased emotional intelligence."
                },
                {
                  title: "Lower Absenteeism",
                  description: "Reduce stress-related sick days and improve overall attendance through better mental health support."
                },
                {
                  title: "Increased Engagement",
                  description: "Boost employee engagement and job satisfaction through improved wellbeing and work-life balance."
                },
                {
                  title: "ROI Benefits",
                  description: "See measurable returns through reduced turnover, improved productivity, and enhanced workplace culture."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Program Options
            </h2>
            <p className="text-lg text-gray-700">
              Flexible solutions designed to meet your organization's needs and budget.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Individual Sessions",
                  description: "One-to-one sessions for employees who would benefit from personalized support. Perfect for addressing specific workplace challenges or personal development goals.",
                  features: [
                    "Personalized treatment plans",
                    "Flexible scheduling",
                    "Confidential support",
                    "Progress tracking"
                  ]
                },
                {
                  title: "Group Workshops",
                  description: "Interactive workshops designed to teach stress management and wellbeing techniques to teams. Ideal for building resilience and improving team dynamics.",
                  features: [
                    "Interactive learning",
                    "Team building focus",
                    "Practical techniques",
                    "Group support"
                  ]
                },
                {
                  title: "Wellbeing Programs",
                  description: "Comprehensive programs combining individual sessions, workshops, and ongoing support. Best for organizations committed to long-term wellbeing improvement.",
                  features: [
                    "Holistic approach",
                    "Regular check-ins",
                    "Customized content",
                    "Measurable outcomes"
                  ]
                }
              ].map((option, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">{option.title}</h3>
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-700">
              A structured approach to ensuring successful program delivery and measurable results.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">1</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a detailed consultation to understand your organization's needs, challenges, 
                    and goals. This helps us design a program that aligns with your workplace culture and objectives.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">2</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Program Design</h3>
                  <p className="text-gray-700">
                    Based on our consultation, we develop a customized program that may include individual sessions, 
                    workshops, and ongoing support. We'll provide a detailed proposal with timelines and expected outcomes.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">3</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Program Delivery</h3>
                  <p className="text-gray-700">
                    We implement the program with flexibility to accommodate your organization's schedule. 
                    Sessions can be conducted on-site or virtually, depending on your preferences and requirements.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">4</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Evaluation & Support</h3>
                  <p className="text-gray-700">
                    We provide regular progress reports and gather feedback to ensure the program meets your needs. 
                    Ongoing support and adjustments are available to maximize the benefits for your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Workplace Wellbeing
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Book a consultation to discuss how our corporate hypnotherapy programs can benefit your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CorporateProgram; 