import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anxiety & Depression Treatment | Solution Focused Hypnotherapy',
  description: 'Expert hypnotherapy treatment for anxiety and depression. Discover effective techniques to manage symptoms and improve your mental wellbeing.',
  keywords: 'anxiety treatment, depression therapy, hypnotherapy for anxiety, depression help, mental health treatment',
};

export default function AnxietyDepressionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 