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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623334/Frame_1_34_g50ooz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624007/Frame_1_37_tfazpz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623899/Frame_1_36_es8iv0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041711/20_4x-8_vcvvlc.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623763/Frame_1_35_gfrxdm.webp",
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
        <h1>CONTROL NUMÉRICO</h1>
        <p>Para llamar empleados o meseros desde cocina</p>
      </div>

      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información del producto */}
      <div className={styles.container__info__products}>
        <p>
          Facilita la comunicación entre tus empleados con este práctico control
          que permite llamar uno o varios empleados al mismo tiempo. Ideal para
          restaurantes, hoteles y fábricas, agiliza la coordinación del equipo.
          ¡Responde a cada solicitud sin demoras!
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
