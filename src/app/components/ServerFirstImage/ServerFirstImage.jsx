'use client';

import { useState, useEffect } from 'react';
import styles from './ServerFirstImage.module.scss';

/**
 * ServerFirstImage component that prioritizes server rendering to avoid hydration mismatches
 * This component renders the image without any client-side modifications at first,
 * then optionally upgrades it after hydration is complete.
 */
const ServerFirstImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  priority = false,
  sizes,
  style,
  optimizeAfterHydration = true,
  ...props
}) => {
  // Track if component is hydrated
  const [isHydrated, setIsHydrated] = useState(false);
  // Start with the original src to match server rendering
  const [imgSrc, setImgSrc] = useState(src);
  
  // Mark component as hydrated after mount
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  // Apply optimization after hydration if enabled
  useEffect(() => {
    if (isHydrated && optimizeAfterHydration && src && src.includes('res.cloudinary.com') && !src.includes('/f_auto,q_auto')) {
      const timer = setTimeout(() => {
        const optimizedSrc = src.replace(/\/upload\//, '/upload/f_auto,q_auto/');
        setImgSrc(optimizedSrc);
      }, 1000); // Delay optimization to ensure hydration is complete
      
      return () => clearTimeout(timer);
    }
  }, [isHydrated, optimizeAfterHydration, src]);
  
  // Calculate aspect ratio without altering the format compared to server rendering
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;
  
  // Determine appropriate loading strategy
  const imgLoading = priority ? "eager" : loading;
  const imgFetchPriority = priority ? "high" : "auto";
  
  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      loading={imgLoading}
      fetchPriority={imgFetchPriority}
      sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
      style={{ 
        ...(style || {}),
        aspectRatio
      }}
      {...props}
    />
  );
};

export default ServerFirstImage; 