import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section id="instagram-section" className="py-6 md:py-8 bg-white border-t border-warm-ivory scroll-mt-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
            <Instagram size={24} />
          </div>
          
          <span className="font-display text-[10px] tracking-[0.25em] uppercase text-luxury-gold font-bold block">
            Instagram Section
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl text-editorial-dark tracking-tight">
            See what Aadrit is doing.
          </h2>
          
          <div className="w-10 h-[1px] bg-luxury-gold/40" />
          
          <p className="max-w-md text-sm md:text-base text-editorial-gray/80 leading-relaxed font-light">
            More expressions, performances, behind-the-scenes moments, and everyday adventures.
          </p>

          <div className="space-y-4 pt-2">
            <div className="text-lg md:text-xl text-editorial-dark font-display font-bold tracking-wider">
              @aadritmangla
            </div>

            <motion.a
              href="https://instagram.com/aadritmangla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-editorial-dark text-warm-beige hover:bg-luxury-gold font-display text-xs uppercase tracking-widest font-semibold py-3 px-8 transition-all duration-300 shadow-lg border border-editorial-dark hover:border-luxury-gold"
            >
              <Instagram size={14} />
              Discover more, Aadrit.
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
