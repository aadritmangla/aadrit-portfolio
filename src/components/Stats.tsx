import { useRef, useEffect } from 'react';
import { Ruler, Sparkles, MapPin, Eye, Calendar, Scissors, Award, Compass } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { modelStats, modelProfile } from '../data';

const AnimatedValue = ({ value }: { value: string | number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract number and string part (e.g. if there's any text, though stats are usually numbers here)
  const numValue = parseFloat(String(value));
  const isNumber = !isNaN(numValue) && String(value).trim() === String(numValue);

  if (!isNumber) return <span>{value}</span>;

  const spring = useSpring(0, { damping: 30, stiffness: 100 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(numValue);
    }
  }, [isInView, numValue, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export default function ReusableStats() {
  // Helper to resolve suitable icons for various physical parameters
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'age':
        return <Calendar size={18} className="text-luxury-gold" />;
      case 'height':
        return <Ruler size={18} className="text-luxury-gold" />;
      case 'shoes':
        return <Compass size={18} className="text-luxury-gold" />;
      case 'hair color':
        return <Sparkles size={18} className="text-luxury-gold" />;
      case 'eye color':
        return <Eye size={18} className="text-luxury-gold" />;
      case 'base location':
        return <MapPin size={18} className="text-luxury-gold" />;
      default:
        return <Scissors size={18} className="text-luxury-gold" />;
    }
  };

  const handlePrint = () => {
    // Add a small delay to ensure any active transitions or hover states are cleared
    setTimeout(() => {
      try {
        window.print();
      } catch (error) {
        console.error("Print failed:", error);
        // Fallback for some restricted environments
        alert("Please use Browser Menu > Print to save the card.");
      }
    }, 150);
  };

  return (
    <section id="stats" className="py-6 md:py-10 bg-warm-beige border-t border-warm-ivory scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-semibold block">
              Size details
            </span>
            <h2 className="font-serif text-xl md:text-2xl text-editorial-dark tracking-tight">
              Sizing & Fit
            </h2>
            <div className="w-10 h-[1px] bg-luxury-gold/40" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={handlePrint}
              id="print-card-btn"
              className="inline-flex items-center gap-2 border border-editorial-dark/10 hover:border-editorial-dark hover:text-luxury-gold font-display text-[10px] uppercase tracking-widest font-semibold py-1.5 px-3.5 transition-all duration-300 bg-white shadow-xs text-editorial-dark touch-manipulation min-h-[36px]"
            >
              <Award size={12} />
              Print cast guidelines
            </button>
          </motion.div>
        </div>

        {/* Casting Look Card - Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {modelStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-3 md:p-3.5 border border-warm-ivory shadow-[0_1px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-luxury-gold/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[9px] font-display uppercase tracking-[0.08em] text-editorial-gray/50 font-bold group-hover:text-editorial-gray transition-colors">
                  {stat.label}
                </span>
                <span className="opacity-30 group-hover:opacity-100 transition-all duration-300 scale-90 -rotate-3 group-hover:rotate-0">
                  {getIcon(stat.label)}
                </span>
              </div>
              
              <div className="space-y-0.5">
                <div className="font-serif text-lg sm:text-xl text-editorial-dark tracking-tight leading-none group-hover:text-luxury-gold transition-colors">
                  <AnimatedValue value={stat.value} />
                </div>
                {stat.unit && (
                  <span className="text-[8px] uppercase tracking-wider text-editorial-gray/40 block font-display font-medium">
                    {stat.unit}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom card note */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 p-3 bg-warm-ivory/40 border border-warm-ivory/30 text-center max-w-sm mx-auto"
        >
          <p className="text-[10px] md:text-xs text-editorial-gray/70 leading-relaxed font-light">
            Custom size inquiries or apparel needs? <span className="font-medium text-luxury-gold">Let us know.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
