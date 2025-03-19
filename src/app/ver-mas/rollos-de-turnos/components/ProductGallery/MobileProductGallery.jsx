"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import styles from "./ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637848/Frame_1_56_hvhf2o.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762874/16_4x-8_3_iupo2n.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/15_4x-8_5_k9xmxt.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/14_4x-8_4_nzyhjc.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/12_4x-8_4_weks32.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/11_4x-8_4_oumbfg.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/13_4x-8_6_uhgkeo.webp",
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-turnos">
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </a>
      </div>
      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
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

      {/* Miniaturas */}
      <div className="thumbs-container">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView="auto"
          watchSlidesProgress
          freeMode
          spaceBetween={10}
          className="thumbs-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="thumb-slide">
              <img src={image} alt={`Thumbnail ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Información del producto */}
      <div className={styles.container__info__products}>
        <div className={styles.container__titles}>
          <h1>LLAMADOR V2N</h1>
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
