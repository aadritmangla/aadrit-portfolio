import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { modelProfile } from '../data';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling on mount during brand prelude
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore normal scrolling after premium entry completes
      document.body.style.overflow = '';
    }, 1000); // 1.0s brand introduction

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-editorial-dark flex items-center justify-center flex-col gap-4"
        >
            <div className="relative flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-2 border-luxury-gold shadow-2xl">
                <img 
                  src={modelProfile.heroImage} 
                  alt="Aadrit Mangla" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <h1 className="font-serif text-2xl md:text-4xl tracking-tight text-warm-beige text-center">
                Aadrit Mangla
              </h1>
              <div className="flex items-center gap-3 mt-4 text-[10px] md:text-sm tracking-[0.2em] uppercase text-luxury-gold font-display text-center">
                <span>Child Commercial Model</span>
                <span className="w-1 h-1 rounded-full bg-luxury-gold" />
                <span>New Delhi</span>
              </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
