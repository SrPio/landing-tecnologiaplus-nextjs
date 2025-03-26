"use client";

import { useState } from "react";
import styles from "../../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../../components/Header/HeaderAlt.module.scss";
import useDisableRightClick from "../../../../../../../hooks/useDisableRightClick";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420544/12_4x-8_vtpoyn.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420350/11_4x-8_pqdaei.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420544/13_4x-8_ozz7zi.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420350/9_4x-8_hbtk2c.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632937/Frame_1_43_i5i2pk.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741633054/Frame_1_44_wf7za6.webp",
  ];

  const alternativeImages = [
    {
      name: "Negro",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741631974/Frame_2_1_fzhnq5.webp",
    },
    {
      name: "Negro - Rojo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420369/3_4x-8_xhyiqi.webp",
    },
    {
      name: "Negro - Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420353/2_4x-8_iyjgk9.webp",
    },
    {
      name: "Blanco - Negro",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420352/5_4x-8_v44nuq.webp",
    },
    {
      name: "Blanco - Rojo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420351/6_4x-8_kmcnhe.webp",
    },
    {
      name: "Blanco - Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420351/7_4x-8_dfcqqq.webp",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAltIndex, setSelectedAltIndex] = useState(0);
  const [isAlternative, setIsAlternative] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(images.length > 5);

  const handleScrollDown = () => {
    setScrollPosition((prev) => Math.min(prev + 1, images.length - 5));
  };

  const handleScrollUp = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const selectedImage = isAlternative
    ? alternativeImages[selectedAltIndex].url
    : images[selectedIndex];
  const selectedVariantName = isAlternative
    ? alternativeImages[selectedAltIndex].name
    : "Opciones";

  const handleNextImage = () => {
    if (isAlternative) {
      setSelectedAltIndex(
        (prevIndex) => (prevIndex + 1) % alternativeImages.length
      );
    } else {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (isAlternative) {
      setSelectedAltIndex((prevIndex) =>
        prevIndex === 0 ? alternativeImages.length - 1 : prevIndex - 1
      );
    } else {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleSelectAlternative = (img, index) => {
    setSelectedAltIndex(index);
    setIsAlternative(true);
  };

  useDisableRightClick();

  return (
    <section className={styles.hero}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
        }}
      />

      <div className={styles.action__nav}>
        <button onClick={() => window.history.back()}>
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__product__gallery}>
        <div className={styles.container__product__selectorImg}>
          {/* Miniaturas */}
          <div className={styles.container__thumbnails}>
            {showScrollButtons && scrollPosition > 0 && (
              <IoIosArrowUp
                className={styles.scrollUp}
                onClick={handleScrollUp}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            {images
              .slice(scrollPosition, scrollPosition + 5)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => {
                    setIsAlternative(false);
                    setSelectedIndex(scrollPosition + index);
                  }}
                  className={selectedImage === img ? styles.active : ""}
                  style={{ cursor: "pointer" }}
                />
              ))}
            {showScrollButtons && scrollPosition < images.length - 5 && (
              <IoIosArrowDown
                className={styles.scrollDown}
                onClick={handleScrollDown}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}{" "}
            <button
              onClick={() => setIsOpen(true)}
              className={styles.btn__multimedia}
            >
              Galería
            </button>
          </div>

          {/* Imagen Principal */}
          <div className={styles.container__product__selected}>
            <IoIosArrowBack
              className={styles.icon__prev}
              onClick={handlePrevImage}
              onMouseDown={(e) => e.preventDefault()}
            />

            <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />

            <IoIosArrowForward
              className={styles.icon__next}
              onClick={handleNextImage}
              onMouseDown={(e) => e.preventDefault()}
            />

            <div className={styles.pagination}>
              {(isAlternative ? alternativeImages : images).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${
                    index === (isAlternative ? selectedAltIndex : selectedIndex)
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() =>
                    isAlternative
                      ? setSelectedAltIndex(index)
                      : setSelectedIndex(index)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>LLAMADOR V2N</h1>
            <p>Para recibir llamados</p>
          </div>

          {/* Alternativas */}
          <div className={styles.container__products__alternatives}>
            <h2>Elige color</h2>

            {selectedVariantName && (
              <h3 className={styles.variantName}>{selectedVariantName}</h3>
            )}

            <div className={styles.alternative__images}>
              {alternativeImages.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.alternative__item} ${
                    selectedAltIndex === index && isAlternative
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => handleSelectAlternative(img, index)}
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className={styles.thumbnail}
                  />
                </div>
              ))}
              <div className={styles.info__colors}>
                Se puede
                <br />
                personalizar
                <br />
                eI color
              </div>
            </div>
          </div>

          <div className={styles.container__contact__info}>
            <a
              href="https://wa.me/573227347971"
              target="_blank"
              rel="noreferrer"
            >
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

      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tabs={[
          {
            key: "multimedia",
            label: "Galería",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420544/12_4x-8_vtpoyn.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420350/11_4x-8_pqdaei.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420544/13_4x-8_ozz7zi.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420350/9_4x-8_hbtk2c.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632937/Frame_1_43_i5i2pk.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741633054/Frame_1_44_wf7za6.webp",
                alt: "Imagen 6",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632937/Frame_1_43_i5i2pk.webp",
                alt: "Imagen de medidas",
              },
            ],
          },
        ]}
      />
    </section>
  );
}

export default ProductGallery;
