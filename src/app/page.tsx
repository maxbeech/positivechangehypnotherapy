'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  CalendarDaysIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Inter } from 'next/font/google';
import HeroSlider from '@/components/HeroSlider';
import { FaArrowRight, FaCheck, FaQuoteLeft, FaBrain } from 'react-icons/fa';
import { RiMentalHealthFill } from 'react-icons/ri';
import { MdTipsAndUpdates } from 'react-icons/md';

const inter = Inter({ subsets: ['latin'] });

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Services card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4 text-emerald-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-emerald-600 group-hover:text-emerald-700"
        >
          Learn more 
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </motion.div>
    </FadeIn>
  );
};

// Fade in animation for scroll sections
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: "Bisley Base has been a second home for our children. The staff are incredible - so caring and attentive. Our kids absolutely love going there!",
      author: "Sarah P.",
      role: "Parent of Jack & Emily"
    },
    {
      quote: "The preschool program is exceptional. Our daughter has thrived in the stimulating environment and caring atmosphere that Bisley Base provides.",
      author: "Mark T.",
      role: "Parent of Sophia"
    },
    {
      quote: "As working parents, we rely on the wraparound care at Bisley Base. The flexibility, quality of care, and communication with parents is outstanding.",
      author: "Emma & John H.",
      role: "Parents of Oliver"
    }
  ];
  
  // Latest News data
  const latestNews = [
    {
      title: "Summer Holiday Club Booking Now Open",
      date: "May 15, 2024",
      image: "/media/484871687_1066676745504882_7776977396599937926_n.jpg",
      excerpt: "Secure your child's place in our action-packed summer holiday club with exciting activities, outdoor adventures, and creative fun.",
      link: "/news/summer-holiday-club"
    },
    {
      title: "Preschool Open Day Announced",
      date: "April 30, 2024",
      image: "/media/484902036_1066676725504884_4700747617186550414_n.jpg",
      excerpt: "Join us for our upcoming Open Day to tour our facilities, meet our qualified staff, and learn about our preschool curriculum.",
      link: "/news/preschool-open-day"
    },
    {
      title: "New Forest School Activities Launch",
      date: "April 12, 2024",
      image: "/media/484918616_1066676722171551_1681522475451576546_n.jpg",
      excerpt: "We're excited to introduce new forest school activities to our curriculum, fostering outdoor learning and exploration.",
      link: "/news/forest-school-activities"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                Trying To Change Your Life But Don't Know Where To Start?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-4 text-xl md:text-2xl text-white font-medium max-w-2xl"
              >
                Make Progress In Your First 1-Hour Session Of Clinically-Proven Behavioural Change Therapy
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="https://positivechangehypnotherapy.co.uk/booking" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-full shadow-xl text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* What if section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What if in the next 6 weeks you could...
            </h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gain Clarity & Confidence",
                description: "Go from feeling stuck and unsure of the next step to take... to feeling clear, confident and excited as you take action",
                icon: <MdTipsAndUpdates className="h-10 w-10 text-indigo-600" />
              },
              {
                title: "Break Harmful Habits",
                description: "Stop struggling with bad habits that are damaging your health, finances, and relationships",
                icon: <RiMentalHealthFill className="h-10 w-10 text-indigo-600" />
              },
              {
                title: "Reconnect With Yourself",
                description: "Reconnect with the amazing parts of yourself that you currently feel are lost and rediscover your authentic self",
                icon: <FaBrain className="h-10 w-10 text-indigo-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/programs/one-to-one" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Don't Stay Stuck
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Here's the problem...
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                You know that to achieve the life you want, you need to change things 
                in your life that are currently holding you back. But...
              </p>
              <ul className="space-y-4">
                {[
                  "You're full of uncertainty of the next exact step you need to take",
                  "You get overwhelmed and paralysed by fear",
                  "You've tried to change before, and were so discouraged by your lack of progress that you're nervous to try again",
                  "You may have tried reading self-help books, other talk therapies, testing out new habits like meditation, journaling and mindfulness practice."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="h-3 w-3 text-white" />
                    </span>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/media/Stress-related photos/pexels-rdne-5542968.jpg"
                  alt="Woman feeling stressed"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white">Feeling Stuck?</h3>
                  <p className="text-indigo-200">You're not alone in this struggle</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/media/pattern.svg" 
            alt="Background pattern" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solution Focused Hypnotherapy Put Me Back In Control Of My Life
              </h2>
              <p className="text-lg text-indigo-200 mb-6">
                That's why I created Positive Change Hypnotherapy. This was the only thing that helped me 
                turn my life into the wonderful and positive experience it is now. And I want to help other 
                people to do the same.
              </p>
              <div className="bg-indigo-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Here's Why It Works…</h3>
                <p className="text-indigo-200">
                  Solution Focused Hypnotherapy is a clinically-proven change therapy that uses 
                  the science of behaviour change to get measurable and permanent results fast for 
                  people who need help.
                </p>
                <p className="text-indigo-200 mt-4">
                  Instead of dwelling on past trauma, we use a simple, structured, research-based 
                  process to create profound positive change.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="relative max-w-md">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-indigo-400 opacity-20"></div>
                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-indigo-500 opacity-20"></div>
                <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/media/founder_profile_picture.webp"
                    alt="Keira Smith - Qualified Hypnotherapist"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="p-6 bg-gradient-to-br from-indigo-600 to-indigo-800">
                    <h3 className="text-xl font-bold text-white">Keira Smith</h3>
                    <p className="text-indigo-200">Qualified Hypnotherapist, Clifton Practice</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You may be wondering, "Does this actually work?"
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Many other therapies rely on outdated science. Solution Focused Hypnotherapy is 100% science-based 
              and uses the latest in behavioural neuroscience.
            </p>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">If you're willing to commit to:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="h-3 w-3 text-white" />
                    </span>
                    <span className="ml-3 text-gray-700">
                      30 minutes of work a day (25 minutes lying down listening to the trance recording, 
                      5 minutes of a simple written exercise)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="h-3 w-3 text-white" />
                    </span>
                    <span className="ml-3 text-gray-700">
                      A 1 hour session a week
                    </span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">…Then you'll see results.</h3>
                <p className="text-gray-700">
                  If you're not willing to do those two commitments, then you won't see results from 
                  this (or any other solution).
                </p>
                <p className="text-gray-900 font-medium mt-4">Sound good? Great! Then…</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Change How You Use Your Brain To Get What You Really Want In Life.
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto">
              The goal of our work together is to:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-indigo-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Define exactly what life will look like when you've made the changes that you most need to make
              </h3>
              <p className="text-gray-600">
                Together, we'll create a clear vision of your desired future, with concrete goals 
                and outcomes that matter to you.
              </p>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-indigo-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Help you to make those changes… without hours of complicated self-care, talk therapy, 
                or feeling lost and unsupported
              </h3>
              <p className="text-gray-600">
                Using proven neuroscience-based techniques, you'll develop new neural pathways that support 
                lasting positive change.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link 
              href="https://positivechangehypnotherapy.co.uk/booking" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Your First Session Today
              <FaArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image 
            src="/media/pattern.svg" 
            alt="Background pattern" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Others Say About Their Experience
            </h2>
            <div className="h-1 w-20 bg-indigo-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Keira's sessions are wonderful, uplifting and so helpful… I finally feel like I've found something that has made a real noticeable difference to helping manage my OCD symptoms, and that is invaluable. I can't recommend the sessions enough, Keira is amazing!",
                author: "Samantha"
              },
              {
                quote: "Hypnotherapy with Keira helped me gain the confidence I needed to advance in the workplace. It helped me focus, relax, and sleep more peacefully. I felt very safe in Keira's expert hands.",
                author: "Gav"
              },
              {
                quote: "Having never had any sort of therapy before I was very hesitant to try, but felt I'd come to a point where workplace stress was becoming uncontrollable and I'd tried many other self help ideas. From my very first treatment I felt a difference and after 6 I feel so much better and have been able to cope and even thrive in my workplace. Thank you so much!",
                author: "Chloe"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative"
              >
                <FaQuoteLeft className="absolute top-4 left-4 h-8 w-8 text-indigo-400 opacity-40" />
                <div className="pt-6">
                  <p className="text-white leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="h-px w-12 bg-indigo-400 mb-4"></div>
                  <p className="font-medium text-indigo-200">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Read More Testimonials
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Program section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 1-to-1 Positive Change Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make meaningful progress towards your most desired goal in 6-12 weeks.
            </p>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Structured 1-to-1 sessions in bundles of 6, 8 or 10",
                    "Personalized trance recordings for daily practice",
                    "Simple, effective exercises to rewire your brain",
                    "Ongoing support between sessions",
                    "Science-backed techniques for lasting change",
                    "Weekly progress tracking and adjustments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1">
                        <FaCheck className="h-3 w-3 text-white" />
                      </span>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    href="/programs/one-to-one" 
                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Learn more about the program
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">
                  Ready to Experience Deep, Meaningful Positive Change?
                </h3>
                <p className="mb-6">
                  The 1-to-1 Positive Change Program is a package of structured sessions which you can 
                  buy in bundles of 6, 8 or 10. Once you purchase your package, you can book these sessions at 
                  your convenience.
                </p>
                <div>
                  <Link 
                    href="https://positivechangehypnotherapy.co.uk/booking" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Yes! Let Me Pick My Package!
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 