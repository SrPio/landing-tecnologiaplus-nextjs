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
  
  // Double the items to ensure continuous scrolling
  const displayItems = [...normalizedItems, ...normalizedItems];
  
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
  
  // Add animation keyframes dynamically to ensure they're available
  useEffect(() => {
    if (isClient) {
      // Check if we need to add keyframes
      const styleSheet = document.styleSheets[0];
      let keyframesExist = false;
      
      // Check if keyframes already exist
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].type === CSSRule.KEYFRAMES_RULE && 
            styleSheet.cssRules[i].name === 'scrollX') {
          keyframesExist = true;
          break;
        }
      }
      
      // Add keyframes if they don't exist
      if (!keyframesExist) {
        try {
          styleSheet.insertRule(`
            @keyframes scrollX {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `, styleSheet.cssRules.length);
        } catch (e) {
          console.error('Could not add keyframes:', e);
        }
      }
    }
  }, [isClient]);
  
  // Determine if we should animate based on client state and viewport
  const shouldAnimate = isClient && isInView && !isHovered;
  
  // Animation styles with proper fallbacks
  const trackStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    width: 'max-content',
    padding: '10px 0',
    willChange: 'transform',
    transition: isHovered ? 'transform 0.2s ease' : 'none',
    animation: shouldAnimate ? `scrollX ${animationDuration}s linear infinite` : 'none',
  };

  // Handle image loading error
  const handleImageError = (e) => {
    if (isClient) {
      // Instead of hiding, show a placeholder color
      e.target.style.opacity = '0.5';
      e.target.style.background = '#f0f0f0';
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '20px 0',
        margin: '10px 0',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      {/* Gradient masks for fading effect on edges */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '150px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to right, white 20%, rgba(255, 255, 255, 0) 100%)'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '150px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to left, white 20%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      
      {/* Infinite scrolling track - only animate when in view */}
      <div 
        style={trackStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayItems.map((item, index) => (
          <div 
            key={`slide-${index}`}
            style={{
              flex: '0 0 auto',
              width: '150px',
              padding: '0 10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img 
              src={item.src} 
              alt={item.alt || 'Client logo'} 
              loading="lazy"
              width="150"
              height="60"
              decoding="async"
              onError={handleImageError}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) opacity(0.7)',
                transition: 'filter 0.3s ease',
                maxHeight: '80px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider2;
