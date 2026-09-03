import React from 'react';

type MotifProps = {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
};

// A small four-point sparkle, in the spirit of the celestial details Jennie
// pointed to as inspiration — used sparingly as a quiet accent, never as a
// focal graphic.
export const Sparkle = ({ className = '', size = 16, color = 'currentColor', delay = 0 }: MotifProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    className={`animate-twinkle pointer-events-none ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill={color} />
  </svg>
);

// A slim crescent moon outline.
export const Crescent = ({ className = '', size = 20, color = 'currentColor', delay = 0 }: MotifProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    className={`animate-float pointer-events-none ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <path
      d="M15.5 3.5C11 3.5 7.5 7.3 7.5 12s3.5 8.5 8 8.5c1 0 2-.2 2.9-.5-3-1-5.1-4.1-5.1-8s2.1-7 5.1-8c-.9-.3-1.9-.5-2.9-.5Z"
      fill={color}
    />
  </svg>
);

// A very small hand-drawn-feeling leaf sprig, echoing the botanical line-art
// on the mood board.
export const Sprig = ({ className = '', size = 22, color = 'currentColor' }: MotifProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`pointer-events-none ${className}`}>
    <path d="M12 22V6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M12 9C9 9 7 7 6 4c3 0 5.5 1.5 6 5Z" fill={color} opacity="0.8" />
    <path d="M12 14c3 0 5-2 6-5-3 0-5.5 1.5-6 5Z" fill={color} opacity="0.8" />
  </svg>
);
