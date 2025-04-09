import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Positive Change Hypnotherapy',
  description: "Find answers to common questions about hypnotherapy, our sessions, and how Solution Focused Hypnotherapy can help you achieve positive change.",
  openGraph: {
    title: 'Frequently Asked Questions | Positive Change Hypnotherapy',
    description: "Find answers to common questions about hypnotherapy, our sessions, and how Solution Focused Hypnotherapy can help you achieve positive change.",
    url: 'https://positivechangehypnotherapy.co.uk/faq',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 