"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../../components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import classNames from "classnames";

const images = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/14_4x-8_2_scfi4h.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/13_4x-8_3_sd0pqn.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/15_4x-8_2_zgfpru.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/16_4x-8_ac5yxz.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/12_4x-8_1_p45x2c.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742944133/Frame_1_4_i4ltkl.webp",
];

const alternativeImages = [
  {
    name: "Blanco",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741475394/Frame_2_xva6io.webp",
  },
  {
    name: "Negro",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/18_4x-8_u9bwuw.webp",
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
        <h1>LLAMADOR DE ENFERMERÍA E2 BLANCO</h1>
        <p>Más cerca de tus pacientes.</p>
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
        navigation={true}
      >
        {currentImages.map((img, index) => (
          <SwiperSlide
            key={`slide-${
              typeof img === "string"
                ? img.substring(img.lastIndexOf("/") + 1, img.lastIndexOf("."))
                : img.url.substring(
                    img.url.lastIndexOf("/") + 1,
                    img.url.lastIndexOf(".")
                  )
            }`}
          >
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
          Llamado de enfermería inalámbrico para mejorar la atención en el
          sector salud, ideal para hospitales, clínicas y hogares geriátricos.
          Solución práctica que agiliza la atención y brinda mayor comodidad a
          los pacientes.
        </p>
        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573164682034" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
