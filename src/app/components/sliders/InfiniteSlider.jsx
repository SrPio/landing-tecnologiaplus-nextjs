"use client";

import React, { useEffect, useRef } from "react";
import styles from "./InfiniteSlider.module.scss";

const InfiniteSlider = ({ logos }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to duplicate logos if there are too few to prevent freezing
    const ensureSmooth = () => {
      if (!sliderRef.current) return;
      
      // Force at least 10 logos for smoother animation
      const container = sliderRef.current.querySelector('div');
      const logoElements = container.querySelectorAll('img');
      
      // Clone logos if we have fewer than 10
      if (logoElements.length < 10) {
        // How many sets we need to have at least 10
        const setsNeeded = Math.ceil(10 / logoElements.length);
        
        // Clone the logos multiple times
        for (let i = 1; i < setsNeeded; i++) {
          logoElements.forEach(logo => {
            const clone = logo.cloneNode(true);
            // Add a data attribute to mark as clone
            clone.setAttribute('data-clone', 'true');
            container.appendChild(clone);
          });
        }
      }
    };
    
    // Preload images to prevent flicker
    const preloadImages = () => {
      if (logos && logos.length > 0) {
        logos.forEach(logo => {
          const img = new Image();
          img.src = logo.src;
        });
      }
    };
    
    preloadImages();
    ensureSmooth();
    
    // Create a continuous loop effect
    const container = sliderRef.current.querySelector('div');
    container.addEventListener('animationiteration', () => {
      // This ensures the animation never has a visible break
      container.style.animation = 'none';
      container.offsetHeight; // Trigger reflow
      container.style.animation = '';
    });
    
  }, [logos]);

  return (
    <div className={styles.loop__slide} ref={sliderRef}>
      <div>
        {logos.map((logo, index) => (
          <img 
            loading="lazy" 
            key={`logo-${index}`} 
            src={logo.src} 
            alt={logo.alt || `Logo ${index + 1}`}
            width="150"
            height="80" 
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
