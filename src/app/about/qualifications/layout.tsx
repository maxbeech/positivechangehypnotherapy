import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qualifications | Positive Change Hypnotherapy',
  description: 'Learn about Keira\'s professional qualifications, training, and expertise in Solution Focused Hypnotherapy.',
  openGraph: {
    title: 'Qualifications | Positive Change Hypnotherapy',
    description: 'Learn about Keira\'s professional qualifications, training, and expertise in Solution Focused Hypnotherapy.',
    url: 'https://positivechangehypnotherapy.co.uk/about/qualifications',
    type: 'website',
  },
};

export default function QualificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 