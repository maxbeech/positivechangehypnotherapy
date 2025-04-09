import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ClientMotion from '@/components/ui/animations/ClientMotion';

export const metadata: Metadata = {
  title: 'Hypnotherapy Programs | Positive Change Hypnotherapy',
  description: "Explore our structured Solution Focused Hypnotherapy programs including one-to-one sessions, group programs, online therapy, and corporate wellness solutions.",
  openGraph: {
    title: 'Hypnotherapy Programs | Positive Change Hypnotherapy',
    description: "Explore our structured Solution Focused Hypnotherapy programs including one-to-one sessions, group programs, online therapy, and corporate wellness solutions.",
    url: 'https://positivechangehypnotherapy.co.uk/programs',
    type: 'website',
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ProgramsPage = () => {
  // Programs data
  const programs = [
    {
      id: 'one-to-one',
      title: '1-to-1 Positive Change Program',
      description: 'A personalized program of Solution Focused Hypnotherapy sessions tailored to your specific needs and goals.',
      image: '/media/Hyponotherapy-related photos/pexels-shkrabaanthony-6252171.jpg',
      features: [
        'Initial consultation to understand your needs',
        'Personalized treatment plan',
        '6-12 weekly sessions (varies by condition)',
        'Relaxation audio recording for home use',
        'Progress evaluations throughout'
      ]
    },
    {
      id: 'group-sessions',
      title: 'Group Sessions',
      description: 'Cost-effective group hypnotherapy sessions focusing on common challenges like stress, anxiety, and confidence building.',
      image: '/media/Hyponotherapy-related photos/pexels-arina-krasnikova-6998272.jpg',
      features: [
        'Small groups of 4-8 participants',
        'Themed sessions (e.g., stress management)',
        'Cost-effective solution',
        'Community support environment',
        '6-week structured programs'
      ]
    },
    {
      id: 'online',
      title: 'Online Sessions',
      description: 'Experience the benefits of Solution Focused Hypnotherapy from the comfort of your home through secure online sessions.',
      image: '/media/Hyponotherapy-related photos/pexels-arina-krasnikova-6998270.jpg',
      features: [
        'Same effective approach as in-person sessions',
        'Secure, confidential platform',
        'No commuting necessary',
        'Flexible scheduling options',
        'Digital resources provided'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Wellness',
      description: 'Help your team manage stress, build resilience, and improve workplace wellbeing with tailored corporate programs.',
      image: '/media/Stress-related photos/pexels-energepic-com-27411-313690.jpg',
      features: [
        'Workshops for stress management',
        'Group or individual sessions',
        'Mindfulness training',
        'Work-life balance strategies',
        'Customized to company needs'
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
            <ClientMotion 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Structured Hypnotherapy Programs
            </ClientMotion>
            <ClientMotion 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive solutions designed to create lasting positive change
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* Programs Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ClientMotion 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Tailored Solutions for Transformation
            </ClientMotion>
            <ClientMotion 
              className="text-lg text-gray-700 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              My structured programs offer comprehensive approaches to specific challenges, 
              combining the power of Solution Focused Hypnotherapy with practical tools and 
              techniques that support lasting change. Whether you prefer one-to-one sessions, 
              group support, online convenience, or workplace wellness initiatives, I have a 
              program designed to help you achieve your goals.
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {programs.map((program, index) => (
                <ClientMotion 
                  key={program.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side (left on odd, right on even) */}
                    <div className={`relative h-64 md:h-auto ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <Image 
                        src={program.image} 
                        alt={program.title} 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent md:hidden"></div>
                      <div className="absolute bottom-0 left-0 p-4 md:hidden">
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-indigo-700 mb-4 hidden md:block">{program.title}</h3>
                      <p className="text-gray-700 mb-6">{program.description}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto">
                        <Link 
                          href={`/programs/${program.id}`} 
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                        >
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ClientMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ClientMotion 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Positive Change Approach</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    All my programs are built on the principles of Solution Focused Hypnotherapy, 
                    a modern, evidence-based approach that combines the latest understanding of neuroscience 
                    with powerful hypnotherapy techniques.
                  </p>
                  <p>
                    Rather than dwelling on problems or analyzing the past, we focus on your preferred future 
                    and the steps needed to get there. This forward-looking approach helps create new neural 
                    pathways and patterns of thinking that support lasting positive change.
                  </p>
                  <p>
                    Whether you choose one-to-one sessions, group work, online therapy, or a corporate 
                    program, you'll benefit from this effective combination of solution-focused conversation 
                    and guided relaxation designed to harness your brain's natural capacity for change.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/about/solution-focused-hypnotherapy" 
                    className="inline-flex items-center px-5 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-medium transition-all duration-300 hover:bg-indigo-50 hover:scale-105"
                  >
                    Learn More About The Approach
                  </Link>
                </div>
              </ClientMotion>
              
              {/* Image */}
              <ClientMotion 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/pexels-ivan-samkov-5659019.jpg" 
                    alt="Solution Focused Hypnotherapy Approach" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
              </ClientMotion>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection Guide */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <ClientMotion 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Which Program Is Right For You?
            </ClientMotion>
            <ClientMotion 
              className="text-lg text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Find the perfect program based on your needs and preferences
            </ClientMotion>
          </div>

          <div className="max-w-4xl mx-auto">
            <ClientMotion 
              className="bg-white rounded-xl shadow-md p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-8">
                {/* Option 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">You might prefer the <Link href="/programs/one-to-one" className="underline hover:text-indigo-900">1-to-1 Program</Link> if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You have specific challenges you want to address</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You prefer personalized, confidential support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You want a treatment plan tailored to your specific needs</span>
                    </li>
                  </ul>
                </div>
                
                {/* Option 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">You might prefer <Link href="/programs/group-sessions" className="underline hover:text-indigo-900">Group Sessions</Link> if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You're looking for a more affordable option</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You value the support and connection with others facing similar challenges</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You're addressing a common challenge like stress or confidence</span>
                    </li>
                  </ul>
                </div>
                
                {/* Option 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">You might prefer <Link href="/programs/online" className="underline hover:text-indigo-900">Online Sessions</Link> if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You prefer the convenience of sessions from your home</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You have mobility issues, childcare constraints, or live further away</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You want the flexibility of scheduling sessions at various times</span>
                    </li>
                  </ul>
                </div>
                
                {/* Option 4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">You might need <Link href="/programs/corporate" className="underline hover:text-indigo-900">Corporate Wellness</Link> if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You're an organization looking to support employee mental well-being</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You want to reduce stress and improve resilience across your team</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">You're seeking workshops, training, or a combination of services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ClientMotion 
              className="text-3xl font-bold mb-12 text-gray-800 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              What Clients Say
            </ClientMotion>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <ClientMotion 
                className="bg-gray-50 rounded-xl p-6 shadow-sm relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="absolute top-4 left-4 text-indigo-400">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 25H15V15H8.33333V25ZM25 25H31.6667V15H25V25ZM37.5 32.5H2.5V35H37.5V32.5ZM2.5 30H37.5V27.5H2.5V30ZM2.5 10V12.5H5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H15.8333C16.4964 27.5 17.1323 27.2366 17.6011 26.7678C18.0699 26.2989 18.3333 25.663 18.3333 25V12.5H21.6667V25C21.6667 25.663 21.9301 26.2989 22.3989 26.7678C22.8677 27.2366 23.5036 27.5 24.1667 27.5H32.5C33.163 27.5 33.7989 27.2366 34.2678 26.7678C34.7366 26.2989 35 25.663 35 25V12.5H37.5V10H2.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="pt-10">
                  <p className="text-gray-700 italic mb-4">
                    "The 1-to-1 Positive Change Program has been transformative. Keira created a personalized approach 
                    that addressed my specific anxiety issues. Six weeks in, I'm already using techniques that have 
                    dramatically reduced my anxiety levels. The combination of solution-focused conversations and 
                    hypnotherapy has been so much more effective than other approaches I've tried."
                  </p>
                  <p className="text-right text-indigo-700 font-medium">— Michael, Leicester</p>
                </div>
              </ClientMotion>

              {/* Testimonial 2 */}
              <ClientMotion 
                className="bg-gray-50 rounded-xl p-6 shadow-sm relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute top-4 left-4 text-indigo-400">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 25H15V15H8.33333V25ZM25 25H31.6667V15H25V25ZM37.5 32.5H2.5V35H37.5V32.5ZM2.5 30H37.5V27.5H2.5V30ZM2.5 10V12.5H5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H15.8333C16.4964 27.5 17.1323 27.2366 17.6011 26.7678C18.0699 26.2989 18.3333 25.663 18.3333 25V12.5H21.6667V25C21.6667 25.663 21.9301 26.2989 22.3989 26.7678C22.8677 27.2366 23.5036 27.5 24.1667 27.5H32.5C33.163 27.5 33.7989 27.2366 34.2678 26.7678C34.7366 26.2989 35 25.663 35 25V12.5H37.5V10H2.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="pt-10">
                  <p className="text-gray-700 italic mb-4">
                    "I was skeptical about online sessions, but they've been every bit as effective as in-person therapy. 
                    The convenience of connecting from home actually helped me feel more relaxed right from the start. 
                    Keira's approach translates perfectly to the online format, and I've seen real improvements in my 
                    confidence and self-esteem issues."
                  </p>
                  <p className="text-right text-indigo-700 font-medium">— Rebecca, Northamptonshire</p>
                </div>
              </ClientMotion>
            </div>

            <ClientMotion 
              className="mt-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Link 
                href="/testimonials" 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Read more testimonials
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ClientMotion 
              className="text-3xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Ready to Start Your Transformation?
            </ClientMotion>
            <ClientMotion 
              className="text-xl text-indigo-100 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Book a free initial consultation to discuss which program is right for you.
            </ClientMotion>
            <ClientMotion 
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
                Book a Consultation
              </Link>
            </ClientMotion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramsPage; 