import { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function CinematicCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const magneticRef = useRef<{ x: number; y: number } | null>(null);

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
      const targetScale = isHovering ? 1.8 : 1;
      const ringScale = isHovering ? 1.6 : 1;
      const ringOpacity = isHovering ? 0.9 : 0.5;

      dotApi.start({ x, y, scale: targetScale });
      ringApi.start({ x, y, scale: ringScale, opacity: ringOpacity });

      if (!isVisible) setIsVisible(true);
    };

    const handleEnterInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      magneticRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      setIsHovering(true);
    };

    const handleLeaveInteractive = () => {
      magneticRef.current = null;
      setIsHovering(false);
    };

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

  const dotSize = 24;
  const ringSize = 56;
  const dotOffset = dotSize / 2;
  const ringOffset = ringSize / 2;

  return (
    <>
      <animated.div
        className="fixed top-0 left-0 rounded-full bg-luxury-gold pointer-events-none z-[9999]"
        style={{
          width: dotSize,
          height: dotSize,
          x: dotProps.x.to((x) => x - dotOffset),
          y: dotProps.y.to((y) => y - dotOffset),
          scale: dotProps.scale,
          mixBlendMode: 'difference',
          willChange: 'transform, opacity',
        }}
      />
      <animated.div
        className="fixed top-0 left-0 rounded-full border border-luxury-gold/70 pointer-events-none z-[9998]"
        style={{
          width: ringSize,
          height: ringSize,
          x: ringProps.x.to((x) => x - ringOffset),
          y: ringProps.y.to((y) => y - ringOffset),
          scale: ringProps.scale,
          opacity: ringProps.opacity,
          mixBlendMode: 'difference',
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
}
