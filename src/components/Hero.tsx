import { motion, useInView } from 'framer-motion';
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
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-warm-beige pt-20 md:pt-0 overflow-hidden scroll-mt-12"
    >
      {/* Background soft geometric detail */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-warm-ivory hidden lg:block -z-1" />

      {/* Cinematic video background layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      {/* Film grain */}
      <div className="cinematic-grain absolute inset-0" />

      {/* Ambient animated gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(168,152,133,0.25), transparent 60%)',
            'radial-gradient(circle at 80% 70%, rgba(168,152,133,0.25), transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(168,152,133,0.25), transparent 60%)',
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-6 md:py-8 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Text/Details Side */}
          <div className="lg:col-span-5 z-10 space-y-3.5 md:space-y-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Top Agency Tag/Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-warm-ivory/60 border border-luxury-gold/10 py-1 px-2.5 w-fit text-[8px] text-editorial-gray tracking-[0.12em] font-display font-medium"
            >
              <CheckCircle size={11} className="text-luxury-gold" />
              <span>EXPRESSIVE CHILD CREATOR • NEW DELHI</span>
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
                className="space-y-1 md:space-y-1.5"
              >
                <div className="text-[11px] md:text-sm uppercase tracking-[0.25em] text-editorial-dark font-display font-extrabold">
                  Expressive Child Creator
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-luxury-gold font-display font-medium">
                  Dance • Expressions • Lifestyle
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-[14px] md:text-[17px] font-sans text-editorial-gray/90 leading-relaxed tracking-normal max-w-md pt-1 font-medium"
              >
                A smile people remember.
                <br />
                An energy cameras love.
              </motion.p>
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
                <span className="font-serif text-lg md:text-xl text-editorial-dark">{modelProfile.age}</span>
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
                id="hero-cta-portfolio"
                onClick={() => handleScrollTo('#portfolio')}
                className="bg-editorial-dark text-warm-beige hover:bg-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.15em] font-display font-bold py-3 px-6 transition-all duration-500 shadow-sm border border-editorial-dark hover:border-luxury-gold text-center active:scale-95 cursor-pointer"
              >
                View Portfolio
              </button>
              <button
                id="hero-cta-reels"
                onClick={() => handleScrollTo('#reels-section')}
                className="border border-editorial-dark/15 text-editorial-dark hover:text-luxury-gold hover:border-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.15em] font-display font-bold py-3 px-6 transition-all duration-500 text-center bg-white/40 active:scale-95 cursor-pointer font-extrabold"
              >
                Watch Reels
              </button>
            </motion.div>

            {/* Trust Badge / Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-2 flex items-center gap-2"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3 h-3 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] text-editorial-gray/80 font-medium">Top Rated Child Talent • New Delhi</span>
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
              <div className="w-full h-full overflow-hidden shadow-2xl border border-black bg-black relative group">
                <img
                  src={modelProfile.heroImage}
                  alt="Aadrit Mangla - High-End Casting Headshot Portrait"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-warm-beige');
                  }}
                />
                
                {/* Photo Tag */}
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-editorial-dark text-[7px] tracking-[0.25em] uppercase font-display font-bold py-1 px-2 border border-warm-ivory">
                  HeadShot
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