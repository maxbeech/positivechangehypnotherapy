'use client';

import React from 'react';
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

const FAQPage = () => {
  // FAQ data organized by categories
  const faqCategories = [
    {
      title: "About Hypnotherapy",
      faqs: [
        {
          question: "What is Solution Focused Hypnotherapy?",
          answer: "Solution Focused Hypnotherapy is a modern, evidence-based therapeutic approach that combines the principles of solution-focused brief therapy with clinical hypnosis. Unlike traditional hypnotherapy that may focus on past problems, it is forward-looking and goal-oriented, focusing on your preferred future rather than dwelling on problems. The approach is based on neuroscience and our understanding of how the brain works, helping you build the mental resources needed to make positive changes in your life."
        },
        {
          question: "Is hypnotherapy safe?",
          answer: "Yes, hypnotherapy is very safe when practiced by a qualified professional. It's a natural state of focused relaxation that we all experience daily (like when you're absorbed in a good book or film). You remain in control throughout the session and cannot be made to do anything against your will. I am fully qualified, insured, and adhere to strict ethical guidelines, ensuring your safety and wellbeing during all sessions."
        },
        {
          question: "Will I be asleep or unconscious during hypnosis?",
          answer: "No, you will not be asleep or unconscious. Hypnosis is a state of focused relaxation where you remain aware throughout. Many people describe it as feeling similar to that drifting state just before sleep or like being absorbed in a movie. You can hear everything that's being said, and you remain in control the entire time."
        },
        {
          question: "Can anyone be hypnotized?",
          answer: "Most people can experience hypnosis to some degree. The key factors are willingness, an open mind, and following the guidance provided. The depth of trance may vary from person to person, but even a light trance state can be beneficial for therapeutic purposes. Contrary to common misconceptions, being easily hypnotized is not a sign of weakness—it's actually related to focus, imagination, and the ability to follow instructions."
        },
        {
          question: "Is hypnotherapy scientifically proven?",
          answer: "Yes, there is substantial scientific evidence supporting hypnotherapy's effectiveness for various conditions including anxiety, stress, IBS, pain management, and habit control. Research has demonstrated its impact on the brain's activity through neuroimaging studies. It's recognized by many medical and psychological organizations as a valid complementary approach for many issues."
        }
      ]
    },
    {
      title: "Sessions & Process",
      faqs: [
        {
          question: "What happens in a hypnotherapy session?",
          answer: "Each session is typically divided into two parts. We begin with a solution-focused conversation, discussing your progress and focusing on positive developments. The second part involves guided relaxation and hypnosis, where your conscious mind can relax while I speak to your subconscious, helping to establish new, healthier patterns of thinking and behavior."
        },
        {
          question: "How many sessions will I need?",
          answer: "The number of sessions varies depending on your specific goals and situation. Many clients see significant improvements within 6-12 sessions. Some issues like specific phobias may require fewer sessions, while more complex challenges might benefit from a longer-term approach. We'll discuss a reasonable timeframe during your initial consultation."
        },
        {
          question: "How long does each session last?",
          answer: "The initial consultation typically lasts around 60 minutes. Subsequent sessions are usually 50-55 minutes, with the first part dedicated to solution-focused conversation and the second part to hypnosis."
        },
        {
          question: "What should I wear to a session?",
          answer: "Wear comfortable, loose-fitting clothing that allows you to relax easily. You'll remain seated or reclined in a comfortable position throughout the session, so choose attire that won't distract you by being too tight or restrictive."
        },
        {
          question: "Do I need to prepare anything before the session?",
          answer: "No special preparation is required. It's helpful to come with an open mind and a willingness to engage in the process. For online sessions, ensure you have a quiet, private space where you won't be disturbed, along with a reliable internet connection."
        }
      ]
    },
    {
      title: "Specific Concerns",
      faqs: [
        {
          question: "Can hypnotherapy help with anxiety?",
          answer: "Yes, hypnotherapy is particularly effective for anxiety. It helps calm the primitive 'fight or flight' response while building new, healthier neural pathways. Through Solution Focused Hypnotherapy, you can learn to respond differently to triggers, develop better coping mechanisms, and reduce both the psychological and physical symptoms of anxiety."
        },
        {
          question: "Is hypnotherapy effective for depression?",
          answer: "Solution Focused Hypnotherapy can be very helpful for mild to moderate depression. It works by focusing on positive solutions rather than problems, helping to break negative thought cycles, improve sleep, increase motivation, and build emotional resilience. For clinical depression, I work in conjunction with your GP or mental health professional to provide complementary support."
        },
        {
          question: "Can hypnotherapy help me stop smoking?",
          answer: "Yes, hypnotherapy can be effective for smoking cessation. I offer a specialized approach that addresses both the physical and psychological aspects of the habit. This typically involves a single, extended session specifically designed to help you become a non-smoker by changing your subconscious associations with smoking."
        },
        {
          question: "Does hypnotherapy work for weight management?",
          answer: "Hypnotherapy can be a valuable tool for weight management by addressing unconscious eating patterns, emotional eating, and helping to establish healthier habits. Rather than focusing on dieting, we work on changing your relationship with food and building sustainable lifestyle changes that support your weight goals."
        },
        {
          question: "Can children and teenagers have hypnotherapy?",
          answer: "Yes, hypnotherapy can be very effective for children and teenagers, who are often naturally receptive to the process. I adapt my approach to be age-appropriate and engaging. For clients under 16, parental consent is required, and parents/guardians are involved in the process. Hypnotherapy can help young people with issues such as anxiety, confidence, exam stress, and behavioral challenges."
        }
      ]
    },
    {
      title: "Practical Questions",
      faqs: [
        {
          question: "Do you offer online sessions?",
          answer: "Yes, I offer secure online sessions for clients who prefer the convenience of remote therapy or are unable to attend in person. Online hypnotherapy has been shown to be just as effective as in-person sessions for most issues. You'll need a quiet, private space and a reliable internet connection."
        },
        {
          question: "What are your fees?",
          answer: "Initial consultations are £65, and subsequent sessions are £75. I offer package discounts for prepaid sessions. Specialized programs like smoking cessation have different pricing structures. Please contact me for the most current pricing information."
        },
        {
          question: "Do you have a cancellation policy?",
          answer: "Yes, I require 48 hours' notice for cancellations or rescheduling. Sessions cancelled with less notice may be charged the full fee, except in cases of emergency. This policy helps ensure I can offer appointment times to other clients who may be waiting."
        },
        {
          question: "Is hypnotherapy covered by insurance?",
          answer: "Some health insurance plans do cover hypnotherapy, but coverage varies significantly. Please check with your provider before booking if you plan to claim sessions through insurance. I can provide receipts and necessary documentation for your claims."
        },
        {
          question: "What if hypnotherapy doesn't work for me?",
          answer: "While hypnotherapy is effective for many people, results can vary. If you're not experiencing the desired changes after several sessions, we'll discuss alternative approaches or adjustments to our current strategy. Sometimes, I may recommend a different type of therapy or practitioner if I believe it would better serve your needs."
        }
      ]
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find answers to common questions about hypnotherapy and our services
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {faqCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-white rounded-full text-indigo-600 font-medium shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  {category.title}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="mb-16 scroll-mt-32"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 pb-2 border-b border-gray-200"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  {category.title}
                </motion.h2>

                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <motion.div 
                      key={faqIndex}
                      className="bg-gray-50 rounded-lg p-6 shadow-sm"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      transition={{ delay: faqIndex * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold mb-3 text-indigo-700">{faq.question}</h3>
                      <div className="text-gray-700 space-y-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Still Have Questions?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Can't find the answer you're looking for? I'm here to help.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
              >
                Contact Me
              </Link>
              <Link 
                href="https://positivechangehypnotherapy.co.uk/booking" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-indigo-600 bg-transparent text-indigo-600 font-medium transition-all duration-300 hover:bg-indigo-50 hover:scale-105"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold mb-8 text-gray-800 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Explore Related Information
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Related Link 1 */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-lg font-semibold mb-3 text-indigo-700">Solution Focused Hypnotherapy</h3>
                <p className="text-gray-700 mb-4">
                  Learn more about how this modern approach works and the science behind it.
                </p>
                <Link 
                  href="/about/solution-focused-hypnotherapy" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  Learn more →
                </Link>
              </motion.div>

              {/* Related Link 2 */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-indigo-700">Services & Programs</h3>
                <p className="text-gray-700 mb-4">
                  Discover the range of hypnotherapy services and structured programs available.
                </p>
                <Link 
                  href="/services" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-block mr-4"
                >
                  View Services →
                </Link>
                <Link 
                  href="/programs" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-block"
                >
                  Explore Programs →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage; 