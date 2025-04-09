import { Metadata } from 'next';
import { AnimatedAbout } from '@/components/ui/animations/AnimatedAbout';

export const metadata: Metadata = {
  title: 'About Keira | Solution Focused Hypnotherapist',
  description: 'Learn about Keira, a fully qualified Solution Focused Hypnotherapist based in Leicester. Discover her journey, philosophy, and approach to helping clients achieve positive change.',
  keywords: 'hypnotherapist, solution focused therapy, Leicester, anxiety treatment, stress management, positive change',
};

export default function AboutPage() {
  return <AnimatedAbout />;
} 