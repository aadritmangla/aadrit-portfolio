import { motion } from 'motion/react';
import { ArrowDown, CheckCircle, MapPin } from 'lucide-react';
import { modelProfile } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-warm-beige pt-20 md:pt-0 overflow-hidden"
    >
      {/* Background soft geometric detail */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-warm-ivory hidden lg:block -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Text/Details Side */}
          <div className="lg:col-span-5 z-10 space-y-4 md:space-y-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Top Agency Tag/Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-warm-ivory/60 border border-luxury-gold/10 py-1 px-2.5 w-fit text-[8px] text-editorial-gray tracking-[0.12em] font-display font-medium"
            >
              <CheckCircle size={11} className="text-luxury-gold" />
              <span>COMMERCIAL MODEL • NEW DELHI</span>
            </motion.div>

            {/* Main Name & Subtitle */}
            <div className="space-y-2 md:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-editorial-dark tracking-tighter leading-[0.95]"
              >
                {modelProfile.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-luxury-gold font-display font-bold"
              >
                <span>{modelProfile.profession}</span>
                <span className="w-1 h-1 rounded-full bg-luxury-gold/30" />
                <span>{modelProfile.location}</span>
              </motion.div>
            </div>

            {/* Quick Specs Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 border-y border-editorial-dark/5 py-3 my-0.5"
            >
              <div>
                <span className="block text-[7px] uppercase tracking-[0.2em] text-editorial-gray/40 font-display font-bold">
                  Age
                </span>
                <span className="font-serif text-lg md:text-xl text-editorial-dark">{modelProfile.age} Yrs</span>
              </div>
              <div>
                <span className="block text-[7px] uppercase tracking-[0.2em] text-editorial-gray/40 font-display font-bold">
                  Height
                </span>
                <span className="font-serif text-lg md:text-xl text-editorial-dark">{modelProfile.height}</span>
              </div>
              <div>
                <span className="block text-[7px] uppercase tracking-[0.2em] text-editorial-gray/40 font-display font-bold">
                  Status
                </span>
                <span className="font-serif text-sm text-editorial-dark mt-1 block leading-tight font-medium">
                  {modelProfile.status}
                </span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-2.5 pt-1"
            >
              <button
                id="hero-cta-book"
                onClick={() => handleScrollTo('#booking')}
                className="bg-editorial-dark text-warm-beige hover:bg-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.15em] font-display font-bold py-3 px-6 transition-all duration-500 shadow-sm border border-editorial-dark hover:border-luxury-gold text-center active:scale-95"
              >
                Book Aadrit
              </button>
              <button
                id="hero-cta-portfolio"
                onClick={() => handleScrollTo('#portfolio')}
                className="border border-editorial-dark/10 text-editorial-dark hover:text-luxury-gold hover:border-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.15em] font-display font-bold py-3 px-6 transition-all duration-500 text-center bg-transparent active:scale-95"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] aspect-[3/4]"
            >
              {/* Decorative Frame outline */}
              <div className="absolute -inset-3 border border-black/20 transform translate-x-1 translate-y-1 pointer-events-none" />
              
              {/* Premium Image Container */}
              <div className="w-full h-full overflow-hidden shadow-2xl border border-black bg-black relative group animate-shimmer">
                <img
                  src={modelProfile.heroImage}
                  alt="Aadrit Mangla - High-End Casting Headshot Portrait"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                
                {/* Photo Tag */}
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-editorial-dark text-[7px] tracking-[0.25em] uppercase font-display font-bold py-1 px-2 border border-warm-ivory">
                  Main Portfolio
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-10 left-12 items-center gap-3">
          <button
            onClick={() => handleScrollTo('#about')}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-editorial-gray/60 hover:text-luxury-gold transition-colors duration-300"
          >
            <span>Explore Portfolio</span>
            <span className="w-8 h-[1px] bg-editorial-dark/20 group-hover:bg-luxury-gold transition-colors block" />
            <ArrowDown size={12} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
