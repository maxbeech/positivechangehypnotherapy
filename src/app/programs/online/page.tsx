import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Online Hypnotherapy Programs | Positive Change Hypnotherapy',
  description: "Access Solution Focused Hypnotherapy from anywhere with our convenient online programs, offering the same effective treatment as in-person sessions.",
  openGraph: {
    title: 'Online Hypnotherapy Programs | Positive Change Hypnotherapy',
    description: "Access Solution Focused Hypnotherapy from anywhere with our convenient online programs, offering the same effective treatment as in-person sessions.",
    url: 'https://positivechangehypnotherapy.co.uk/programs/online',
    type: 'website',
  },
};

const OnlineProgram = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online Hypnotherapy Programs
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Professional Solution Focused Hypnotherapy from the comfort of your home
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/Hyponotherapy-related photos/pexels-arina-krasnikova-6998270.jpg" 
                  alt="Online Hypnotherapy Sessions" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Convenient & Effective Online Therapy
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  My online hypnotherapy programs offer the same high-quality treatment as in-person sessions, 
                  with the added convenience of accessing therapy from anywhere. Using secure video platforms, 
                  we can conduct sessions that are just as effective as face-to-face appointments.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're unable to travel, prefer the comfort of your own space, or simply find online 
                  sessions more convenient, my online programs provide a flexible solution without compromising 
                  on results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Benefits of Online Hypnotherapy
            </h2>
            <p className="text-lg text-gray-700">
              Online sessions offer unique advantages that make hypnotherapy more accessible and convenient.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Convenience",
                  description: "Access therapy from anywhere with an internet connection, eliminating travel time and costs."
                },
                {
                  title: "Comfort",
                  description: "Receive treatment in your own familiar environment, which can help you feel more relaxed and at ease."
                },
                {
                  title: "Flexibility",
                  description: "More scheduling options to fit around your work, family, and other commitments."
                },
                {
                  title: "Privacy",
                  description: "Complete confidentiality from the privacy of your own home, with no need to visit a clinic."
                },
                {
                  title: "Consistency",
                  description: "Maintain regular sessions even when traveling or during busy periods in your life."
                },
                {
                  title: "Effectiveness",
                  description: "Research shows online hypnotherapy can be just as effective as in-person sessions for most issues."
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
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              How Online Sessions Work
            </h2>
            <p className="text-lg text-gray-700">
              The process is simple and designed to be as smooth as possible.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">1</div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a free 30-minute online consultation to discuss your needs and ensure online 
                    hypnotherapy is suitable for you. I'll explain how the process works and answer any questions you may have.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">2</div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Technical Setup</h3>
                  <p className="text-gray-700">
                    I'll guide you through the simple technical requirements: a quiet, private space, a stable internet 
                    connection, and a device with a camera and microphone. I'll also send you detailed instructions 
                    for accessing our secure video platform.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">3</div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Online Sessions</h3>
                  <p className="text-gray-700">
                    Our sessions follow the same structure as in-person appointments, with solution-focused discussion 
                    followed by guided hypnotherapy. I'll send you a relaxation recording after each session to use 
                    between appointments.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">4</div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Ongoing Support</h3>
                  <p className="text-gray-700">
                    Between sessions, you'll have access to resources, exercises, and recordings to support your progress. 
                    I'm also available via email for any questions or concerns that arise between appointments.
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
              Ready to Start Your Online Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Book your free initial consultation and discover how online hypnotherapy can help you achieve positive change.
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
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineProgram; 