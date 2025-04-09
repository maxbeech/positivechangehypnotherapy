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

const AnimatedOneToOneProgram = () => {
  return (
    <>
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
              1-to-1 Positive Change Program
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A personalized approach to transforming your wellbeing
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
                    src="/media/Hyponotherapy-related photos/pexels-shkrabaanthony-6252171.jpg" 
                    alt="One-to-One Hypnotherapy Program" 
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Personalized Hypnotherapy for Your Unique Journey</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our 1-to-1 Positive Change Program offers a personalized approach to hypnotherapy, tailored specifically to your needs, goals, and challenges. This program is ideal for those seeking a more focused and individualized therapeutic experience.
                  </p>
                  <p>
                    Through a combination of solution-focused conversation and hypnosis, we work together to identify and overcome the specific barriers that may be holding you back from achieving your goals.
                  </p>
                  <p>
                    Your journey begins with an initial consultation where we discuss your specific needs and goals. We then develop a personalized treatment plan that combines solution-focused conversation with hypnosis to help you achieve lasting positive change.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
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
              Program Structure
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Your personalized program typically follows these steps, though we'll always adapt to your specific situation and progress.
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-10">
              {/* Step 1 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">1</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a comprehensive 60-minute consultation where I'll learn about your challenges, 
                    history, and goals. During this session, I'll explain how Solution Focused Hypnotherapy 
                    works and how it can specifically help your situation. You'll also receive a relaxation 
                    recording to use between sessions.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">2</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Personalized Treatment Plan</h3>
                  <p className="text-gray-700">
                    Based on our consultation, I'll create a bespoke treatment plan outlining the recommended 
                    number of sessions and specific approaches we'll use. Most clients benefit from 6-12 
                    weekly sessions, though this varies depending on your specific needs and progress.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">3</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Weekly Sessions</h3>
                  <p className="text-gray-700">
                    Each 60-minute session consists of two parts: solution-focused discussion where we 
                    explore your progress and develop practical strategies, followed by guided hypnotherapy 
                    that helps embed positive changes at a subconscious level.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">4</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Progress Evaluation</h3>
                  <p className="text-gray-700">
                    Throughout the program, we'll regularly evaluate your progress, adjusting our approach as 
                    needed. Many clients notice significant improvements within the first 3-4 sessions, with 
                    changes becoming more pronounced and sustainable as we continue.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">5</div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Completion & Maintenance</h3>
                  <p className="text-gray-700">
                    As you approach your goals, sessions will be gradually spaced further apart. I'll provide 
                    you with tools and techniques to maintain your progress independently. Some clients choose 
                    to schedule occasional "top-up" sessions to reinforce their progress.
                  </p>
                </div>
              </motion.div>
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
              Benefits of the 1-to-1 Program
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              The personalized nature of this program offers unique advantages for your journey to positive change.
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tailored Approach",
                  description: "Every aspect of your program is customized to your specific needs, challenges, and goals."
                },
                {
                  title: "Focused Attention",
                  description: "With dedicated one-on-one sessions, we can dive deep into your unique situation and progress."
                },
                {
                  title: "Flexible Scheduling",
                  description: "Sessions can be arranged at times that work best for you, with options for in-person or online."
                },
                {
                  title: "Comprehensive Support",
                  description: "Receive personalized resources, recordings, and strategies to support your progress between sessions."
                },
                {
                  title: "Measurable Progress",
                  description: "Track your improvement with regular evaluations and adjust our approach as needed."
                },
                {
                  title: "Long-term Results",
                  description: "Develop lasting skills and techniques that continue to benefit you long after the program ends."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
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
              Book your initial consultation and take the first step toward positive change.
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
    </>
  );
};

export default AnimatedOneToOneProgram; 