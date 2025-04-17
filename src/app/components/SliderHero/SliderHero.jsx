"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../Header/Header";
import styles from "./SliderHero.module.scss";

// Dynamically import slide components to reduce initial bundle size
const LocalizadoresHeroSection = dynamic(() => import('./Slides/LocalizadoresHeroSection/LocalizadoresHeroSection'), { ssr: true });
const LlamadorMeserosHeroSection = dynamic(() => import('./Slides/MeserosHeroSection/LlamadorMeserosHeroSection'), { ssr: true });
const EnfermeriaHeroSection = dynamic(() => import('./Slides/EnfermeriaHeroSection/EnfermeriaHeroSection'), { ssr: true });
const TurnoMasterHeroSection = dynamic(() => import('./Slides/TurnomasterHeroSection/TurnoMasterHeroSection'), { ssr: true });
const TurnoExpressHeroSection = dynamic(() => import('./Slides/TurneroHeroSection/TurnoExpressHeroSection'), { ssr: true });
const DispensadorTiquetesHeroSection = dynamic(() => import('./Slides/DispensadorTurnosHeroSection/DispensadorTiquetesHeroSection'), { ssr: true });
const RollosTurnosHeroSection = dynamic(() => import('./Slides/RollosTurnosHeroSection/RollosTurnosHeroSection'), { ssr: true });
const RollosTermicosHeroSection = dynamic(() => import('./Slides/RollosTermicosHero/RollosTermicosHeroSection'), { ssr: true });
const CalificadorHeroSection = dynamic(() => import('./Slides/CalificadorHeroSection/CalificadorHeroSection'), { ssr: true });
const EncuestaVirtualHeroSection = dynamic(() => import('./Slides/EncuestaVirtualHeroSection/EncuestaVirtualHeroSection'), { ssr: true });

export default function SliderHero({ botonesPorHero = {} }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Preload the LCP image
    const preloadImage = new Image();
    preloadImage.src = "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/12_1-8_o5nq6u.webp";
    
    // Add preload link for critical images
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/12_1-8_o5nq6u.webp";
    document.head.appendChild(preloadLink);
  }, []);

  return (
    <div className={styles.container__slider__hero}>
      <Header />
      {isClient && (
        <Swiper
          className={styles.customSwiper}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          preloadImages={true}
          lazy={{ loadPrevNext: true, loadPrevNextAmount: 2, checkInView: true }}
          modules={[Navigation, Pagination, Autoplay, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          a11y={{
            prevSlideMessage: 'Diapositiva anterior',
            nextSlideMessage: 'Siguiente diapositiva',
            paginationBulletMessage: 'Ir a la diapositiva {{index}}',
          }}
        >
          <SwiperSlide>
            <LocalizadoresHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.localizadores}
              priority={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LlamadorMeserosHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.llamadorMeseros}
            />
          </SwiperSlide>
          <SwiperSlide>
            <EnfermeriaHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.enfermeria}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TurnoMasterHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.turnoMaster}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TurnoExpressHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.turnoExpress}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DispensadorTiquetesHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.dispensadorTiquetes}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RollosTurnosHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.rollosTurnos}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RollosTermicosHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.rollosTermicos}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CalificadorHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.calificador}
            />
          </SwiperSlide>
          <SwiperSlide>
            <EncuestaVirtualHeroSection
              hideHeader={true}
              backgroundTransparent={true}
              boton={botonesPorHero.encuestaVirtual}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
