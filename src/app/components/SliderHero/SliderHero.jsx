"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../Header/Header";
import styles from "./SliderHero.module.scss";
import RollosTermicosHeroSection from "./Slides/RollosTermicosHero/RollosTermicosHeroSection";
import RollosTurnosHeroSection from "./Slides/RollosTurnosHeroSection/RollosTurnosHeroSection";
import DispensadorTiquetesHeroSection from "./Slides/DispensadorTurnosHeroSection/DispensadorTiquetesHeroSection";
import TurnoExpressHeroSection from "./Slides/TurneroHeroSection/TurnoExpressHeroSection";
import CalificadorHeroSection from "./Slides/CalificadorHeroSection/CalificadorHeroSection";
import EncuestaVirtualHeroSection from "./Slides/EncuestaVirtualHeroSection/EncuestaVirtualHeroSection";
import TurnoMasterHeroSection from "./Slides/TurnomasterHeroSection/TurnoMasterHeroSection";
import EnfermeriaHeroSection from "./Slides/EnfermeriaHeroSection/EnfermeriaHeroSection";
import LlamadorMeserosHeroSection from "./Slides/MeserosHeroSection/LlamadorMeserosHeroSection";
import LocalizadoresHeroSection from "./Slides/LocalizadoresHeroSection/LocalizadoresHeroSection";

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
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <LocalizadoresHeroSection
            hideHeader={true}
            backgroundTransparent={true}
            boton={botonesPorHero.localizadores}
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
    </div>
  );
}
