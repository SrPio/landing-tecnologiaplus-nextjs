"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import styles from './InfiniteSlider.module.scss';

export default function InfiniteSlider({ logos = [] }) {
  const sliderRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const timeoutRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const animating = useRef(false);
  const lastTimestamp = useRef(0);

  // Memoize processed logos to ensure we have enough for a smooth carousel
  const processedLogos = useMemo(() => {
    // For a continuous carousel effect, we need at least double the viewport width
    // Let's ensure we have enough logos by duplicating them multiple times
    let duplicatedLogos = [...logos];
    
    // Make sure we have at least 15 logos for very smooth scrolling
    while (duplicatedLogos.length < 15) {
      duplicatedLogos = [...duplicatedLogos, ...logos];
    }
    
    return duplicatedLogos;
  }, [logos]);

  // Preload images for better performance
  useEffect(() => {
    if (!processedLogos.length) return;
    
    setImagesLoaded(false);
    
    // Create an array of image loading promises
    const imagePromises = processedLogos.map(logo => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to prevent blocking
        img.src = logo.src;
      });
    });

    // Set a safety timeout to ensure we don't block forever
    timeoutRef.current = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    // When all images are loaded, mark as ready
    Promise.all(imagePromises)
      .then(() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setImagesLoaded(true);
      });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animating.current) {
        cancelAnimationFrame(animating.current);
        animating.current = null;
      }
    };
  }, [processedLogos]);

  // Use requestAnimationFrame for a smooth animation that doesn't pause
  const animate = useCallback((timestamp) => {
    if (!lastTimestamp.current) {
      lastTimestamp.current = timestamp;
    }
    
    const elapsed = timestamp - lastTimestamp.current;
    lastTimestamp.current = timestamp;
    
    // Calculate how much to move based on time elapsed (smoother than CSS animation)
    // Adjust the speed factor (0.03) to control speed - lower = slower
    const pixelsToMove = elapsed * 0.03;
    
    setTranslateX(prevTranslate => {
      // Get container and first logo widths to determine reset point
      const slider = sliderRef.current;
      if (!slider || !slider.children || !slider.children[0]) {
        return prevTranslate;
      }
      
      const containerWidth = slider.scrollWidth;
      const firstLogoWidth = slider.children[0].offsetWidth;
      
      // If we've moved one logo width, reset position to create continuous loop
      if (Math.abs(prevTranslate) >= firstLogoWidth + parseInt(getComputedStyle(slider.children[0]).marginRight)) {
        // Move the first logo to the end to create continuous flow
        slider.appendChild(slider.children[0].cloneNode(true));
        slider.removeChild(slider.children[0]);
        return 0; // Reset position
      }
      
      return prevTranslate - pixelsToMove;
    });
    
    animating.current = requestAnimationFrame(animate);
  }, []);

  // Start/stop animation based on visibility
  useEffect(() => {
    if (!imagesLoaded) return;
    
    // Start animation when component is mounted and images are loaded
    animating.current = requestAnimationFrame(animate);
    
    return () => {
      if (animating.current) {
        cancelAnimationFrame(animating.current);
        animating.current = null;
      }
    };
  }, [imagesLoaded, animate]);

  // Pause animation when tab is not visible to save resources
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (animating.current) {
          cancelAnimationFrame(animating.current);
          animating.current = null;
        }
      } else {
        if (!animating.current) {
          lastTimestamp.current = 0; // Reset timestamp to avoid jumps
          animating.current = requestAnimationFrame(animate);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [animate]);

  // Memoize the logo rendering function to prevent unnecessary re-renders
  const renderLogos = useCallback(() => {
    return processedLogos.map((logo, index) => (
      <div key={`logo-${index}`} className={styles.logo_container}>
        <img 
          src={logo.src} 
          alt={logo.alt || `Logo ${index + 1}`} 
          width={logo.width || 150} 
          height={logo.height || 80} 
          loading="eager"
          decoding="async"
        />
      </div>
    ));
  }, [processedLogos]);

  return (
    <div className={styles.loop__slide} style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }}>
      <div 
        ref={sliderRef} 
        style={{ 
          transform: `translateX(${translateX}px)`,
          transition: 'none' // Use JS animation instead of CSS
        }}
        className={styles.slider_container}
      >
        {renderLogos()}
      </div>
    </div>
  );
}
