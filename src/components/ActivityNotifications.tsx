import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCircle } from 'lucide-react';

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

export default function ActivityNotifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      // time between notifications when hidden
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 7000); // Wait 7s before showing next
      return () => clearTimeout(nextTimer);
    } else if (!isHovered) {
      // time notification stays visible
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Show for 4s
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, isHovered, currentIndex]);

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-24 left-4 right-4 md:right-auto md:bottom-6 md:left-6 z-40 pointer-events-none flex justify-center md:justify-start">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto max-w-[280px] bg-white/95 backdrop-blur-md border border-warm-ivory shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-3.5 sm:p-4 rounded-xl flex items-start gap-3 select-none"
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-warm-ivory flex items-center justify-center">
                <UserCircle className="text-luxury-gold" size={20} />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs leading-relaxed text-editorial-dark font-display font-medium">
                {currentNotification.message}
              </p>
              <p className="text-[10px] text-editorial-gray/60 font-sans mt-1">
                {currentNotification.timeAgo}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
