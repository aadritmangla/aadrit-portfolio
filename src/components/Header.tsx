import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Sun, Moon, Instagram, Mail, Phone } from 'lucide-react';

interface HeaderProps {
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

function Header({ isDarkMode = false, toggleDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Aadrit Mangla - Child Model Profile",
      text: "Explore 8-year-old Aadrit's portfolio of children's clothing shoots and apparel fits.",
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (clipboardErr) {
        console.error("Failed to copy", clipboardErr);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['home', 'about', 'portfolio', 'stats', 'booking'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Profile', href: '#about', id: 'about' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Measurements', href: '#stats', id: 'stats' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-beige/90 backdrop-blur-md border-b border-warm-ivory py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Branding Title */}
        <a
          href="#home"
          id="branding-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex flex-col text-left group"
        >
          <span className="font-serif text-lg md:text-xl tracking-[0.25em] uppercase text-editorial-dark font-medium group-hover:text-luxury-gold transition-colors duration-300">
            Aadrit Mangla
          </span>
          <span className="font-display text-[9px] tracking-[0.4em] uppercase text-editorial-gray/75 mt-0.5">
            New Delhi, India
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center">
          <ul className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-display font-medium text-editorial-gray mr-10">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`hover:text-luxury-gold transition-colors duration-300 relative py-1 ${
                    activeSection === item.id
                      ? 'text-luxury-gold font-semibold'
                      : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold" 
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 border-l border-editorial-dark/10 pl-8 ml-2 h-8">
            <div className="flex items-center gap-4">
              {toggleDarkMode && (
                <button
                  onClick={toggleDarkMode}
                  className="text-editorial-gray/80 hover:text-luxury-gold p-1 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              )}
              <a
                href="https://instagram.com/aadritmangla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-editorial-gray/80 hover:text-luxury-gold transition-colors duration-200"
                title="Instagram Profile"
              >
                <Instagram size={15} />
              </a>
              <a
                href="mailto:aadritmangla@gmail.com"
                className="text-editorial-gray/80 hover:text-luxury-gold transition-colors duration-200"
                title="Send Email"
              >
                <Mail size={15} />
              </a>
            </div>

            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#booking');
              }}
              className="inline-flex items-center gap-2 bg-editorial-dark text-warm-beige hover:bg-luxury-gold text-[10px] uppercase tracking-widest font-display font-medium py-2.5 px-6 transition-all duration-300 rounded-full"
            >
              Book Aadrit
              <ArrowRight size={12} />
            </a>
          </div>
        </nav>

        {/* Mobile Actions Container */}
        <div className="flex items-center gap-3 md:hidden z-50">
          {toggleDarkMode && (
            <button
              onClick={toggleDarkMode}
              className="text-editorial-dark hover:text-luxury-gold p-2 cursor-pointer transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          )}
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-editorial-dark hover:text-luxury-gold transition-colors p-1 focus:outline-none relative animate-fade-in"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-editorial-dark/10 backdrop-blur-xs z-30 md:hidden animate-fade-in"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 w-[260px] md:hidden bg-warm-beige z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-warm-ivory shadow-2xl`}
      >
        <div className="flex flex-col h-full p-6 space-y-6 pt-24">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block text-sm tracking-wide uppercase py-2 border-b border-warm-ivory/50 font-display font-medium ${
                    activeSection === item.id
                      ? 'text-luxury-gold'
                      : 'text-editorial-dark'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <a
              href="#booking"
              id="book-btn-mobile"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#booking');
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-editorial-dark text-warm-beige hover:bg-luxury-gold text-xs uppercase tracking-widest font-display font-medium py-4 px-5 transition-all duration-300 rounded-full shadow-lg"
            >
              Book Aadrit
              <ArrowRight size={14} />
            </a>

            {/* Mobile Social Links Segment */}
            <div className="mt-8 pt-6 border-t border-editorial-dark/5 flex justify-center gap-6">
              <a
                href="https://instagram.com/aadritmangla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-editorial-gray hover:text-luxury-gold p-2 md:p-3 border border-editorial-dark/5 shadow-xs transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={17} />
              </a>
              <a
                href="mailto:aadritmangla@gmail.com"
                className="text-editorial-gray hover:text-luxury-gold p-2 md:p-3 border border-editorial-dark/5 shadow-xs transition-colors"
                aria-label="Send Mail"
              >
                <Mail size={17} />
              </a>
              <a
                href="https://wa.me/919971271291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-editorial-gray hover:text-luxury-gold p-2 md:p-3 border border-editorial-dark/5 shadow-xs transition-colors"
                aria-label="WhatsApp Parent Manager"
              >
                <Phone size={17} />
              </a>
            </div>

            <div className="mt-6 text-center text-[9px] tracking-widest text-editorial-gray/60 uppercase">
              Official Collaboration Portfolio
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);

