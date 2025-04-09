import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const GroupSessions = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/media/pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Group Hypnotherapy Sessions
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Experience the power of collective healing and transformation
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
              <AnimatedSection>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Hyponotherapy-related photos/group-session.jpg" 
                    alt="Group Hypnotherapy Sessions" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
              </AnimatedSection>
              
              {/* Content */}
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Group Hypnotherapy Sessions</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our group hypnotherapy sessions offer a unique and powerful way to experience personal transformation in a supportive community setting. These sessions combine the benefits of group dynamics with the effectiveness of solution-focused hypnotherapy.
                  </p>
                  <p>
                    Whether you're looking to manage stress, build confidence, or achieve personal goals, our group sessions provide a safe and nurturing environment for growth and change.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GroupSessions; 