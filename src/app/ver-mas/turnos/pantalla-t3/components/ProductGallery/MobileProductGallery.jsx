"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../../components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741478142/Frame_1_11_vofqtl.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741478238/Frame_1_12_cblm9g.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741477909/Frame_1_13_kluuxj.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741464626/3_4x-8_11_tpwt5y.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741479020/Frame_1_14_wugkwy.webp",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.mobileGallery}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
          menuIcon: altStyles.altMenuIcon,
        }}
      />

      <div className={styles.action__nav}>
        <button onClick={() => window.history.back()}>
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__titles}>
        <h1>TURNERO T3 - MÓDULO TURNO</h1>
        <p>
          Resalta tu marca, llama los turnos en orden y muestra el número de
          ventanilla
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={styles.mainSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={`slide-${img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'))}`}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.container__info__products}>
        <p>
          Turnero digital con espacio para el logo, permite llamar turnos en
          orden y mostrar el número de ventanilla libre. Ideal para salas de
          espera con varias ventanillas de atención. Eleva la imagen de tu
          empresa con una pantalla personalizada.
        </p>

        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573227347971" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
