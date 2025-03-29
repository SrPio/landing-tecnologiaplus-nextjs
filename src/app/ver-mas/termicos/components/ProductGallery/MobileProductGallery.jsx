"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638695/Frame_1_60_sl57gi.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/2_2x-100_jikuc2.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/3_2x-100_lqfj29.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/4_2x-100_xp8nfs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/5_2x-100_tqczvp.webp",
  ];

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
      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
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
        <div className={styles.container__titles}>
          <h1>ROLLOS TÉRMICOS</h1>
          <p>Rollos para impresora térmica</p>
        </div>

        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573227347971" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
          </a>
          <h3>¿Tienes preguntas?</h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut Wisi enim ad io
        </p>
      </div>
    </div>
  );
}

export default MobileProductGallery;
