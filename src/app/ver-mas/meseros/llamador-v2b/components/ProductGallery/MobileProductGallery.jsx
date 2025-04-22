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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/20_4x-8_onyawh.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/19_4x-8_jxofor.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/21_4x-8_1_zysjdc.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/17_4x-8_1_bykczq.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632153/Frame_1_41_whqmii.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743026399/16_4x-8_h030co.webp",
];

const alternativeImages = [
  {
    name: "Blanco - Rojo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684487/Frame_1_25_ljuopc.webp",
  },
  {
    name: "Blanco - Negro",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684487/Frame_1_23_kyutqv.webp",
  },
  {
    name: "Blanco - Amarillo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684487/Frame_1_26_qsl1jr.webp",
  },
  {
    name: "Negro",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684487/Frame_1_27_aoosj5.webp",
  },
  {
    name: "Negro - Rojo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684488/Frame_1_24_qaabts.webp",
  },
  {
    name: "Negro - Amarillo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743684487/Frame_1_28_pujhcp.webp",
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
        <h1>LLAMADOR DE MESEROS E2-B</h1>
        <p>Permite llamar al mesero y borrar el llamado al ser atendido.</p>
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
            {alternativeImages.map((image, index) => {
              // Aquí logueamos la clase generada
              const className = `color__${image.name
                .replace(/\s+/g, "_")
                .replace(/-/g, "_")}`;
              console.log("Clase generada:", className);

              return (
                <div
                  key={index}
                  className={`${styles.technical__circle__figure} ${
                    styles[className] || ""
                  } ${currentIndex === index ? styles.selected : ""}`}
                  onClick={() =>
                    handleThumbnailClick(
                      alternativeImages.map((alt) => alt.url),
                      index
                    )
                  }
                ></div>
              );
            })}
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
          Llamado de meseros con diseño ergonómico y alta resistencia para
          mejorar la atención en el sector gastronómico, ideal para
          restaurantes, bares y clubes. Solución práctica que agiliza la
          atención y brinda mayor comodidad a los clientes.
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
