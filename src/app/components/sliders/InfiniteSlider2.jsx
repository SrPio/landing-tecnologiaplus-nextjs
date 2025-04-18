// components/sliders/InfiniteSlider2.js
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Import component styles
import styles from './InfiniteSlider2.module.scss';

const InfiniteSlider2 = ({ images, speed = 5000, className }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const swiperRef = useRef(null);
  const observerRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Ensure we have enough images by duplicating them
  const ensureSufficientImages = (originalImages) => {
    if (!originalImages || originalImages.length === 0) return [];
    
    // Ensure at least 15 images for smoother animation
    const minImages = 15;
    if (originalImages.length >= minImages) {
      return [...originalImages];
    }
    
    // Calculate how many duplications we need
    const duplicationsNeeded = Math.ceil(minImages / originalImages.length);
    let result = [];
    
    // Duplicate the array the required number of times
    for (let i = 0; i < duplicationsNeeded; i++) {
      result = [...result, ...originalImages.map(img => ({...img}))];
    }
    
    return result;
  };

  // Preload images to prevent freezing
  useEffect(() => {
    if (!images || images.length === 0) return;

    const loadImages = () => {
      // Reset counter
      setLoadedImagesCount(0);
      
      // Create image elements to preload
      images.forEach((image) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImagesCount(prev => {
            const newCount = prev + 1;
            if (newCount >= images.length) {
              setImagesLoaded(true);
            }
            return newCount;
          });
        };
        
        img.onerror = () => {
          // Still count errors to avoid hanging
          setLoadedImagesCount(prev => {
            const newCount = prev + 1;
            if (newCount >= images.length) {
              setImagesLoaded(true);
            }
            return newCount;
          });
        };
        
        img.src = image.url;
      });
    };

    loadImages();

    // Fallback in case some images fail to load
    const timeoutId = setTimeout(() => {
      if (!imagesLoaded) {
        setImagesLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [images, imagesLoaded]);

  // Set up intersection observer to control autoplay
  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperElement = swiperRef.current;
    
    const handleVisibilityChange = (entries) => {
      const [entry] = entries;
      if (swiperRef.current?.swiper) {
        if (entry.isIntersecting) {
          swiperRef.current.swiper.autoplay.start();
        } else {
          swiperRef.current.swiper.autoplay.stop();
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleVisibilityChange, { threshold: 0.1 });
    observerRef.current.observe(swiperElement);

    return () => {
      if (observerRef.current && swiperElement) {
        observerRef.current.unobserve(swiperElement);
      }
    };
  }, [imagesLoaded]);

  // Additional effect to ensure navigation arrows are visible
  useEffect(() => {
    if (!swiperRef.current?.swiper) return;
    
    // Force navigation update after component is mounted
    const timeoutId = setTimeout(() => {
      if (swiperRef.current?.swiper?.navigation) {
        swiperRef.current.swiper.navigation.update();
      }
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [imagesLoaded]);

  // Prepare all the images
  const processedImages = ensureSufficientImages(images);

  if (!imagesLoaded || processedImages.length === 0) {
    return <div className={styles.slider_container}></div>;
  }

  return (
    <div className={`${styles.slider_container} ${className || ''}`}>
      <div ref={prevRef} className={`${styles.custom_nav} ${styles.nav_prev}`}></div>
      <div ref={nextRef} className={`${styles.custom_nav} ${styles.nav_next}`}></div>
      
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        speed={1000}
        navigation={{
          prevEl: `.${styles.nav_prev}`,
          nextEl: `.${styles.nav_next}`,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        centeredSlides={false}
        className={styles.slider}
      >
        {processedImages.map((image, index) => (
          <SwiperSlide key={`${image.alt || 'logo'}-${index}`} className={styles.slide}>
            <img
              src={image.url}
              alt={image.alt || 'Company logo'}
              width="150"
              height="80"
              loading="eager"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteSlider2;


