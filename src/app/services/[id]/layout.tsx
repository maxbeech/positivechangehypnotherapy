import { Metadata } from 'next';

// Type definitions for service data
interface ContentSection {
  title: string;
  text: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  content: ContentSection[];
}

interface Services {
  [key: string]: Service;
}

// Service data (would typically come from a CMS or database)
const services: Services = {
  'anxiety-depression': {
    title: 'Anxiety & Depression',
    description: 'Overcome anxiety and depression through evidence-based hypnotherapy techniques that help rewire neural pathways and build emotional resilience.',
    image: '/media/Stress-related photos/pexels-rdne-5542968.jpg',
    benefits: [
      'Reduce feelings of anxiety and panic',
      'Lift persistent low mood',
      'Break cycles of negative thinking',
      'Develop healthy coping mechanisms',
      'Build emotional resilience'
    ],
    content: [
      {
        title: 'Understanding Anxiety & Depression',
        text: 'Anxiety and depression are common mental health challenges that can significantly impact your quality of life. While they often occur together, they can also present independently. Solution Focused Hypnotherapy offers an effective approach to managing both conditions.'
      },
      {
        title: 'How Solution Focused Hypnotherapy Helps',
        text: 'Through a combination of solution-focused conversation and guided relaxation, we work together to create new neural pathways that support positive thinking and emotional regulation. This approach helps you develop healthier responses to stress and challenging situations.'
      },
      {
        title: 'What to Expect',
        text: 'Your journey begins with an initial consultation where we discuss your specific challenges and goals. We then develop a personalized treatment plan that may include 6-12 weekly sessions, depending on your needs. Each session combines solution-focused conversation with hypnosis to reinforce positive changes.'
      }
    ]
  },
  'stress-management': {
    title: 'Stress Management',
    description: 'Learn effective techniques to manage and reduce stress in your daily life.',
    image: '/media/Stress-related photos/nubelson-fernandes-Cc9Yso_xn4I-unsplash.jpg',
    benefits: [
      'Reduced anxiety and tension',
      'Improved sleep quality',
      'Better emotional regulation',
      'Enhanced focus and productivity',
      'Increased resilience to stress'
    ],
    content: [
      {
        title: 'Understanding Your Stress',
        text: "We'll explore your unique stress patterns and triggers, helping you develop a deeper understanding of how stress affects your life."
      },
      {
        title: 'The Solution Focused Approach',
        text: 'Rather than dwelling on what causes your stress, we focus on building your capacity to handle pressure and developing practical techniques for managing stress in your daily life. This forward-looking approach helps create lasting positive change.'
      },
      {
        title: 'Your Stress Management Journey',
        text: "We begin with identifying your specific stress triggers and current coping mechanisms. Through a combination of solution-focused conversation and hypnosis, you'll learn new strategies for managing stress and maintaining balance in your life."
      }
    ]
  },
  'confidence-self-esteem': {
    title: 'Confidence & Self-Esteem',
    description: 'Build lasting confidence and healthy self-esteem through hypnotherapy techniques that address limiting beliefs and negative self-talk.',
    image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793707.jpg',
    benefits: [
      'Overcome imposter syndrome',
      'Develop positive self-talk',
      'Increase assertiveness',
      'Reduce social anxiety',
      'Enhance performance in work and personal life'
    ],
    content: [
      {
        title: 'Understanding Confidence & Self-Esteem',
        text: 'Confidence and self-esteem are fundamental to our wellbeing and success in life. They affect how we interact with others, pursue our goals, and handle challenges. Solution Focused Hypnotherapy helps you develop a strong, positive sense of self.'
      },
      {
        title: 'The Solution Focused Approach',
        text: 'We work together to identify and overcome limiting beliefs, develop positive self-talk, and build your confidence in specific areas of your life. Through hypnosis, we reinforce these positive changes at a deeper level.'
      },
      {
        title: 'Your Confidence Building Journey',
        text: "Your journey begins with identifying areas where you'd like to build confidence and self-esteem. We then develop a personalized plan that combines solution-focused conversation with hypnosis to help you achieve your goals."
      }
    ]
  },
  'phobias-fears': {
    title: 'Phobias & Fears',
    description: 'Free yourself from specific phobias and fears through gentle hypnotherapy techniques that help your brain create new, calmer responses.',
    image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793974.jpg',
    benefits: [
      'Reduce or eliminate phobic responses',
      'Face feared situations with confidence',
      'Understand the root of your fears',
      'Create new neural pathways',
      'Expand your comfort zone'
    ],
    content: [
      {
        title: 'Understanding Phobias & Fears',
        text: 'Phobias and fears are natural protective mechanisms that can become overwhelming when they interfere with daily life. Solution Focused Hypnotherapy offers an effective approach to managing and overcoming these challenges.'
      },
      {
        title: 'The Solution Focused Approach',
        text: 'Rather than focusing on the fear itself, we work on building your capacity to handle feared situations calmly and confidently. Through hypnosis, we help your brain create new, positive associations with previously feared stimuli.'
      },
      {
        title: 'Your Journey to Freedom',
        text: 'We begin by understanding your specific phobia or fear and how it affects your life. Together, we develop a gentle, gradual approach to overcoming your fear while building your confidence and resilience.'
      }
    ]
  },
  'habits-addictions': {
    title: 'Habits & Addictions',
    description: 'Break free from unwanted habits and addictive behaviors with hypnotherapy approaches that address both conscious and subconscious patterns.',
    image: '/media/Hyponotherapy-related photos/pexels-yankrukov-5793696.jpg',
    benefits: [
      'Reduce cravings and compulsions',
      'Develop healthier alternatives',
      'Identify and address triggers',
      'Create sustainable behavior change',
      'Increase self-control and awareness'
    ],
    content: [
      {
        title: 'Understanding Habits & Addictions',
        text: 'Habits and addictions are patterns of behavior that can be challenging to change. Solution Focused Hypnotherapy helps you understand these patterns and develop effective strategies for creating lasting change.'
      },
      {
        title: 'The Solution Focused Approach',
        text: 'We focus on building your capacity to make positive choices and developing healthier alternatives to unwanted behaviors. Through hypnosis, we reinforce these positive changes at a subconscious level.'
      },
      {
        title: 'Your Journey to Change',
        text: 'Your journey begins with understanding your specific habit or addiction and how it affects your life. Together, we develop a personalized plan that combines solution-focused conversation with hypnosis to help you achieve your goals.'
      }
    ]
  },
  'sleep-issues': {
    title: 'Sleep Issues',
    description: 'Improve your sleep quality and overcome insomnia through hypnotherapy techniques that calm the mind and establish healthy sleep patterns.',
    image: '/media/Stress-related photos/nik-shuliahin-BuNWp1bL0nc-unsplash.jpg',
    benefits: [
      'Fall asleep more quickly',
      'Stay asleep throughout the night',
      'Wake feeling refreshed',
      'Reduce racing thoughts at bedtime',
      'Establish consistent sleep routines'
    ],
    content: [
      {
        title: 'Understanding Sleep Issues',
        text: 'Sleep issues can significantly impact your quality of life and overall wellbeing. Solution Focused Hypnotherapy offers an effective approach to improving sleep quality and establishing healthy sleep patterns.'
      },
      {
        title: 'The Solution Focused Approach',
        text: 'We work together to identify factors affecting your sleep and develop practical strategies for improving sleep quality. Through hypnosis, we help calm your mind and establish positive sleep associations.'
      },
      {
        title: 'Your Journey to Better Sleep',
        text: 'Your journey begins with understanding your specific sleep challenges and how they affect your life. Together, we develop a personalized plan that combines solution-focused conversation with hypnosis to help you achieve better sleep.'
      }
    ]
  }
};

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services[params.id as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Service Not Found | Positive Change Hypnotherapy',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | Positive Change Hypnotherapy`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Positive Change Hypnotherapy`,
      description: service.description,
      url: `https://positivechangehypnotherapy.co.uk/services/${params.id}`,
      type: 'website',
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 