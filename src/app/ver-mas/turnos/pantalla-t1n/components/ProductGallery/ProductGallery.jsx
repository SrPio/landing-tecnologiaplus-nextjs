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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress">
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
            <h1>Tunero T1N</h1>
            <p>Para recibir llamados</p>
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076448/5_4x-8_2_enjacr.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076449/4_4x-8_2_u0uop3.webp",
                alt: "Imagen 6",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076449/4_4x-8_2_u0uop3.webp",
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
