import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Sessions | Positive Change Hypnotherapy',
  description: 'Join our cost-effective group hypnotherapy sessions designed to address common challenges in a supportive community environment.',
};

export default function GroupSessionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 