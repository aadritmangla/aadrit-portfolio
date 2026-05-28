import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram } from 'lucide-react';
import { modelProfile } from '../data';

interface NotificationItem {
  message: string;
  timeAgo: string;
}

const notifications: NotificationItem[] = [
  {
    message: "📸 Someone from Mumbai just discovered Aadrit’s portfolio",
    timeAgo: "Just now",
  },
  {
    message: "✨ A visitor from Delhi recently explored Aadrit’s expressions",
    timeAgo: "2 mins ago",
  },
  {
    message: "📍 Someone from Haryana viewed Aadrit's commercial work",
    timeAgo: "5 mins ago",
  },
  {
    message: "💛 Someone from Bangalore viewed Aadrit’s latest gallery",
    timeAgo: "8 mins ago",
  },
  {
    message: "🏔️ A visitor from Himachal Pradesh checked Aadrit’s profile",
    timeAgo: "12 mins ago",
  },
  {
    message: "🎬 Someone from Chandigarh recently watched Aadrit’s showreel",
    timeAgo: "18 mins ago",
  },
  {
    message: "👀 New visitor from New Delhi explored the kids apparel gallery",
    timeAgo: "25 mins ago",
  },
  {
    message: "🌍 A fashion enthusiast from Lucknow explored Aadrit’s portfolio",
    timeAgo: "35 mins ago",
  },
  {
    message: "📷 Someone from Gurgaon just visited Aadrit’s gallery",
    timeAgo: "45 mins ago",
  },
  {
    message: "💫 A talent scout from Pune is exploring Aadrit’s expressions",
    timeAgo: "1 hour ago",
  },
  {
    message: "✨ Someone from Shimla recently liked Aadrit's festive photoshoot",
    timeAgo: "2 hours ago",
  },
  {
    message: "🎨 A creative director from Haryana viewed the sizing & fit guide",
    timeAgo: "3 hours ago",
  }
];

export default function SocialNotificationPopup() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);
  const [dpUrl, setDpUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    // Fetch Instagram DP
    fetch('/api/instagram-dp')
      .then(res => res.json())
      .then(data => setDpUrl(data.url))
      .catch(() => {
        // Silently catch to prevent Failed to fetch errors in console
      });

    const handleScroll = () => {
        // Show if near bottom and hasn't shown yet
        if (!hasTriggered && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
           setIsVisible(true);
           setHasTriggered(true);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  useEffect(() => {
    if (isVisible && !isHovered) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full max-w-[320px] bg-white p-6 rounded-3xl flex flex-col items-center text-center gap-4 relative shadow-2xl"
          >
            <div className="flex justify-center">
              <img 
                src={modelProfile.heroImage} 
                alt="Aadrit Mangla" 
                className="w-20 h-20 rounded-full object-cover border-2 border-editorial-dark"
                decoding="async"
              />
            </div>
            
            <div className="flex-1 w-full">
              <p className="text-sm leading-relaxed text-editorial-dark font-display font-medium">
                📸 More expressions, moments & behind-the-scenes on Instagram
              </p>
              <p className="text-xs text-editorial-gray/90 font-display mt-2 font-semibold">
                @aadritmangla
              </p>
            </div>
            
            <a
              href="https://instagram.com/aadritmangla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-white text-xs font-display uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ 
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' 
              }}
            >
              <Instagram size={14} />
              Follow Aadrit
            </a>

            {/* Clean Dismiss Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-editorial-gray/40 hover:text-editorial-dark transition-colors p-1 rounded-full hover:bg-warm-beige/50"
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
