// components/sliders/InfiniteSlider2.js
"use client";
import React, { useEffect, useState, useRef } from 'react';
import styles from './InfiniteSlider2.module.scss';

const InfiniteSlider2 = ({ logos, images, speed = 5000, duration = 40, className }) => {
  // For backwards compatibility, handle both logos and images props
  const items = logos || images || [];
  
  // Calculate animation duration - faster speed = lower duration
  // This gives us better control over animation speed
  const animationDuration = duration || (items.length > 0 ? 40 : 0); 

  // State to track window width for responsive behavior
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderTrackRef = useRef(null);
  
  // Track when mouse is over the slider to pause animation
  const [isHovered, setIsHovered] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Set initial window width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Ensure we have enough items for continuous scrolling
  const normalizedItems = items.length >= 5 ? items : [...items, ...items, ...items, ...items];
  
  // Dynamic styles for animation duration
  const trackStyle = {
    animationDuration: `${animationDuration}s`,
    animationPlayState: isHovered ? 'paused' : 'running'
  };

  return (
    <div className={`${styles.slider_container} ${className || ''}`}>
      {/* Gradient masks for fading effect on edges */}
      <div className={styles.gradient_mask_left} />
      <div className={styles.gradient_mask_right} />
      
      {/* Infinite scrolling track */}
      <div 
        className={styles.slider_track} 
        style={trackStyle}
        ref={sliderTrackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {normalizedItems.map((item, index) => (
          <div key={`${item.alt}-${index}`} className={styles.slide}>
            <img 
              src={item.src} 
              alt={item.alt || 'Client logo'} 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                console.warn(`Failed to load image: ${item.src}`);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider2;
