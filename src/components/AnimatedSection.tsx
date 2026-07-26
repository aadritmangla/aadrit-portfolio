import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'scaleIn' | 'blurReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  once?: boolean;
  amount?: number;
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  blurReveal: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const config = {
    ...variants[variant],
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={config}
      className={className}
    >
      {children}
    </motion.div>
  );
}