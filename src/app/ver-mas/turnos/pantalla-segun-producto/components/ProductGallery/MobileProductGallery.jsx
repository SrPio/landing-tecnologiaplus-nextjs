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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704871/Frame_1_74_a9sxmd.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741705063/Frame_1_76_arw9zm.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742650842/Frame_1_2_gstdv0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704706/Frame_1_73_q4yt1c.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704944/Frame_1_75_neqgln.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
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
        <h1>Turnero Transformer</h1>
        <p>Personalizados según la necesidad.</p>
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
          El Turnero transformer se fabrica según la necesidad, permite asignar
          un consecutivo de turnos diferente para cada producto o servicio.
          Puede funcionar en el sector gastronómico para atender autoservicio o
          en oficinas donde tienen una fila para cada tipo de servicio. Este
          tipo de turnero es ideal para negocios que desean mejorar el llamado
          de turnos sin alterar su forma de trabajar.
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
