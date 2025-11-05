'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { throttle, clamp } from '@/lib/utils';

interface ParallaxOptions {
  speed?: number; // Vitesse du parallax (0.1 = lent, 1 = rapide)
  direction?: 'up' | 'down' | 'left' | 'right';
  rotate?: boolean; // Ajouter une rotation
  scale?: boolean; // Ajouter un effet de zoom
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    rotate = false,
    scale = false,
  } = options;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, rotation: 0, scaleValue: 1 });

  // Memoize throttled scroll handler to prevent recreation
  const throttledHandleScroll = useMemo(
    () =>
      throttle(() => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const scrollPercent = clamp(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          0,
          1
        );

        let x = 0;
        let y = 0;
        let rotation = 0;
        let scaleValue = 1;

        // Limiter les valeurs pour éviter que les éléments sortent trop du viewport
        switch (direction) {
          case 'up':
            y = clamp(-scrollPercent * 100 * speed, -200, 200);
            break;
          case 'down':
            y = clamp(scrollPercent * 100 * speed, -200, 200);
            break;
          case 'left':
            x = clamp(-scrollPercent * 100 * speed, -200, 200);
            break;
          case 'right':
            x = clamp(scrollPercent * 100 * speed, -200, 200);
            break;
        }

        if (rotate) {
          rotation = clamp(scrollPercent * 360 * speed, -180, 180);
        }

        if (scale) {
          scaleValue = clamp(1 + (scrollPercent * 0.2 * speed), 0.5, 2);
        }

        setOffset({ x, y, rotation, scaleValue });
      }, 16), // ~60fps
    [speed, direction, rotate, scale]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    throttledHandleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll]);

  return { elementRef, offset };
};

