import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { galleryItems } from '../data';
import { CategoryType, GalleryItem } from '../types';

export default function ReusablePortfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  // Tabs mapping
  const tabs: { label: string; value: CategoryType }[] = [
    { label: 'All Looks', value: 'all' },
    { label: 'Headshots', value: 'headshots' },
    { label: 'Full-Length', value: 'full-length' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Traditional/Festive', value: 'traditional' },
  ];

  // Filter items matching activeCategory
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: string) => {
    // Find absolute position inside full gallery list to support reliable previous/next steps
    const index = galleryItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedImageIdx(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIdx(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="portfolio" className="py-6 md:py-10 bg-white border-t border-warm-ivory scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-1.5 mb-5"
        >
          <span className="font-display text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-semibold">
            Photo Gallery
          </span>
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-editorial-dark tracking-tight">
            Selected Portfolio
          </h2>
          <div className="w-10 h-[1px] bg-luxury-gold/50" />
          <p className="max-w-md text-[11px] md:text-xs font-sans text-editorial-gray/70 leading-relaxed font-light">
            Casual apparel, festive styles, and expressive commercial portraits.
          </p>
        </motion.div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              id={`tab-filter-${tab.value}`}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-3 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.12em] font-display transition-all duration-300 rounded-none border ${
                activeCategory === tab.value
                  ? 'border-editorial-dark bg-editorial-dark text-warm-beige font-semibold'
                  : 'border-editorial-dark/10 hover:border-luxury-gold text-editorial-gray/70 hover:text-luxury-gold bg-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div id="gallery-mesh" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="group relative cursor-pointer overflow-hidden flex flex-col items-stretch"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image Aspect ratio matches premium 3:4 portrait block */}
                <div className="aspect-[3/4] overflow-hidden relative w-full bg-black border border-black shadow-[0_4px_12px_-4px_rgba(0,0,0,0.01)] animate-shimmer">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  {/* Elegant Hover overlay */}
                  <div className="absolute inset-0 bg-editorial-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-none border border-luxury-gold/30 flex items-center justify-center transform translate-y-1.5 group-hover:translate-y-0 transition-all duration-300">
                      <Eye size={14} className="text-editorial-dark group-hover:text-luxury-gold" />
                    </div>
                  </div>

                  {/* Category label block */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[7px] uppercase tracking-[0.2em] font-display text-editorial-gray/80 border border-warm-ivory/40">
                    {item.category}
                  </span>
                </div>

                {/* Card footer description - Minimal editorial design */}
                <div className="pt-3 pb-1 flex items-start justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-[13px] tracking-wide text-editorial-dark group-hover:text-luxury-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-luxury-gold/70 font-medium pt-0.5">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal slider */}
        <AnimatePresence>
          {selectedImageIdx !== null && (
            <motion.div
              id="lightbox-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-editorial-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button Top-Right */}
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-warm-beige/85 hover:text-luxury-gold transition-colors p-2"
                aria-label="Close Lightbox"
              >
                <X size={28} />
              </button>

              {/* Lightbox Content Container */}
              <div
                className="relative max-w-4xl w-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Stop bubbling
              >
                
                {/* Center Image */}
                <motion.div
                  key={selectedImageIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] max-h-[80vh] bg-warm-beige overflow-hidden border border-warm-beige/10"
                >
                  <img
                    src={galleryItems[selectedImageIdx].src}
                    alt={galleryItems[selectedImageIdx].alt}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Subtitle / Details Card below Image */}
                <div className="text-center mt-6 text-warm-beige space-y-1">
                  <span className="text-[9px] font-display uppercase tracking-[0.25em] text-luxury-gold block">
                    {galleryItems[selectedImageIdx].category}
                  </span>
                  <h3 className="font-serif text-lg tracking-wide">
                    {galleryItems[selectedImageIdx].title}
                  </h3>
                  <p className="text-xs text-warm-beige/65 font-light">
                    {galleryItems[selectedImageIdx].alt}
                  </p>
                </div>

                {/* Slide Nav Arrows */}
                <button
                  id="lightbox-prev-arrow"
                  onClick={handlePrev}
                  className="absolute left-0 md:-left-12 lg:-left-20 top-1/2 transform -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white hover:text-luxury-gold p-3 rounded-none transition-all duration-200"
                  aria-label="Previous Image"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  id="lightbox-next-arrow"
                  onClick={handleNext}
                  className="absolute right-0 md:-right-12 lg:-right-20 top-1/2 transform -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white hover:text-luxury-gold p-3 rounded-none transition-all duration-200"
                  aria-label="Next Image"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Progress counter info */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-warm-beige/70 text-xs font-mono">
                {selectedImageIdx + 1} / {galleryItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
