"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "@/app/rollos-termicos/components/HeroSection/HeroSection";
import TurnosHeroSection from "@/app/rollos-turnos/components/HeroSection/TurnosHeroSection";
import TurnoMasterHeroSection from "@/app/turnomaster/components/HeroSection/TurnoMasterHeroSection";
import Header from "../Header/Header";
import styles from "./SliderHero.module.scss";
import DispensadorTiquetesHeroSection from "@/app/dispensador-tiquetes/components/HeroSection/DispensadorTiquetesHeroSection";
import TurnoExpressHeroSection from "@/app/turnero-turnoexpress/components/HeroSection/TurnoExpressHeroSection";
import CalificadorHeroSection from "@/app/calificador/components/HeroSection/CalificadorHeroSection";
import EncuestaVirtualHeroSection from "@/app/encuesta-virtual/components/HeroSection/EncuestaVirtualHeroSection";
import EnfermeriaHeroSection from "@/app/enfermeria/components/HeroSection/EnfermeriaHeroSection";
import LlamadorMeserosHeroSection from "@/app/llamador-meseros/components/HeroSection/LlamadorMeserosHeroSection";
import LocalizadoresHeroSection from "@/app/localizadores/components/HeroSection/LocalizadoresHeroSection";

export default function SliderHero() {
  return (
    <div className={styles.container__slider__hero}>
      <Header />
      <Swiper
        className={styles.customSwiper} // Agregamos la clase personalizada
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <TurnoMasterHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection hideHeader={true} backgroundTransparent={true} />
        </SwiperSlide>
        <SwiperSlide>
          <TurnosHeroSection hideHeader={true} backgroundTransparent={true} />
        </SwiperSlide>
        <SwiperSlide>
          <DispensadorTiquetesHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TurnoExpressHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalificadorHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EncuestaVirtualHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EnfermeriaHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LlamadorMeserosHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LocalizadoresHeroSection
            hideHeader={true}
            backgroundTransparent={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
