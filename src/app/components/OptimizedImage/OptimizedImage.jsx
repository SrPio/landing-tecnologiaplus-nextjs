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
  const [imgSrc, setImgSrc] = useState(src);
  const isCloudinary = src && src.includes && src.includes('res.cloudinary.com');
  
  // Get optimized version of image if it's from Cloudinary (auto-format, quality optimization)
  useEffect(() => {
    if (isCloudinary && !src.includes('/f_auto,q_auto')) {
      // Add format auto and quality auto parameters if not already present
      const optimizedSrc = src.replace(/\/upload\//, '/upload/f_auto,q_auto/');
      setImgSrc(optimizedSrc);
    } else {
      setImgSrc(src);
    }
  }, [src, isCloudinary]);

  // Enforce width and height to prevent layout shifts
  if (!width || !height) {
    console.warn(`Image ${alt || 'unnamed'} is missing width or height attributes. This can cause layout shifts.`);
  }

  // Default dimensions to help avoid CLS for missing values
  const imgWidth = width || 300;
  const imgHeight = height || 200;

  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={imgWidth}
      height={imgHeight}
      className={`${styles.optimizedImage} ${className || ''}`}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      style={{ ...style, aspectRatio: `${imgWidth} / ${imgHeight}` }}
      onError={() => setImgSrc(src)} // Fallback to original source if optimization fails
      {...props}
    />
  );
};

export default OptimizedImage; 