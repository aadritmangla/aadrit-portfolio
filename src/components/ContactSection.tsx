import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import ReelStack from './ReelStack';
import { modelProfile } from '../data';

export default function ContactSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-warm-beige border-t border-warm-ivory scroll-mt-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 flex flex-col items-center">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-bold block">
              Direct Access
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-editorial-dark tracking-tight">
              Let's Connect
            </h2>
            <div className="w-12 h-[1px] bg-luxury-gold my-4" />
            <p className="text-base text-editorial-gray/80 leading-relaxed font-light max-w-md">
              For casting calls, campaigns, collaborations, and brand inquiries, use the direct lines below. We respond swiftly to professional requests.
            </p>
          </div>

          {/* High-Conversion Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              { icon: Instagram, label: 'Instagram', val: modelProfile.instagram, href: `https://instagram.com/${modelProfile.instagram.replace('@','')}` },
              { icon: Mail, label: 'Email', val: modelProfile.email, href: `mailto:${modelProfile.email}` },
              { icon: Phone, label: 'WhatsApp', val: modelProfile.phone, href: `https://wa.me/${modelProfile.phone.replace(/\s+/g, '')}` },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-5 bg-white border border-warm-ivory hover:border-luxury-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-warm-beige group-hover:bg-luxury-gold/10 text-editorial-dark group-hover:text-luxury-gold transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-editorial-gray/50 font-display font-medium">{item.label}</span>
                    <span className="font-serif text-base text-editorial-dark group-hover:text-luxury-gold transition-colors">{item.val}</span>
                  </div>
                </div>
                <div className="text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send size={16} className="rotate-45" />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-10 flex flex-col items-center">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-bold block mb-6">
              Performance Reel
            </span>
            <div className="max-w-md w-full">
              <ReelStack />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
