import Image from 'next/image';
import React from 'react';

const OptimizedImage = ({ src, alt, width, height, className, priority = false, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt || ''}
      width={width || 0}
      height={height || 0}
      className={className}
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
};

export default OptimizedImage; 