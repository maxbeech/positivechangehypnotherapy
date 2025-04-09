import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stress Management | Positive Change Hypnotherapy',
  description: "Learn effective stress management techniques with Solution Focused Hypnotherapy. Our proven approach helps you reduce chronic stress and develop healthier coping mechanisms for a more balanced life.",
  openGraph: {
    title: 'Stress Management | Positive Change Hypnotherapy',
    description: "Learn effective stress management techniques with Solution Focused Hypnotherapy. Our proven approach helps you reduce chronic stress and develop healthier coping mechanisms for a more balanced life.",
    url: 'https://positivechangehypnotherapy.co.uk/services/stress-management',
    type: 'website',
  },
};

export default function StressManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 