// components/sliders/InfiniteSlider2.js
"use client";
import React from "react";
import styles from './InfiniteSlider2.module.scss';

const InfiniteSlider2 = ({ logos, images, speed = 5000, duration = 40, className }) => {
  // Handle both images and logos props for backward compatibility
  const itemsToDisplay = logos || images || [];
  
  // Convert speed to duration if duration is not specified
  const animationDuration = duration || Math.max(20, Math.min(60, speed / 100));
  
  // Ensure we have enough logos/images for continuous scrolling
  const enhancedItems = [...itemsToDisplay];
  
  // If we need more items for a seamless experience, duplicate them
  if (itemsToDisplay.length < 10) {
    const duplicationsNeeded = Math.ceil(10 / itemsToDisplay.length);
    for (let i = 1; i < duplicationsNeeded; i++) {
      enhancedItems.push(...itemsToDisplay);
    }
  }

  return (
    <div className={`${styles.slider_container} ${className || ''}`}>
      {/* Left gradient mask */}
      <div className={styles.gradient_mask_left}></div>
      
      {/* Infinite scrolling container */}
      <div className={styles.slider_track} style={{ animationDuration: `${animationDuration}s` }}>
        {enhancedItems.map((item, index) => (
          <div key={`logo-${index}`} className={styles.slide}>
            <img 
              src={item.src || item.url} 
              alt={item.alt || 'Company logo'} 
              loading="lazy"
              width={150}
              height="auto"
            />
          </div>
        ))}
        
        {/* Duplicate the items for infinite effect */}
        {enhancedItems.map((item, index) => (
          <div key={`logo-duplicate-${index}`} className={styles.slide}>
            <img 
              src={item.src || item.url} 
              alt={item.alt || 'Company logo'} 
              loading="lazy"
              width={150}
              height="auto"
            />
          </div>
        ))}
      </div>
      
      {/* Right gradient mask */}
      <div className={styles.gradient_mask_right}></div>
    </div>
  );
};

export default InfiniteSlider2;
