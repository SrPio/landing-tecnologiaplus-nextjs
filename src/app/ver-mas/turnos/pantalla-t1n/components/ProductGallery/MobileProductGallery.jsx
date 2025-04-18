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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741621668/Frame_1_30_dndw16.webp",
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
        <h1>
          Tunero T<span>1</span>-N
        </h1>
        <p>Turnos organizados en una pantalla que refleja tu marca.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
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
          Pantalla digital de gran formato para turnos o llamados con base en
          nuestro equipo más versatil y avanzado TurnoMaster® ahora con un
          módulo de audio especial, que permite al operador atender desde una
          aplicación táctil. No requiere software, es de fácil instalación y
          manejo por parte del operador.
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
