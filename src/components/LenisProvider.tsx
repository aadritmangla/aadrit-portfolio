import { ReactNode, useEffect } from 'react';
import { useLenis } from '../hooks/useLenis';

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useLenis();

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        lenis.scrollTo(element);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenisRef]);

  return <>{children}</>;
}