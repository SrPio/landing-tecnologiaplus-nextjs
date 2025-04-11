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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639150/Frame_1_61_oytf51.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640170/Frame_1_64_accs3g.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639905/Frame_1_63_oxeepw.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640270/Frame_1_65_xczehx.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997884/4_4x-8_zjhzm0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639603/Frame_1_62_waa0ey.webp",
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
        <h1>Turnero fila única - supermercados</h1>
        <p>
          Una sola fila para agilizar la atención en cajas y mejorar el
          servicio.
        </p>
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
          La Pantalla Fila Única permite organizar a todas las personas en una
          sola fila, la pantalla muestra el numero de caja o ventanilla que está
          libre. Este sistema ha ganado popularidad en supermercados y lugares
          con alta afluencia de personas, ya que mejora el orden, reduce la
          confusión y agiliza la atención al evitar múltiples filas.
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
