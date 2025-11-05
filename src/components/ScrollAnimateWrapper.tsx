'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimateWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'revealUp' | 'zoomRotateIn' | 'flipInX' | 'bounceIn';
  delay?: string;
  threshold?: number;
  onClick?: () => void;
}

export const ScrollAnimateWrapper: React.FC<ScrollAnimateWrapperProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = '',
  threshold = 0.2,
  onClick,
}) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={elementRef}
      className={`scroll-animate animate-${animation} ${delay} ${isVisible ? 'is-visible' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

