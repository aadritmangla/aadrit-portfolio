import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SocialNotificationPopup from './components/SocialNotificationPopup';
import ActivityNotifications from './components/ActivityNotifications';
import Preloader from './components/Preloader';
import CinematicCursor from './components/CinematicCursor';
import FloatingBookingButton from './components/FloatingBookingButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import CastingCard from './components/CastingCard';
import InstagramSection from './components/InstagramSection';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <>
      <div className="print:hidden relative min-h-screen bg-warm-beige text-editorial-dark font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-white transition-colors duration-500">
        <Preloader />
        <CinematicCursor />

        {/* Premium Top Navigation */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Structural Layout blocks */}
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key="main-content"
              initial={{ opacity: 0, scale: 0.97, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.97, filter: 'blur(12px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
              <About />
              <Portfolio />
              <InstagramSection />
              <ContactSection />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Quiet Social Engagement Signals */}
        <SocialNotificationPopup />
        <ActivityNotifications />

        {/* Editorial Footer */}
        <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />

        {/* Floating Actions */}
        <FloatingBookingButton />

        {/* Privacy Policy Modal */}
        <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </div>
      <CastingCard />
    </>
  );
}
