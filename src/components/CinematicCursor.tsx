import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function CinematicCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [dotProps, dotApi] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 0.1, tension: 400, friction: 20 },
  }));

  const [ringProps, ringApi] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0.5,
    config: { mass: 0.3, tension: 250, friction: 25 },
  }));

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      dotApi.start({ x, y, scale: isHovering ? 1.6 : 1 });
      ringApi.start({ x, y, scale: isHovering ? 1.4 : 1, opacity: isHovering ? 0.8 : 0.5 });
      
      if (!isVisible) setIsVisible(true);
    };

    const handleEnterInteractive = () => setIsHovering(true);
    const handleLeaveInteractive = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);

    const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnterInteractive);
      el.addEventListener('mouseleave', handleLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnterInteractive);
        el.removeEventListener('mouseleave', handleLeaveInteractive);
      });
    };
  }, [isVisible, isHovering, dotApi, ringApi]);

  if (!isVisible) return null;

  return (
    <>
      <animated.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-luxury-gold pointer-events-none z-[9999]"
        style={{
          x: dotProps.x.to((x) => x - 6),
          y: dotProps.y.to((y) => y - 6),
          scale: dotProps.scale,
          mixBlendMode: 'difference',
        }}
      />
      <animated.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-luxury-gold/50 pointer-events-none z-[9998]"
        style={{
          x: ringProps.x.to((x) => x - 20),
          y: ringProps.y.to((y) => y - 20),
          scale: ringProps.scale,
          opacity: ringProps.opacity,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}