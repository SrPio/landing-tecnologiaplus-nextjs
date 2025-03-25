// components/sliders/InfiniteSlider2.js
"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";

const InfiniteSlider2 = ({ logos }) => {
  return (
    <Slider
      width="150px" // Ancho de cada logo
      duration={40} // Duración del desplazamiento completo en segundos
      pauseOnHover={false} // Pausar animación al pasar el mouse
      blurBorders={true} // Desactivar efecto de desenfoque en los bordes
    >
      {logos.map((logo, index) => (
        <Slider.Slide key={index}>
          <img src={logo.src} alt={logo.alt} style={{ width: "100%" }} />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default InfiniteSlider2;
