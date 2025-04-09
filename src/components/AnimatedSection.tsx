'use client';

import { MotionWrapper } from '@/components/MotionWrapper';
import { fadeIn } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  return (
    <MotionWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      {children}
    </MotionWrapper>
  );
};

export default AnimatedSection; 