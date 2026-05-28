import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingBookingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:bottom-6 md:right-6 z-[9999] print:hidden"
    >
      <motion.a
        href="https://wa.me/919971271291"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-3 bg-editorial-dark text-warm-beige py-4 px-6 rounded-2xl md:rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-luxury-gold hover:text-white transition-colors duration-300 group md:ring-4 md:ring-editorial-dark/5"
      >
        <div className="relative">
          <MessageCircle size={20} className="text-luxury-gold group-hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-editorial-dark animate-pulse" />
        </div>
        <span className="text-[11px] md:text-xs font-display font-bold uppercase tracking-[0.2em] whitespace-nowrap">
          Connect on WhatsApp
        </span>
      </motion.a>
    </motion.div>
  );
}
