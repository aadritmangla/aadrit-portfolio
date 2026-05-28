import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Video, Award } from 'lucide-react';
import { modelProfile, testimonialNote } from '../data';

export default function About() {
  const handleScrollToBooking = () => {
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-6 md:py-10 bg-white border-t border-warm-ivory scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Section Header & Editorial Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-semibold block">
              Profile
            </span>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-editorial-dark tracking-tight leading-tight">
              Friendly, Creative, and Focused
            </h2>
            <div className="w-10 h-[1px] bg-luxury-gold/50" />
            
            <p className="text-[13px] font-sans text-editorial-gray/85 leading-relaxed max-w-lg">
              {modelProfile.detailedBio}
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-warm-beige py-1 px-2 border border-warm-ivory text-[9px] tracking-wider uppercase text-editorial-gray/80 font-display font-medium">
                <ShieldCheck size={11} className="text-luxury-gold/80" />
                Highly Professional
              </span>
              <span className="inline-flex items-center gap-1.5 bg-warm-beige py-1 px-2 border border-warm-ivory text-[9px] tracking-wider uppercase text-editorial-gray/80 font-display font-medium">
                <Sparkles size={11} className="text-luxury-gold/80" />
                Natural Presence
              </span>
            </div>
          </motion.div>

          {/* Right: Personal Attributes Grid & Testimonial */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Elegant 3-column Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              
              {/* Highlight 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-3.5 bg-warm-beige border border-warm-ivory space-y-2 group hover:bg-white transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-none bg-white flex items-center justify-center border border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors">
                  <Sparkles size={14} className="text-luxury-gold" />
                </div>
                <h3 className="font-serif text-sm text-editorial-dark">Expressive Range</h3>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  Subtle micro-movements that convey authentic emotion on camera.
                </p>
              </motion.div>

              {/* Highlight 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-3.5 bg-warm-beige border border-warm-ivory space-y-2 group hover:bg-white transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-none bg-white flex items-center justify-center border border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors">
                  <Video size={14} className="text-luxury-gold" />
                </div>
                <h3 className="font-serif text-sm text-editorial-dark">Camera Comfort</h3>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  Confidence and high focus in active production environments.
                </p>
              </motion.div>

              {/* Highlight 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-3.5 bg-warm-beige border border-warm-ivory space-y-2 group hover:bg-white transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-none bg-white flex items-center justify-center border border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors">
                  <Award size={14} className="text-luxury-gold" />
                </div>
                <h3 className="font-serif text-sm text-editorial-dark">Quick Learner</h3>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  Collaborative and mature talent who takes creative direction well.
                </p>
              </motion.div>

            </div>

            {/* Testimonial / Casting Director Note */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-2 border-luxury-gold/30 pl-4 py-0.5 space-y-1.5"
            >
              <span className="font-display text-[9px] uppercase tracking-widest text-luxury-gold font-bold block">
                Director's Note
              </span>
              <blockquote className="font-serif italic text-[13px] md:text-sm text-editorial-dark leading-relaxed">
                "{testimonialNote.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                <cite className="font-display text-[11px] not-italic font-bold text-editorial-dark">
                  {testimonialNote.author}
                </cite>
                <div className="w-3 h-[1px] bg-luxury-gold/30" />
                <span className="font-display text-[9px] uppercase tracking-wider text-editorial-gray/60">
                  {testimonialNote.choreographer}
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
