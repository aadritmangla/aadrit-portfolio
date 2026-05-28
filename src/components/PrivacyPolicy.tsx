import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { modelProfile } from '../data';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-editorial-dark/95 backdrop-blur-md flex items-start justify-center overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-full max-w-3xl mx-4 my-12 md:my-20 bg-warm-beige dark:bg-editorial-dark rounded-2xl shadow-2xl border border-luxury-gold/20"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-editorial-dark/10 dark:bg-warm-beige/10 hover:bg-luxury-gold/20 transition-colors duration-200 group z-10"
              aria-label="Close Privacy Policy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-editorial-dark dark:text-warm-beige group-hover:text-luxury-gold transition-colors">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Content */}
            <div className="px-8 md:px-14 py-12 md:py-16 text-editorial-dark dark:text-warm-beige">
              {/* Header */}
              <div className="mb-12 border-b border-luxury-gold/20 pb-8">
                <span className="font-display text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-3 block">
                  Legal
                </span>
                <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">
                  Privacy Policy
                </h1>
                <p className="font-display text-[11px] uppercase tracking-[0.3em] text-editorial-dark/50 dark:text-warm-beige/50">
                  Last Updated — May 2026
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-10 text-sm leading-relaxed font-sans text-editorial-dark/80 dark:text-warm-beige/80">

                {/* Introduction */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">1. Introduction</h2>
                  <p>
                    Welcome to the official portfolio website of <strong>{modelProfile.name}</strong> ("we," "us," or "our"). 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                    this website. {modelProfile.name}'s online presence and all related communications are managed by his 
                    parents/legal guardians. We are committed to protecting the privacy and safety of all visitors, 
                    especially children.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">2. Information We Collect</h2>
                  <p className="mb-3">We may collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      <strong>Contact Information:</strong> When you use our booking/contact form, we collect your name, 
                      email address, phone number, and message content to respond to your inquiry.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> We may automatically collect non-personal information such as browser type, 
                      operating system, referring URLs, pages visited, and time spent on the site through standard analytics.
                    </li>
                    <li>
                      <strong>Cookies & Local Storage:</strong> We use minimal cookies and local storage (e.g., to remember 
                      your dark mode preference). No third-party tracking cookies are used.
                    </li>
                  </ul>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>To respond to booking inquiries and collaboration requests</li>
                    <li>To improve and maintain the website experience</li>
                    <li>To communicate with casting directors, brands, and agencies regarding professional opportunities</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">4. Children's Privacy</h2>
                  <p>
                    This website is a professional portfolio managed entirely by {modelProfile.name}'s parents/legal guardians. 
                    We do not knowingly collect personal information from children under 13 who visit this website. 
                    All content related to {modelProfile.name} is published and managed with full parental consent. 
                    If you are a parent or guardian and believe your child has provided personal information through our 
                    contact form without your consent, please contact us immediately at{' '}
                    <a href={`mailto:${modelProfile.email}`} className="text-luxury-gold hover:underline">
                      {modelProfile.email}
                    </a>{' '}
                    so we can take appropriate action.
                  </p>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">5. Data Sharing & Disclosure</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                    <li>With your explicit consent</li>
                    <li>To comply with a legal obligation, court order, or government request</li>
                    <li>To protect the rights, property, or safety of {modelProfile.name} and his family</li>
                    <li>With trusted service providers who assist in website operations (e.g., form submission services), 
                        bound by confidentiality agreements</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">6. Data Security</h2>
                  <p>
                    We implement reasonable administrative, technical, and physical safeguards to protect your personal 
                    information. However, no method of transmission over the Internet or electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your information, we cannot guarantee 
                    its absolute security.
                  </p>
                </section>

                {/* Third Party Links */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">7. Third-Party Links</h2>
                  <p>
                    This website may contain links to external sites, including social media profiles (Instagram). 
                    We are not responsible for the privacy practices of these external sites. We encourage you to read the 
                    privacy policies of any third-party sites you visit.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">8. Your Rights</h2>
                  <p className="mb-3">Depending on your location, you may have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your personal data</li>
                    <li>Object to or restrict the processing of your personal data</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, please contact us at{' '}
                    <a href={`mailto:${modelProfile.email}`} className="text-luxury-gold hover:underline">
                      {modelProfile.email}
                    </a>.
                  </p>
                </section>

                {/* Changes */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">9. Changes to This Policy</h2>
                  <p>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on 
                    this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="font-serif text-lg mb-3 text-editorial-dark dark:text-warm-beige">10. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-4 p-5 rounded-xl bg-editorial-dark/5 dark:bg-warm-beige/5 border border-luxury-gold/10 space-y-2">
                    <p><strong>Managed by:</strong> {modelProfile.parentManager}</p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${modelProfile.email}`} className="text-luxury-gold hover:underline">
                        {modelProfile.email}
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href={`tel:${modelProfile.phone}`} className="text-luxury-gold hover:underline">
                        {modelProfile.phone}
                      </a>
                    </p>
                    <p><strong>Location:</strong> {modelProfile.location}</p>
                  </div>
                </section>

              </div>

              {/* Footer divider */}
              <div className="mt-12 pt-8 border-t border-luxury-gold/20 text-center">
                <p className="font-display text-[10px] uppercase tracking-[0.4em] text-editorial-dark/40 dark:text-warm-beige/40">
                  © {new Date().getFullYear()} {modelProfile.name.toUpperCase()} • ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
