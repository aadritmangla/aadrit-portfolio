import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ReelStack from './ReelStack';
import { modelProfile } from '../data';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="py-6 md:py-8 bg-warm-beige border-t border-warm-ivory scroll-mt-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-4 flex flex-col items-center">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-bold block">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-editorial-dark tracking-tight">
              Have A Project In Mind?
            </h2>
            <div className="w-12 h-[1px] bg-luxury-gold my-4" />
            <p className="text-base text-editorial-gray/80 leading-relaxed font-light max-w-lg">
              For campaigns, content, collaborations, and creative opportunities.
            </p>
          </div>

          {/* High-Conversion Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
            {[
              { icon: Instagram, label: 'Instagram', val: modelProfile.instagram, href: `https://instagram.com/${modelProfile.instagram.replace('@','')}` },
              { icon: Mail, label: 'Email', val: modelProfile.email, href: `mailto:${modelProfile.email}` },
              { icon: Phone, label: 'WhatsApp', val: modelProfile.phone, href: `https://wa.me/${modelProfile.phone.replace(/\D/g, '')}` },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white border border-warm-ivory hover:border-luxury-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md"
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

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto text-left bg-white border border-warm-ivory p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-editorial-gray/70 font-display font-bold mb-1">
                  Name <span className="text-luxury-gold">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-warm-ivory bg-warm-beige/40 px-3 py-2 text-sm focus:border-luxury-gold focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-editorial-gray/70 font-display font-bold mb-1">
                  Email <span className="text-luxury-gold">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-warm-ivory bg-warm-beige/40 px-3 py-2 text-sm focus:border-luxury-gold focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-editorial-gray/70 font-display font-bold mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-warm-ivory bg-warm-beige/40 px-3 py-2 text-sm focus:border-luxury-gold focus:outline-none transition-colors"
                  placeholder="+91 99999 99999"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-editorial-gray/70 font-display font-bold mb-1">
                  Project Type
                </label>
                <input
                  type="text"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full border border-warm-ivory bg-warm-beige/40 px-3 py-2 text-sm focus:border-luxury-gold focus:outline-none transition-colors"
                  placeholder="Campaign / TVC / Editorial"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-editorial-gray/70 font-display font-bold mb-1">
                Message <span className="text-luxury-gold">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-warm-ivory bg-warm-beige/40 px-3 py-2 text-sm focus:border-luxury-gold focus:outline-none transition-colors resize-y"
                placeholder="Tell us about your project..."
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 text-xs">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-700 text-xs">
                <CheckCircle2 size={16} />
                <span>Message sent successfully. We will get back to you soon.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 bg-editorial-dark text-warm-beige hover:bg-luxury-gold disabled:opacity-70 text-[10px] md:text-xs uppercase tracking-[0.15em] font-display font-bold py-3 px-6 transition-all duration-500 border border-editorial-dark hover:border-luxury-gold w-full sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Inquiry
                </>
              )}
            </button>
          </motion.form>

          <div id="reels-section" className="pt-10 flex flex-col items-center scroll-mt-20">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-bold block">
              Video Section
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-editorial-dark tracking-tight mt-1 mb-2">
              Expressions In Motion
            </h3>
            <p className="text-xs text-editorial-gray/80 max-w-lg mb-8 font-light leading-relaxed">
              Watch Aadrit's dance performances, creative content, and everyday moments that showcase the personality behind the smile.
            </p>
            <div className="max-w-md w-full">
              <ReelStack />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
