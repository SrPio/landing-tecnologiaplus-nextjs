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

export default function SliderHero({ botonesPorHero = {} }) {
  return (
    <div className={styles.container__slider__hero}>
      <Header />
      <Swiper
        className={styles.customSwiper}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <TurnoMasterHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.turnoMaster}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.rollosTermicos}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TurnosHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.rollosTurnos}
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
          <TurnoExpressHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.turnoExpress}
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
        <SwiperSlide>
          <EnfermeriaHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.enfermeria}
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
          <LocalizadoresHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.localizadores}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
