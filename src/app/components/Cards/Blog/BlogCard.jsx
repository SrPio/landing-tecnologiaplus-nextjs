import React from "react";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import style from "./BlogCard.module.scss";

const BlogCard = ({
  title,
  description,
  imageSrc,
  altText,
  link,
  customClass,
  width, // Nuevo prop para cambiar ancho
  height, // Nuevo prop para cambiar alto
  titleFontSize, // Nuevo prop para tamaño de fuente del titulo
  descriptionFontSize, // Nuevo prop para tamaño de fuente de la descripción
  imageWidth, // Nuevo prop para ancho de imagen
  imageHeight, // Nuevo prop para alto de imagen
  date, // Nuevo prop para mostrar fecha
  hideSocials = false, // Controla si se ocultan las redes
}) => {
  return (
    <div
      className={classNames(style.blog__card, style[customClass])}
      style={{ width: width || "auto", height: height || "auto" }}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className={style.card__image}
        style={{ width: imageWidth || "100%", height: imageHeight || "auto" }}
      />
      <div className={style.card__content}>
        <h3
          className={style.card__title}
          style={{ fontSize: titleFontSize || "1.5rem" }}
        >
          {title}
        </h3>
        <p
          className={style.card__description}
          style={{
            fontSize: descriptionFontSize
              ? `calc(${descriptionFontSize} * 0.8)`
              : "1rem",
          }}
        >
          {description}
        </p>

        <div className={style.social__container}>
          {date ? (
            <span className={style.card__date}>{date}</span>
          ) : !hideSocials ? (
            <div className={style.social__icons}>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944989/instagram_2x-8_bflzuj.webp"
                alt="Instagram"
                className={style.social__icon}
              />
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944985/facebook_2x-8_sy9pch.webp"
                alt="Facebook"
                className={style.social__icon}
              />
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944987/wpp_2x-8_tsgorp.webp"
                alt="Whatsapp"
                className={style.social__icon}
              />
            </div>
          ) : null}

          <a className={style.card__btn} href={link}>
            Leer más <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
