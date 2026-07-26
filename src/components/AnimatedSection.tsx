import { motion, useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type AnimationVariant = 'fade' | 'slide' | 'scale' | 'blur';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  once?: boolean;
  amount?: number;
}

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slide: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
  }
};

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fade',
  once = true,
  amount = 0.2
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}