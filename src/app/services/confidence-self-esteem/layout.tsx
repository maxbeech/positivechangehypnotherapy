import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidence & Self-Esteem | Positive Change Hypnotherapy',
  description: "Build lasting confidence and self-esteem with Solution Focused Hypnotherapy. Our approach helps you overcome negative self-perception and develop a stronger, more positive sense of self.",
  openGraph: {
    title: 'Confidence & Self-Esteem | Positive Change Hypnotherapy',
    description: "Build lasting confidence and self-esteem with Solution Focused Hypnotherapy. Our approach helps you overcome negative self-perception and develop a stronger, more positive sense of self.",
    url: 'https://positivechangehypnotherapy.co.uk/services/confidence-self-esteem',
    type: 'website',
  },
};

export default function ConfidenceSelfEsteemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 