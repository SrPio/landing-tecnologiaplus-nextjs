"use client";

import { useState, useRef } from "react";
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
import classNames from "classnames";

const images = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689237/13_4x-8_5_ssc9ik.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689238/12_4x-8_3_j7nede.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689239/11_4x-8_3_b5gubu.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742650043/Frame_1_1_vd55bu.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743619582/Frame_1_19_k6f9dp.webp",
];

const alternativeImages = [
  {
    name: "Rojo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742935712/Frame_2_malazk.webp",
  },
  {
    name: "Azul",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742935905/Frame_2_2_vdocq8.webp",
  },
  {
    name: "Verde",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742936012/Frame_2_4_rrj0or.webp",
  },
  {
    name: "Amarillo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742935960/Frame_2_3_o4fazq.webp",
  },
  {
    name: "Morado",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742935833/Frame_2_1_sdzueu.webp",
  },
];

function MobileProductGallery() {
  const mainSwiperRef = useRef(null);
  const [currentImages, setCurrentImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAlternative = alternativeImages.some(
    (img) => img.url === currentImages[0]
  );
  const isGallery = currentImages === images;

  const [isSwitchingImages, setIsSwitchingImages] = useState(false);

  const handleThumbnailClick = (imageSet, index) => {
    setIsSwitchingImages(true); // Evita que Swiper sobreescriba el índice
    setCurrentImages(imageSet);
    setTimeout(() => {
      setCurrentIndex(index);
      if (mainSwiperRef.current) {
        mainSwiperRef.current.swiper.slideTo(index, 0);
      }
    }, 10);
  };

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
        <h1>DISPENSADOR DE TICKETS</h1>
        <p>
          ¡Adiós al desorden y las filas! con el dispensador de tiquetes tipo
          caracol
        </p>
      </div>

      <Swiper
        ref={mainSwiperRef}
        modules={[Navigation, Pagination]}
        pagination={isAlternative ? false : { clickable: true }}
        loop={true}
        className={styles.mainSwiper}
        onSlideChange={(swiper) => {
          if (!isSwitchingImages) {
            setCurrentIndex(swiper.realIndex);
          }
        }}
        onTransitionEnd={() => setIsSwitchingImages(false)}
      >
        {currentImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={typeof img === "string" ? img : img.url}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isAlternative ? (
        <div className={styles.colorNameContainer}>
          <h3>{alternativeImages[currentIndex]?.name}</h3>
          <div className={styles.container__colors}>
            {alternativeImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.technical__circle__figure} ${
                  styles["color__" + image.name] // Usa image.name en lugar de index
                } ${currentIndex === index ? styles.selected : ""}`}
                onClick={() =>
                  handleThumbnailClick(
                    alternativeImages.map((alt) => alt.url),
                    index
                  )
                }
              ></div>
            ))}
          </div>
        </div>
      ) : null}

      <div className={styles.thumbs__container}>
        <h3>Galería</h3>
        <div className={styles.thumbsRow}>
          {images.map((img, index) => (
            <div
              key={index}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: isGallery && currentIndex === index,
              })}
              onClick={() => handleThumbnailClick(images, index)}
            >
              <img src={img} alt={`Thumbnail ${index}`} />
            </div>
          ))}
        </div>

        <h3>Colores</h3>
        <div className={styles.thumbsRow}>
          {alternativeImages.map((img, index) => (
            <div
              key={index}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: !isGallery && currentIndex === index,
              })}
              onClick={() =>
                handleThumbnailClick(
                  alternativeImages.map((alt) => alt.url),
                  index
                )
              }
            >
              <img src={img.url} alt={img.name} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container__info__products}>
        <p>
          Dispensador de Tiquetes para organizar filas, tiene forma de caracol
          para tomar el turno fácilmente. Ideal para salas de espera en sector
          salud y servicios. Fácil instalación en pared o mostrador.
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
