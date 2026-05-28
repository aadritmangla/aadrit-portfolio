import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

const REELS = [
  { 
    id: 'r1', 
    src: 'https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Reels/aadrit%20reel%2001.mp4', 
    title: 'Commercial Lifestyle' 
  },
  { 
    id: 'r2', 
    src: 'https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Reels/aadrit%20reel%2002.mp4', 
    title: 'Editorial Motion' 
  },
  { 
    id: 'r3', 
    src: 'https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Reels/aadrit%20reel%2003.mp4', 
    title: 'Action & Energy' 
  },
];


const ReelItem = ({ reel, isActive, onClick, index, activeIndex }: { reel: any, isActive: boolean, onClick: () => void, index: number, activeIndex: number, key?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(isActive);
  const diff = index - activeIndex;

  React.useEffect(() => {
    setIsPlaying(isActive);
    if (isActive) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isActive]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={false}
      animate={{
        x: diff * 110,
        z: isActive ? 60 : -20 * Math.abs(diff),
        scale: isActive ? 1.05 : 0.94,
        rotateY: diff * -10,
        zIndex: isActive ? 30 : 20 - Math.abs(diff),
        opacity: 1 - Math.abs(diff) * 0.15,
      }}
      whileHover={isActive ? { scale: 1.08, y: -6, z: 80 } : {}}
      onMouseEnter={() => !isActive && videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => !isActive && videoRef.current?.pause()}
      onClick={onClick}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 28
      }}
      className={`absolute w-[160px] md:w-[190px] aspect-[9/16] bg-editorial-dark cursor-pointer transition-shadow duration-500 overflow-hidden group
        ${isActive ? 'shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20' : 'shadow-xl'}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative w-full h-full">
        <video 
          ref={videoRef}
          key={reel.src}
          src={reel.src}
          autoPlay={isActive}
          loop
          muted={!isActive}
          playsInline
          className={`w-full h-full object-cover transition-all duration-700 
            ${isActive ? 'opacity-90 grayscale-0' : 'opacity-60 grayscale-[20%] group-hover:opacity-80'}`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

        {/* Content */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 font-display font-bold mb-1">
            Casting Reel
          </span>
          <h4 className="text-[11px] md:text-sm text-white font-serif tracking-tight leading-tight">
            {reel.title}
          </h4>
        </div>

        {/* Play/Pause Button */}
        {isActive && (
          <button 
            onClick={togglePlay}
            className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-all pointer-events-auto"
          >
            {isPlaying ? <Pause size={14} className="text-white" /> : <Play size={14} className="text-white translate-x-0.5" />}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default function ReelStack() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div 
      className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden py-8"
      style={{ perspective: '1200px' }}
    >
      <div className="relative w-full max-w-[500px] flex items-center justify-center h-full">
        {REELS.map((reel, index) => (
          <ReelItem 
            key={reel.id} 
            reel={reel} 
            isActive={index === activeIndex} 
            onClick={() => setActiveIndex(index)}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
      
      {/* Visual Navigation Hint */}
      <div className="absolute bottom-2 flex gap-1.5">
        {REELS.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-300 ${idx === activeIndex ? 'w-4 bg-luxury-gold' : 'w-1 bg-luxury-gold/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
