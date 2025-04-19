"use client";

import { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.scss';

/**
 * OptimizedImage component that provides better performance and accessibility
 * for images throughout the site
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  priority = false,
  sizes,
  style,
  ...props
}) => {
  // Start with the original src to match server rendering
  const [imgSrc, setImgSrc] = useState(src || '');
  const isCloudinary = src && typeof src === 'string' && src.includes && src.includes('res.cloudinary.com');
  
  // Calculate aspect ratio string in consistent format
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;
  
  // Get optimized version of image if it's from Cloudinary, but only after hydration
  useEffect(() => {
    // Skip optimization for initial render to avoid hydration mismatch
    if (isCloudinary && !src.includes('/f_auto,q_auto')) {
      // Wait a bit after hydration to apply optimization
      const timer = setTimeout(() => {
        // Add format auto and quality auto parameters if not already present
        const optimizedSrc = src.replace(/\/upload\//, '/upload/f_auto,q_auto/');
        setImgSrc(optimizedSrc);
      }, 500); // Small delay to ensure hydration is complete
      
      return () => clearTimeout(timer);
    }
  }, [src, isCloudinary]);

  // Enforce width and height to prevent layout shifts
  const imgWidth = width || 300;
  const imgHeight = height || 200;

  // Determine appropriate loading strategy
  const imgLoading = priority ? "eager" : loading;
  const imgFetchPriority = priority ? "high" : "auto";
  
  // Handle image loading error
  const handleError = () => {
    if (imgSrc !== src) {
      setImgSrc(src || ''); // Fallback to original source if optimization fails
    }
  };
  
  // Construct style object consistently
  const imageStyle = {
    ...(style || {}),
    aspectRatio: aspectRatio
  };
  
  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={imgWidth}
      height={imgHeight}
      className={`${styles.optimizedImage} ${className || ''}`}
      loading={imgLoading}
      fetchPriority={imgFetchPriority}
      sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
      style={imageStyle}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage; 