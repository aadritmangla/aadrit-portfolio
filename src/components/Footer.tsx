import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { modelProfile } from '../data';

interface FooterProps {
  onPrivacyClick?: () => void;
}

export default function ReusableFooter({ onPrivacyClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="site-footer" className="bg-editorial-dark text-warm-beige pb-32 md:pb-32 pt-12 md:pt-20 border-t border-editorial-dark relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-warm-beige/10 pb-12">
          
          {/* Logo & Socials */}
          <div className="flex flex-col text-center md:text-left space-y-5">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-warm-beige">
                {modelProfile.name}
              </h3>
              <span className="font-display text-[9px] tracking-[0.3em] uppercase text-luxury-gold mt-2 block opacity-80">
                Child Commercial Model • New Delhi
              </span>
            </div>
            
            {/* Socials - Unified Luxury Palette */}
            <div className="flex justify-center md:justify-start items-center gap-5">
              {[
                { icon: Instagram, href: "https://instagram.com/aadritmangla", label: "Instagram" },
                { icon: Mail, href: `mailto:${modelProfile.email}`, label: "Email" },
                { icon: Phone, href: `https://wa.me/${modelProfile.phone.replace(/\s+/g, '')}`, label: "WhatsApp" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-beige/60 hover:text-luxury-gold transition-all duration-300 hover:scale-110"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase font-display tracking-[0.2em] text-warm-beige/60 font-medium">
            {['about', 'portfolio', 'stats', 'booking'].map((id) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  onClick={(e) => handleScrollToSection(e, `#${id}`)} 
                  className="hover:text-luxury-gold transition-colors duration-300 uppercase"
                >
                  {id === 'stats' ? 'Measurements' : id}
                </a>
              </li>
            ))}
          </ul>

          {/* Enhanced Scroll to Top */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="group flex items-center gap-2 font-display text-[10px] uppercase tracking-widest text-luxury-gold transition-all duration-300"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Back to top</span>
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-[9px] tracking-widest text-warm-beige/40 font-display uppercase">
          <div className="text-center md:text-left">
            <p>© {currentYear} {modelProfile.name}. ALL RIGHTS RESERVED.</p>
          </div>
          
          <div className="flex items-center gap-4 text-center md:text-right">
            <span className="flex items-center gap-1">
              Made with <span className="text-luxury-gold">❤️</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-beige/20" />
            <button
              onClick={onPrivacyClick}
              className="hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
