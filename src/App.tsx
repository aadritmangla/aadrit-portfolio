import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SocialNotificationPopup from './components/SocialNotificationPopup';
import ActivityNotifications from './components/ActivityNotifications';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import FloatingBookingButton from './components/FloatingBookingButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import CastingCard from './components/CastingCard';

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
        <CustomCursor />
        
        {/* Premium Top Navigation */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Structural Layout blocks */}
        <main className="relative">
          <Hero />
          <About />
          <Portfolio />
          <Stats />
          <ContactSection />
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
