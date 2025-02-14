"use client";
import { useState } from "react";
import styles from "./TermicosProductGallery.module.scss";
import Header from "../../../../components/Header/Header";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "../../../../components/PopUp/Popup";

function TermicosProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/1_2x-100_wutnmk.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/2_2x-100_jikuc2.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/3_2x-100_lqfj29.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/4_2x-100_xp8nfs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/5_2x-100_tqczvp.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section id="hero-section" className={styles.hero}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
        }}
      />
      <div className={styles.action__nav}>
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-termicos">
          <IoIosArrowBack className={styles.icon__back} />
          Volver
        </a>
      </div>

      <div className={styles.container__product__gallery}>
        {/* Miniaturas */}
        <div className={styles.container__thumbnails}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? styles.active : ""}
              style={{
                cursor: "pointer",
              }}
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
          <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h2>ROLLOS TÉRMICOS</h2>
            <p>Rollos para impresora térmica</p>
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
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default TermicosProductGallery;
