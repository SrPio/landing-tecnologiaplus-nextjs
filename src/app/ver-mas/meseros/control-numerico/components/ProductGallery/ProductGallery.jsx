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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623334/Frame_1_34_g50ooz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624007/Frame_1_37_tfazpz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623899/Frame_1_36_es8iv0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740160659/2_4x-8_4_sqdyh4.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623763/Frame_1_35_gfrxdm.webp",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros">
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
                onClick={() => setSelectedIndex(index)}
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
            {selectedIndex > 0 && (
              <IoIosArrowBack
                className={styles.icon__prev}
                onClick={handlePrevImage}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />
            <IoIosArrowForward
              className={styles.icon__next}
              onClick={handleNextImage}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>Control para llamar empleados</h1>
            <p>000000</p>
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623334/Frame_1_34_g50ooz.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624007/Frame_1_37_tfazpz.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623899/Frame_1_36_es8iv0.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740160659/2_4x-8_4_sqdyh4.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623763/Frame_1_35_gfrxdm.webp",
                alt: "Imagen 5",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623763/Frame_1_35_gfrxdm.webp",
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
