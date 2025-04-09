'use client';

import FadeIn from '@/components/ui/animations/FadeIn'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

export default function GroupSessionsPage() {
  return (
    <div className="bg-soft-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Group Hypnotherapy Sessions</h1>
            <p className="text-xl text-slate-700 mb-8">
              Affordable, effective hypnotherapy in a supportive community environment
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 md:order-1">
              <h2 className="text-3xl font-serif text-primary mb-6">The Power of Shared Experiences</h2>
              <p className="text-slate-700 mb-4">
                Our group hypnotherapy sessions provide a unique opportunity to address common challenges in a supportive 
                community environment. Not only are these sessions more affordable than one-to-one therapy, but they also 
                offer the added benefit of shared experiences and mutual support.
              </p>
              <p className="text-slate-700 mb-4">
                Each group is carefully curated to ensure all participants are working on similar goals, creating a focused 
                and effective therapeutic environment. The power of group dynamics can significantly enhance the hypnotherapy 
                experience, as participants draw strength and motivation from each other.
              </p>
              <p className="text-slate-700">
                These sessions are ideal for addressing common challenges such as stress management, confidence building, 
                weight management, smoking cessation, and more.
              </p>
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/Hyponotherapy-related photos/pexels-arina-krasnikova-6998272.jpg" 
                  alt="Group Hypnotherapy Sessions" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-soft-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">How Group Sessions Work</h2>
            <p className="text-slate-700">
              Our structured approach ensures each participant receives maximum benefit from the group experience.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Session Assessment",
                description: "Complete a brief assessment to ensure the group session aligns with your specific needs and goals."
              },
              {
                title: "Group Formation",
                description: "You'll be placed in a small group (4-8 people) all working toward similar objectives."
              },
              {
                title: "Orientation Session",
                description: "Meet your group and therapist to establish rapport and learn about the process."
              },
              {
                title: "Weekly Sessions",
                description: "Attend regular 90-minute sessions where you'll experience both group discussions and guided hypnotherapy."
              },
              {
                title: "Support Materials",
                description: "Receive recordings for home practice and materials to reinforce your progress between sessions."
              },
              {
                title: "Progress Review",
                description: "Regular check-ins to assess your development and adjust techniques as needed."
              }
            ].map((item, index) => (
              <FadeIn 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                delay={index * 0.1}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium text-primary ml-3">{item.title}</h3>
                </div>
                <p className="text-slate-700">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Current Groups Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">Current Group Programs</h2>
            <p className="text-slate-700">
              Join one of our specialized group programs designed to address specific challenges.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stress & Anxiety Management",
                schedule: "Mondays, 6:30-8:00 PM",
                description: "Learn effective techniques to manage stress and anxiety in daily life.",
                startDate: "New group starts monthly"
              },
              {
                title: "Confidence & Self-Esteem",
                schedule: "Wednesdays, 6:30-8:00 PM",
                description: "Build lasting confidence and improve self-esteem through hypnotherapy.",
                startDate: "Next group: June 15th"
              },
              {
                title: "Weight Management",
                schedule: "Thursdays, 6:30-8:00 PM",
                description: "Develop a healthier relationship with food and create sustainable habits.",
                startDate: "Ongoing enrollment"
              },
              {
                title: "Smoking Cessation",
                schedule: "Saturdays, 10:00-11:30 AM",
                description: "A 4-week intensive program to help you quit smoking for good.",
                startDate: "New group every month"
              },
              {
                title: "Sleep Improvement",
                schedule: "Tuesdays, 7:00-8:30 PM",
                description: "Overcome insomnia and develop healthy sleep patterns.",
                startDate: "Next group: June 20th"
              },
              {
                title: "Pain Management",
                schedule: "Fridays, 10:00-11:30 AM",
                description: "Learn mind-body techniques to manage chronic pain and improve quality of life.",
                startDate: "Limited spots available"
              }
            ].map((group, index) => (
              <FadeIn 
                key={index}
                className="bg-soft-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                delay={index * 0.1}
              >
                <h3 className="text-xl font-medium text-primary mb-2">{group.title}</h3>
                <div className="mb-3 flex items-center text-sm text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {group.schedule}
                </div>
                <p className="text-slate-700 mb-4">{group.description}</p>
                <p className="text-sm font-medium text-primary">{group.startDate}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-soft-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">Benefits of Group Hypnotherapy</h2>
            <p className="text-slate-700">
              Our group sessions offer unique advantages that complement the effectiveness of hypnotherapy.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost-Effective",
                description: "Group sessions are more affordable than individual therapy, making hypnotherapy accessible to more people."
              },
              {
                title: "Community Support",
                description: "Draw strength and motivation from others who understand your challenges and share similar goals."
              },
              {
                title: "Shared Learning",
                description: "Benefit from the insights, questions, and experiences of other group members."
              },
              {
                title: "Accountability",
                description: "The group format provides natural accountability that helps maintain commitment to your goals."
              },
              {
                title: "Normalized Experience",
                description: "Realize you're not alone in your challenges, reducing feelings of isolation or being 'different'."
              },
              {
                title: "Multiple Perspectives",
                description: "Gain insights from different viewpoints and approaches to similar challenges."
              }
            ].map((benefit, index) => (
              <FadeIn 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                delay={index * 0.1}
              >
                <h3 className="text-xl font-medium text-primary mb-3">{benefit.title}</h3>
                <p className="text-slate-700">{benefit.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">What Our Group Participants Say</h2>
            <p className="text-slate-700">
              Read about the experiences of those who have participated in our group sessions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The group dynamic added so much to my experience. Hearing others' breakthroughs motivated me and the shared journey made me feel less alone in my struggles.",
                name: "Sarah J.",
                program: "Anxiety Management Group"
              },
              {
                quote: "I was skeptical about group hypnotherapy at first, but it's been incredibly powerful. The affordability allowed me to commit to the full program, and the results have been life-changing.",
                name: "Michael T.",
                program: "Confidence Building Group"
              },
              {
                quote: "The support from both the therapist and other group members created a safe space where I could truly let go and embrace the hypnotic process. I've made friends for life.",
                name: "Amira H.",
                program: "Weight Management Group"
              },
              {
                quote: "After trying to quit smoking for years on my own, the group program finally helped me succeed. The combination of professional guidance and peer support was exactly what I needed.",
                name: "David W.",
                program: "Smoking Cessation Group"
              }
            ].map((testimonial, index) => (
              <FadeIn 
                key={index}
                className="bg-soft-white p-6 rounded-xl shadow-md"
                delay={index * 0.1}
              >
                <svg className="h-8 w-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-700 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-primary">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.program}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-soft-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-700">
              Get answers to common questions about our group hypnotherapy sessions.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Is hypnotherapy still effective in a group setting?",
                answer: "Yes, absolutely. While the experience differs from one-to-one sessions, group hypnotherapy has proven to be highly effective. The power of shared experience and group support can actually enhance the therapeutic process for many people."
              },
              {
                question: "How large are the groups?",
                answer: "We keep our groups small and intimate, typically 4-8 people. This ensures everyone receives personalized attention while still benefiting from the group dynamic."
              },
              {
                question: "Will I have to share personal information with the group?",
                answer: "While sharing can enhance the group experience, it's always voluntary. You control what and how much you share. Many find that the supportive environment makes sharing comfortable, but it's never required."
              },
              {
                question: "What if I can't make it to a session?",
                answer: "We understand that life happens. If you miss a session, we'll provide you with recordings and materials to keep up with the group. For certain programs, make-up sessions may be available."
              },
              {
                question: "How do I know if group or individual sessions are right for me?",
                answer: "This depends on your personal preferences, specific goals, and circumstances. We offer free consultations to help determine which approach would be most beneficial for your unique situation."
              }
            ].map((faq, index) => (
              <FadeIn 
                key={index}
                className="mb-6 bg-white p-6 rounded-xl shadow-sm"
                delay={index * 0.1}
              >
                <h3 className="text-xl font-medium text-primary mb-3">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-6">Join a Group Session Today</h2>
            <p className="text-xl mb-8">
              Take the first step toward positive change in a supportive community environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-soft-white transition-colors"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/programs" 
                className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Other Programs
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 