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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/2_4x-8_1_qcs5ym.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476842/Frame_1_10_gjnhca.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640914/Frame_1_67_xia2au.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476255/Frame_1_6_ao3mbn.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476562/Frame_1_9_gvix9n.webp",
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
          Pantalla T<span>1</span>B de <span>1</span> llamado
        </h1>
        <p>Muestra 1 llamado en pantalla, hasta 15 en cola.</p>
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
          Pantalla para visualizar llamados del timbre de mesa. Facilita la
          atención al ser visible por varios meseros al mismo tiempo. Ideal para
          restaurantes, bares y clubes en areas con menos de 15 mesas.
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
