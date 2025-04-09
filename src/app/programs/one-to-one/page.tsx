import React from 'react';
import { Metadata } from 'next';
import AnimatedOneToOneProgram from '@/components/AnimatedOneToOneProgram';

export const metadata: Metadata = {
  title: '1-to-1 Positive Change Program | Positive Change Hypnotherapy',
  description: "Experience personalized Solution Focused Hypnotherapy tailored to your specific needs with our 1-to-1 Positive Change Program.",
  openGraph: {
    title: '1-to-1 Positive Change Program | Positive Change Hypnotherapy',
    description: "Experience personalized Solution Focused Hypnotherapy tailored to your specific needs with our 1-to-1 Positive Change Program.",
    url: 'https://positivechangehypnotherapy.co.uk/programs/one-to-one',
    type: 'website',
  },
};

const OneToOneProgram = () => {
  return (
    <main className="pt-24 pb-16">
      <AnimatedOneToOneProgram />
    </main>
  );
};

export default OneToOneProgram; 