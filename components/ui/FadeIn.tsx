import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // in milliseconds
  className?: string;
  direction?: 'up' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const getTransform = () => {
    if (!isVisible && direction === 'up') return 'translate-y-10';
    return 'translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getTransform()} ${
        isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;