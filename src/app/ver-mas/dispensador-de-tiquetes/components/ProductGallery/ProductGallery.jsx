"use client";

import { useState } from "react";
import styles from "../../../styles/ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689237/13_4x-8_5_ssc9ik.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689238/12_4x-8_3_j7nede.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689239/11_4x-8_3_b5gubu.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689240/10_4x-8_3_wzbfyf.webp",
  ];

  const alternativeImages = [
    {
      name: "Rojo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689245/18_4x-8_1_q4aoji.webp",
    },
    {
      name: "Azul",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689246/17_4x-8_2_enxdqk.webp",
    },
    {
      name: "Verde",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689247/16_4x-8_2_epxcei.webp",
    },
    {
      name: "Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689248/15_4x-8_4_po6uxs.webp",
    },
    {
      name: "Morado",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689236/14_4x-8_3_lazhi9.webp",
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-termicos">
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
            <h1>DISPENSADOR DE TIQUETES</h1>
            <p>Para solicitar turno</p>
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
            <h3>¿Tienes preguntas?</h3>
            <p>
              Puedes llamar al 322 734 7971
              <FaWhatsapp className={styles.icon__wpp} /> +57 316 4682034
            </p>
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689237/13_4x-8_5_ssc9ik.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689238/12_4x-8_3_j7nede.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689239/11_4x-8_3_b5gubu.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689240/10_4x-8_3_wzbfyf.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689245/18_4x-8_1_q4aoji.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689246/17_4x-8_2_enxdqk.webp",
                alt: "Imagen 6",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689247/16_4x-8_2_epxcei.webp",
                alt: "Imagen 7",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689248/15_4x-8_4_po6uxs.webp",
                alt: "Imagen 8",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689236/14_4x-8_3_lazhi9.webp",
                alt: "Imagen 9",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689240/10_4x-8_3_wzbfyf.webp",
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
