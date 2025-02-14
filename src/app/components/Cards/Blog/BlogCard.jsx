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
  date, // Nuevo prop para mostrar fecha
  hideSocials = false, // Controla si se ocultan las redes
}) => {
  return (
    <div
      className={classNames(style.blog__card, style[customClass])}
      style={{ width: width || "auto" }} // Aplica ancho si se proporciona
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className={style.card__image}
      />
      <div className={style.card__content}>
        <h3 className={style.card__title}>{title}</h3>
        <p className={style.card__description}>{description}</p>

        <div className={style.social__container}>
          {/* Si hay fecha, la muestra en lugar de redes */}
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
