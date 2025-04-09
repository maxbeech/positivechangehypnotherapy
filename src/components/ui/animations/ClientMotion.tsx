'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ClientMotionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function ClientMotion({ children, ...props }: ClientMotionProps) {
  return <motion.div {...props}>{children}</motion.div>;
} 