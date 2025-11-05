'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.2) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          // Animation immédiate pour éviter les blocages
          setIsVisible(true);
          setHasBeenVisible(true);
          
          // Une fois visible, on arrête d'observer
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        // Déclenchement moins anticipé pour éviter les animations trop précoces
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current && !hasBeenVisible) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, hasBeenVisible]);

  return { elementRef, isVisible: isVisible || hasBeenVisible };
};

