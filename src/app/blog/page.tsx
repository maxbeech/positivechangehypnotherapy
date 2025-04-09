'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Animation variant for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Sample blog data (would be fetched from a CMS in a real implementation)
const blogPosts = [
  {
    id: 'understanding-anxiety',
    title: "Understanding Anxiety: A Guide to Your Brain's Response System",
    excerpt: 'Explore how anxiety manifests in the brain, why we experience it, and how solution-focused hypnotherapy can help regulate your response system.',
    date: 'April 15, 2024',
    author: 'Jane Smith',
    category: 'Mental Health',
    coverImage: '/media/Stress-related photos/pexels-rdne-5542968.jpg',
    readTime: '5 min read'
  },
  {
    id: 'breaking-negative-thought-patterns',
    title: 'Breaking Negative Thought Patterns with Neuroscience',
    excerpt: 'Learn how our brain creates thought patterns and how solution-focused techniques can help create healthier neural pathways.',
    date: 'April 3, 2024',
    author: 'Jane Smith',
    category: 'Neuroplasticity',
    coverImage: '/media/Hyponotherapy-related photos/pexels-anete-lusina-5240734.jpg',
    readTime: '8 min read'
  },
  {
    id: 'sleep-and-mental-health',
    title: 'The Sleep-Mental Health Connection You Need to Know About',
    excerpt: 'Discover the critical relationship between quality sleep and mental wellbeing, plus practical tips for better sleep hygiene.',
    date: 'March 22, 2024',
    author: 'Jane Smith',
    category: 'Sleep',
    coverImage: '/media/Stress-related photos/nubelson-fernandes-Cc9Yso_xn4I-unsplash.jpg',
    readTime: '6 min read'
  },
  {
    id: 'stress-reduction-techniques',
    title: '5 Proven Stress Reduction Techniques Based on Neuroscience',
    excerpt: 'Discover science-backed methods to reduce stress and anxiety that you can implement in your daily routine.',
    date: 'March 10, 2024',
    author: 'Jane Smith',
    category: 'Stress Management',
    coverImage: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793713.jpg',
    readTime: '7 min read'
  },
  {
    id: 'phobia-treatment-explained',
    title: 'How Hypnotherapy Effectively Treats Phobias: A Scientific Explanation',
    excerpt: 'Understand the science behind how solution-focused hypnotherapy can help overcome phobias and fears.',
    date: 'February 28, 2024',
    author: 'Jane Smith',
    category: 'Phobias',
    coverImage: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793974.jpg',
    readTime: '5 min read'
  },
  {
    id: 'confidence-building-strategies',
    title: 'Confidence Building Strategies That Actually Work',
    excerpt: 'Learn practical strategies to build lasting confidence and self-esteem through solution-focused approaches.',
    date: 'February 15, 2024',
    author: 'Jane Smith', 
    category: 'Self-Esteem',
    coverImage: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793949.jpg',
    readTime: '6 min read'
  }
];

// Blog post card component
const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <motion.div 
      variants={item}
      className="flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-6 bg-white">
        <div className="flex items-center mb-3 text-sm">
          <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded-full">
            {post.category}
          </span>
          <span className="ml-3 text-gray-500">{post.date}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
        <p className="mb-4 text-gray-600 line-clamp-3 flex-grow">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.readTime}</span>
          <Link 
            href={`/blog/${post.id}`} 
            className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-700"
          >
            Read article
            <motion.span 
              className="ml-1 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
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
            Insights & Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-indigo-100 text-center max-w-3xl mx-auto"
          >
            Expert articles on mental wellbeing, neuroscience, and the latest in solution-focused hypnotherapy
          </motion.p>
        </div>
      </section>
      
      {/* Featured posts grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <div className="hidden md:flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </motion.div>
        
        {/* Newsletter subscription */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Subscribe to our newsletter</h3>
            <p className="text-gray-600 mb-6">Get the latest articles, resources, and insights delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 