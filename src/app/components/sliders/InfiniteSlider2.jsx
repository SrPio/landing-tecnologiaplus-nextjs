// components/sliders/InfiniteSlider2.js
"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './InfiniteSlider2.module.scss';

const InfiniteSlider2 = ({ logos, images, speed = 5000, duration = 40, className }) => {
  // For backwards compatibility, handle both logos and images props
  const items = logos || images || [];
  
  // State to track when component is in view
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Calculate animation duration - faster speed = lower duration
  const animationDuration = duration || (items.length > 0 ? 40 : 0); 

  // Normalize items array for consistent server/client rendering
  // Important: this must be the same on both server and client to avoid hydration mismatches
  const normalizedItems = items.length >= 5 
    ? items 
    : [...items, ...items, ...items].slice(0, 15);
  
  // Client-side effects
  useEffect(() => {
    setIsClient(true);
    
    // Set up intersection observer to detect when slider is in view
    if (typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsInView(entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(containerRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  // Animation styles that only apply client-side to avoid hydration mismatches
  const trackStyle = isClient ? {
    animationDuration: `${animationDuration}s`,
    animationPlayState: !isInView || isHovered ? 'paused' : 'running',
  } : {};

  return (
    <div 
      ref={containerRef}
      className={`${styles.slider_container} ${className || ''}`}
    >
      {/* Gradient masks for fading effect on edges */}
      <div className={styles.gradient_mask_left} />
      <div className={styles.gradient_mask_right} />
      
      {/* Infinite scrolling track - only animate when in view */}
      <div 
        className={styles.slider_track} 
        style={trackStyle}
        onMouseEnter={isClient ? () => setIsHovered(true) : undefined}
        onMouseLeave={isClient ? () => setIsHovered(false) : undefined}
      >
        {normalizedItems.map((item, index) => (
          <div key={`slide-${index}`} className={styles.slide}>
            <img 
              src={item.src} 
              alt={item.alt || 'Client logo'} 
              loading="lazy"
              width="150"
              height="60"
              decoding="async"
              onError={(e) => {
                if (isClient) {
                  e.target.style.display = 'none';
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider2;
