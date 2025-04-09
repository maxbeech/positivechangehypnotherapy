'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to a server
    setFormStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset status after showing success message
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus('error');
      
      // Reset status after showing error message
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };
  
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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-indigo-100 text-center max-w-3xl mx-auto"
          >
            Have questions about hypnotherapy or ready to book a session? We're here to help you take the first step toward positive change.
          </motion.p>
        </div>
      </section>
      
      {/* Contact information and form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4">
                  <FaPhoneAlt className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">07305 229101</p>
                  <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4">
                  <FaEnvelope className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">pcsfhypnotherapy@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600 mt-1">Bristol & Bath area</p>
                  <p className="text-sm text-gray-500 mt-1">In-person and online sessions available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4">
                  <FaCalendarAlt className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Booking</h3>
                  <p className="text-gray-600 mt-1">For fastest service, book directly online</p>
                  <a 
                    href="https://positivechangehypnotherapy.co.uk/booking" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300" 
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-indigo-600" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300" 
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-indigo-600" />
                </a>
                <a 
                  href="https://wa.me/447305229101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300" 
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-indigo-600" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Question">Booking Question</option>
                    <option value="Service Information">Service Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 ${
                    formStatus === 'submitting' 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="mt-4 text-sm text-green-600">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                
                {formStatus === 'error' && (
                  <p className="mt-4 text-sm text-red-600">
                    There was an error sending your message. Please try again later.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Map or additional info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="bg-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Looking for more information?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-xl mb-2">FAQ</h4>
                <p className="text-gray-600 mb-4">Find answers to common questions about hypnotherapy sessions and what to expect.</p>
                <a 
                  href="/faq" 
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  View FAQ →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-xl mb-2">Services</h4>
                <p className="text-gray-600 mb-4">Explore the range of issues and conditions that can be helped with solution-focused hypnotherapy.</p>
                <a 
                  href="/services" 
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  View Services →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-xl mb-2">Blog</h4>
                <p className="text-gray-600 mb-4">Read articles about hypnotherapy, mental wellbeing, and the science behind our approach.</p>
                <a 
                  href="/blog" 
                  className="text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Read Blog →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage; 