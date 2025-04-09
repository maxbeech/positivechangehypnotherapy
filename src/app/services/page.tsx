import React from 'react';
import { Metadata } from 'next';
import AnimatedServices from '@/components/AnimatedServices';

export const metadata: Metadata = {
  title: 'Services | Positive Change Hypnotherapy',
  description: "Explore the range of Solution Focused Hypnotherapy services offered by Positive Change Hypnotherapy including anxiety treatment, stress management, confidence building, and more.",
  openGraph: {
    title: 'Services | Positive Change Hypnotherapy',
    description: "Explore the range of Solution Focused Hypnotherapy services offered by Positive Change Hypnotherapy including anxiety treatment, stress management, confidence building, and more.",
    url: 'https://positivechangehypnotherapy.co.uk/services',
    type: 'website',
  },
};

const ServicesPage = () => {
  // Services data
  const services = [
    {
      id: 'anxiety-depression',
      title: 'Anxiety & Depression',
      description: 'Overcome anxiety and depression through evidence-based hypnotherapy techniques that help rewire neural pathways and build emotional resilience.',
      image: '/media/Stress-related photos/pexels-rdne-5542968.jpg',
      benefits: [
        'Reduce feelings of anxiety and panic',
        'Lift persistent low mood',
        'Break cycles of negative thinking',
        'Develop healthy coping mechanisms',
        'Build emotional resilience'
      ]
    },
    {
      id: 'stress-management',
      title: 'Stress Management',
      description: 'Learn effective techniques to manage stress, reduce its impact on your life, and develop healthier responses to stressful situations.',
      image: '/media/Stress-related photos/nubelson-fernandes-Cc9Yso_xn4I-unsplash.jpg',
      benefits: [
        'Reduce physical symptoms of stress',
        'Improve sleep quality',
        'Enhance work-life balance',
        'Develop effective relaxation skills',
        'Create sustainable lifestyle changes'
      ]
    },
    {
      id: 'confidence-self-esteem',
      title: 'Confidence & Self-Esteem',
      description: 'Build lasting confidence and healthy self-esteem through hypnotherapy techniques that address limiting beliefs and negative self-talk.',
      image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793707.jpg',
      benefits: [
        'Overcome imposter syndrome',
        'Develop positive self-talk',
        'Increase assertiveness',
        'Reduce social anxiety',
        'Enhance performance in work and personal life'
      ]
    },
    {
      id: 'phobias-fears',
      title: 'Phobias & Fears',
      description: 'Free yourself from specific phobias and fears through gentle hypnotherapy techniques that help your brain create new, calmer responses.',
      image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793974.jpg',
      benefits: [
        'Reduce or eliminate phobic responses',
        'Face feared situations with confidence',
        'Understand the root of your fears',
        'Create new neural pathways',
        'Expand your comfort zone'
      ]
    },
    {
      id: 'habits-addictions',
      title: 'Habits & Addictions',
      description: 'Break free from unwanted habits and addictive behaviors with hypnotherapy approaches that address both conscious and subconscious patterns.',
      image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793696.jpg',
      benefits: [
        'Reduce cravings and compulsions',
        'Develop healthier alternatives',
        'Identify and address triggers',
        'Create sustainable behavior change',
        'Increase self-control and awareness'
      ]
    },
    {
      id: 'sleep-issues',
      title: 'Sleep Issues',
      description: 'Improve your sleep quality and overcome insomnia through hypnotherapy techniques that calm the mind and establish healthy sleep patterns.',
      image: '/media/Stress-related photos/nik-shuliahin-BuNWp1bL0nc-unsplash.jpg',
      benefits: [
        'Fall asleep more quickly',
        'Stay asleep throughout the night',
        'Wake feeling refreshed',
        'Reduce racing thoughts at bedtime',
        'Establish consistent sleep routines'
      ]
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <AnimatedServices services={services} />
    </main>
  );
};

export default ServicesPage; 