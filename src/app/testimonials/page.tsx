'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Sample testimonial data (would typically come from a CMS or database)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Bristol",
    quote: "After struggling with anxiety for years, I finally found the help I needed with Positive Change Hypnotherapy. The solution-focused approach made all the difference, and I've seen remarkable improvements in just a few sessions.",
    image: "/media/Hyponotherapy-related photos/pexels-arina-krasnikova-6998275.jpg",
    rating: 5,
    issue: "Anxiety"
  },
  {
    id: 2,
    name: "Michael Taylor",
    location: "Bath",
    quote: "I was skeptical about hypnotherapy at first, but I'm so glad I gave it a try. My sleep has improved dramatically, and I've developed much healthier thought patterns. I highly recommend this service to anyone struggling with sleep disorders.",
    image: "/media/Hyponotherapy-related photos/pexels-ivan-samkov-5659019.jpg",
    rating: 5,
    issue: "Sleep Issues"
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Gloucester",
    quote: "Overcoming my fear of public speaking seemed impossible until I worked with Positive Change Hypnotherapy. The techniques I learned have been life-changing and have boosted my career opportunities significantly.",
    image: "/media/Hyponotherapy-related photos/pexels-anastasia-ilina-makarova-140436704-14187888.jpg",
    rating: 5,
    issue: "Phobia"
  },
  {
    id: 4,
    name: "Robert Anderson",
    location: "Cheltenham",
    quote: "The personalized approach to addressing my depression was exactly what I needed. I've gained valuable tools to manage my thoughts and emotions, and I feel more in control of my life than I have in years.",
    image: "/media/Hyponotherapy-related photos/pexels-gustavo-fring-3985293.jpg",
    rating: 5,
    issue: "Depression"
  },
  {
    id: 5,
    name: "Jennifer Lewis",
    location: "Bristol",
    quote: "I sought help for my confidence issues affecting my work performance. Through solution-focused hypnotherapy, I've developed a much more positive mindset. My colleagues have noticed the difference, and I was recently promoted!",
    image: "/media/Hyponotherapy-related photos/pexels-yankrukov-5793707.jpg",
    rating: 5,
    issue: "Confidence"
  },
  {
    id: 6,
    name: "David Clarke",
    location: "Bath",
    quote: "After years of failed attempts to quit smoking, hypnotherapy finally helped me break free from this addiction. The process was comfortable, supportive, and effective. I've been smoke-free for six months now.",
    image: "/media/Hyponotherapy-related photos/pexels-yankrukov-5793696.jpg",
    rating: 5,
    issue: "Habits & Addictions"
  },
  {
    id: 7,
    name: "Rachel Thompson",
    location: "Swindon",
    quote: "The stress management techniques I learned through hypnotherapy have transformed how I handle pressure at work and home. I'm calmer, more focused, and actually enjoying life again.",
    image: "/media/Hyponotherapy-related photos/pexels-yankrukov-5793984.jpg",
    rating: 5,
    issue: "Stress Management"
  },
  {
    id: 8,
    name: "Thomas Wilson",
    location: "Bristol",
    quote: "I was dealing with chronic pain that conventional treatments weren't helping. The mind-body approach of hypnotherapy has given me new ways to manage my pain and improve my quality of life.",
    image: "/media/Hyponotherapy-related photos/pexels-guvo59-21047467.jpg",
    rating: 5,
    issue: "Pain Management"
  },
];

// Testimonial card component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div 
      variants={fadeIn}
      className="flex flex-col h-full overflow-hidden rounded-xl shadow-md bg-white p-6"
    >
      <div className="flex items-start mb-4">
        <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 w-4 h-4" />
        ))}
      </div>
      <div className="relative flex-grow mb-4">
        <FaQuoteLeft className="absolute -left-1 -top-1 text-indigo-100 opacity-50 w-8 h-8" />
        <p className="relative z-10 italic text-gray-600 pl-4">{testimonial.quote}</p>
      </div>
      <div className="mt-auto">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
          {testimonial.issue}
        </span>
      </div>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="bg-gray-50 pt-24">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-indigo-900 opacity-90"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/media/pattern.svg" 
            alt="" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-6"
          >
            Client Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-indigo-100 text-center max-w-3xl mx-auto"
          >
            Read how solution-focused hypnotherapy has helped our clients overcome challenges and transform their lives
          </motion.p>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 pb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          What Our Clients Say
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </section>
      
      {/* Call to action */}
      <section className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of clients who have experienced positive change through our solution-focused hypnotherapy sessions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-white text-indigo-900 font-medium rounded-full hover:bg-indigo-100 transition-colors duration-300"
            >
              Book Your Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 