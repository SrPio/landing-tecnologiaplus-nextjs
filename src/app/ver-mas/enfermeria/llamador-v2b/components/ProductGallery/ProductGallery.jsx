"use client";

import { useState } from "react";
import styles from "../../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../../components/Header/HeaderAlt.module.scss";
import useDisableRightClick from "../../../../../../../hooks/useDisableRightClick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";
function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/14_4x-8_2_scfi4h.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/13_4x-8_3_sd0pqn.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/15_4x-8_2_zgfpru.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/16_4x-8_ac5yxz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/12_4x-8_1_p45x2c.webp",
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAltImage, setSelectedAltImage] = useState(
    alternativeImages[0].url
  );
  const selectedImage = selectedAltImage || images[selectedIndex];
  const [selectedVariantName, setSelectedVariantName] = useState(
    alternativeImages[0].name
  );

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/enfermeria">
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </a>
      </div>

      <div className={styles.container__product__gallery}>
        <div className={styles.container__product__selectorImg}>
          {/* Miniaturas */}
          <div className={styles.container__thumbnails}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => {
                  setSelectedAltImage(null); // Restablecer la imagen alternativa
                  setSelectedIndex(index); // Actualizar la imagen principal con el índice seleccionado
                }}
                className={selectedImage === img ? styles.active : ""}
                style={{ cursor: "pointer" }}
              />
            ))}
            <button
              onClick={() => setIsOpen(true)}
              className={styles.btn__multimedia}
            >
              Multimedia
            </button>
          </div>

          {/* Imagen Principal */}
          <div className={styles.container__product__selected}>
            {/* Mostrar flechas solo si no hay una imagen alternativa seleccionada */}
            {!selectedAltImage && selectedIndex > 0 && (
              <IoIosArrowBack
                className={styles.icon__prev}
                onClick={handlePrevImage}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />

            {!selectedAltImage && selectedIndex < images.length - 1 && (
              <IoIosArrowForward
                className={styles.icon__next}
                onClick={handleNextImage}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>LLAMADOR V2B</h1>
            <p>Para llamar la enfermera</p>
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
                    selectedAltImage === img.url ? styles.selected : ""
                  }`}
                  onClick={() => {
                    setSelectedAltImage(img.url);
                    setSelectedVariantName(img.name);
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className={styles.thumbnail}
                  />
                </div>
              ))}
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
            label: "Multimedia",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/14_4x-8_2_scfi4h.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/13_4x-8_3_sd0pqn.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668327/15_4x-8_2_zgfpru.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/16_4x-8_ac5yxz.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/12_4x-8_1_p45x2c.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/11_4x-8_1_ls8qsk.webp",
                alt: "Imagen 6",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741475394/Frame_2_xva6io.webp",
                alt: "Imagen 7",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/18_4x-8_u9bwuw.webp",
                alt: "Imagen 8",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/11_4x-8_1_ls8qsk.webp",
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
