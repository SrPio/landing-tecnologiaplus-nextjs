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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566172/Frame_1_25_wq4ajj.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/localizadores">
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
              Multimedia
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
            <h1>CIR C2</h1>
            <p>Localizadores de clientes</p>
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
            Cada kit incluye: Base de recarga con emisor de señal integrado.
            Cantidad de localizadores que el cliente requiera, cada uno con logo
            del cliente en Sticker ultrafuerte. Cable de conexión eléctrica.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566172/Frame_1_25_wq4ajj.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
                alt: "Imagen 5",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
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
