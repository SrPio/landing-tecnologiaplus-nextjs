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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636345/Frame_1_52_eqauh0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507248/5_4x-8_gnfbpe.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507247/6_4x-8_1_twnuh9.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636593/Frame_1_54_ek48dm.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636725/Frame_1_55_y91pzs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636505/Frame_1_53_1_yivyaz.webp",
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
        <h1>CALIFICADOR DE SERVICIO</h1>
        <p>Para crecer con la opinión de tus clientes</p>
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
          Calificador de servicio al cliente para capturar en un segundo la
          percepción real de los usuarios. Además recibe alertas de
          calificaciones negativas en tiempo real, ideal para el sector
          servicios y puntos de atención al cliente.
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
