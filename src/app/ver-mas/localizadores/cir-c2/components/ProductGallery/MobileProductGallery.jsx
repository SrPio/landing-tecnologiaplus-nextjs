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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566172/Frame_1_25_wq4ajj.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
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
        <h1>Localizadores para restaurantes CIR-C2</h1>
        <p>Ideal para autoservicio, sin temor de perder el turno.</p>
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
          Los Localizadores para restaurantes Cir C2 mantienen las ventajas del
          modelo Rec V3 y además funciona con un control separado de los
          localizadores. Ideal para locales de comida que entregan el
          localizador en un punto distinto al de llamado.
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
