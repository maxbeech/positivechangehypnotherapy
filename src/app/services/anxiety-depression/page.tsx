'use client';

import { AnimatedService } from '@/components/ui/animations/AnimatedService';

export default function AnxietyDepressionPage() {
  const benefits = [
    {
      title: 'Natural Relief',
      description: 'Experience relief from anxiety and depression symptoms without medication, using proven hypnotherapy techniques.'
    },
    {
      title: 'Long-lasting Results',
      description: 'Develop lasting coping mechanisms and positive thought patterns that continue to benefit you long after treatment.'
    },
    {
      title: 'Personalized Approach',
      description: 'Receive treatment tailored to your specific symptoms, triggers, and personal circumstances.'
    },
    {
      title: 'Safe & Confidential',
      description: 'Work in a safe, confidential environment where you can freely express your concerns and feelings.'
    },
    {
      title: 'Holistic Healing',
      description: 'Address the root causes of your anxiety and depression while improving overall mental wellbeing.'
    },
    {
      title: 'Evidence-Based Methods',
      description: 'Benefit from scientifically-backed hypnotherapy techniques proven effective for anxiety and depression.'
    }
  ];

  const process = [
    {
      title: 'Initial Consultation',
      description: 'We begin with a thorough assessment of your symptoms, triggers, and treatment goals.'
    },
    {
      title: 'Treatment Planning',
      description: 'Create a personalized treatment plan addressing your specific needs and concerns.'
    },
    {
      title: 'Hypnotherapy Sessions',
      description: 'Regular sessions using proven techniques to manage symptoms and develop coping strategies.'
    },
    {
      title: 'Progress Review',
      description: 'Regular assessment of your progress and adjustment of treatment as needed.'
    }
  ];

  const faqs = [
    {
      question: 'How does hypnotherapy help with anxiety and depression?',
      answer: 'Hypnotherapy helps by accessing your subconscious mind to identify and address the root causes of anxiety and depression. It teaches you effective coping mechanisms and helps develop positive thought patterns.'
    },
    {
      question: 'How long does treatment typically take?',
      answer: 'The duration varies depending on individual circumstances, but most clients see significant improvement within 6-12 sessions. We create a personalized treatment plan based on your specific needs.'
    },
    {
      question: 'Will I need to stop taking my medication?',
      answer: 'No, hypnotherapy can work alongside medication. We recommend consulting with your healthcare provider about any changes to your medication.'
    },
    {
      question: 'Is hypnotherapy suitable for severe anxiety or depression?',
      answer: 'Yes, hypnotherapy can be effective for all levels of anxiety and depression. However, we always recommend working alongside your healthcare provider for severe cases.'
    }
  ];

  return (
    <AnimatedService
      title="Anxiety & Depression Treatment"
      subtitle="Find relief and regain control of your life"
      description="Our specialized anxiety and depression treatment program combines solution-focused hypnotherapy with proven techniques to help you manage symptoms, develop coping strategies, and achieve lasting positive change. Whether you're dealing with persistent anxiety, depression, or both, our personalized approach addresses your unique needs and helps you build a foundation for better mental health."
      image="/media/Stress-related photos/pexels-rdne-5542968.jpg"
      benefits={benefits}
      process={process}
      faqs={faqs}
    />
  );
} 