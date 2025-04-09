import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solution Focused Hypnotherapy | Positive Change Hypnotherapy',
  description: 'Learn about Solution Focused Hypnotherapy, a modern, evidence-based approach that combines neuroscience with clinical hypnosis to create lasting positive change.',
  openGraph: {
    title: 'Solution Focused Hypnotherapy | Positive Change Hypnotherapy',
    description: 'Learn about Solution Focused Hypnotherapy, a modern, evidence-based approach that combines neuroscience with clinical hypnosis to create lasting positive change.',
    url: 'https://positivechangehypnotherapy.co.uk/about/solution-focused-hypnotherapy',
    type: 'website',
  },
};

export default function SolutionFocusedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 