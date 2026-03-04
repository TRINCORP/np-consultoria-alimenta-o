import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook that observes a container and reveals children with `.scroll-reveal*` classes
 * when they enter the viewport. Adds the `revealed` class to trigger CSS transitions.
 */
export const useScrollReveal = (threshold = 0.12) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const reveal = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(reveal, {
      threshold,
      rootMargin: '0px 0px -40px 0px',
    });

    // Observe all scroll-reveal elements inside the container
    const targets = container.querySelectorAll(
      '[class*="scroll-reveal"]'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [reveal, threshold]);

  return containerRef;
};
