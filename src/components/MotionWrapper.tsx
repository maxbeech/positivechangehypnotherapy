'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

/**
 * A client component wrapper for Framer Motion components.
 * This component should be used in server components when motion effects are needed.
 */
export const MotionWrapper = ({ 
  children,
  ...props
}: MotionWrapperProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionWrapper; 