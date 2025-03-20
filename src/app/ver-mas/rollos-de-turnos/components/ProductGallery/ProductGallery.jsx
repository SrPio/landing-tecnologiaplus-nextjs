"use client";

import { useState } from "react";
import styles from "./ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";
import useDisableRightClick from "../../../../../../hooks/useDisableRightClick";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637848/Frame_1_56_hvhf2o.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
  ];

  const alternativeImages = [
    {
      name: "Opciones",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762874/16_4x-8_3_iupo2n.webp",
    },
    {
      name: "Blanco",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/15_4x-8_5_k9xmxt.webp",
    },
    {
      name: "Verde",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/14_4x-8_4_nzyhjc.webp",
    },
    {
      name: "Rosa",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/12_4x-8_4_weks32.webp",
    },
    {
      name: "Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/11_4x-8_4_oumbfg.webp",
    },
    {
      name: "Azul",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/13_4x-8_6_uhgkeo.webp",
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-turnos">
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
              Galería
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
            <h1>ROLLOS DE TURNOS</h1>
            <p>Dispensador de tiquete tipo caracol</p>
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
            label: "Galería",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637848/Frame_1_56_hvhf2o.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762874/16_4x-8_3_iupo2n.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/15_4x-8_5_k9xmxt.webp",
                alt: "Imagen 6",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/14_4x-8_4_nzyhjc.webp",
                alt: "Imagen 7",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/12_4x-8_4_weks32.webp",
                alt: "Imagen 8",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/11_4x-8_4_oumbfg.webp",
                alt: "Imagen 9",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762870/13_4x-8_6_uhgkeo.webp",
                alt: "Imagen 10",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "",
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
