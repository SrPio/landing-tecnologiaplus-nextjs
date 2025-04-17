// components/sliders/InfiniteSlider2.js
"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-infinite-logo-slider";

const InfiniteSlider2 = ({ logos }) => {
  const sliderRef = useRef(null);

  // Manually preload images after component mounts to avoid the preloadImages prop error
  useEffect(() => {
    if (logos && logos.length > 0) {
      logos.forEach(logo => {
        const img = new Image();
        img.src = logo.src;
      });
    }
  }, [logos]);

  return (
    <div ref={sliderRef}>
      <Slider
        width="150px" // Ancho de cada logo
        duration={40} // Duración del desplazamiento completo en segundos
        pauseOnHover={false} // Pausar animación al pasar el mouse
        blurBorders={true} // Desactivar efecto de desenfoque en los bordes
      >
        {logos && logos.map((logo, index) => (
          <Slider.Slide key={index}>
            <img 
              src={logo.src} 
              alt={logo.alt || `Logo ${index + 1}`} 
              style={{ width: "100%" }} 
              loading="lazy"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteSlider2;
