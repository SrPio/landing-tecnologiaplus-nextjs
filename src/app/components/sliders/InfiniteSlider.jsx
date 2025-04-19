"use client";

import React, { useState, useEffect } from 'react';
import styles from './InfiniteSlider.module.scss';

export default function InfiniteSlider({ logos = [] }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Make sure we have enough logos to create a smooth effect
  const duplicatedLogos = React.useMemo(() => {
    if (!logos || logos.length === 0) return [];
    
    let result = [...logos];
    // Duplicate logos until we have at least 10
    while (result.length < 10) {
      result = [...result, ...logos];
    }
    return result;
  }, [logos]);

  // Preload images to avoid flickering
  useEffect(() => {
    if (!duplicatedLogos.length) return;
    
    let loadedImages = 0;
    const totalImages = duplicatedLogos.length;
    
    // Set a timeout to show the slider even if some images fail to load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    
    // Preload all images
    duplicatedLogos.forEach(logo => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          clearTimeout(timer);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          clearTimeout(timer);
          setIsLoaded(true);
        }
      };
      img.src = logo.src;
    });
    
    return () => clearTimeout(timer);
  }, [duplicatedLogos]);

  if (!duplicatedLogos.length) {
    return null;
  }

  return (
    <div className={styles.loop__slide}>
      <div 
        className={styles.slider_container}
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`logo-${index}`} className={styles.logo_container}>
            <img
              src={logo.src}
              alt={logo.alt || `Logo ${index + 1}`}
              width={logo.width || 150}
              height={logo.height || 80}
            />
          </div>
        ))}
        
        {/* Add a second set of logos for seamless loop */}
        {duplicatedLogos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className={styles.logo_container}>
            <img
              src={logo.src}
              alt={logo.alt || `Logo ${index + 1}`}
              width={logo.width || 150}
              height={logo.height || 80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
