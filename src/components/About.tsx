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
            <h2 className="font-serif text-3xl md:text-4xl text-editorial-dark tracking-tight leading-tight">
              Meet Aadrit
            </h2>
            <div className="w-10 h-[1px] bg-luxury-gold/50" />
            
            <p className="text-[13px] font-sans text-editorial-gray/85 leading-relaxed max-w-lg">
              {modelProfile.detailedBio}
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-warm-beige py-1 px-2 border border-warm-ivory text-[9px] tracking-wider uppercase text-editorial-gray/80 font-display font-medium">
                <ShieldCheck size={11} className="text-luxury-gold/80" />
                Authentic Energy
              </span>
              <span className="inline-flex items-center gap-1.5 bg-warm-beige py-1 px-2 border border-warm-ivory text-[9px] tracking-wider uppercase text-editorial-gray/80 font-display font-medium">
                <Sparkles size={11} className="text-luxury-gold/80" />
                Creative Expression
              </span>
            </div>
          </motion.div>

          {/* Right: Personal Attributes Grid & Testimonial */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="font-display text-[9px] tracking-[0.2em] uppercase text-luxury-gold font-semibold block">
                Why Aadrit
              </span>
              <h3 className="font-serif text-lg md:text-xl text-editorial-dark tracking-tight">
                Why Brands Remember Aadrit
              </h3>
            </div>
            
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
                <div className="text-lg">😊</div>
                <h4 className="font-serif text-sm text-editorial-dark">Expressive</h4>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  Natural reactions that feel real.
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
                <div className="text-lg">🎬</div>
                <h4 className="font-serif text-sm text-editorial-dark">Camera Friendly</h4>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  Comfortable, confident, and easy to direct.
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
                <div className="text-lg">⚡</div>
                <h4 className="font-serif text-sm text-editorial-dark">Positive Energy</h4>
                <p className="text-[11px] text-editorial-gray/90 leading-relaxed">
                  The kind of presence people remember.
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
                Trusted By
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
