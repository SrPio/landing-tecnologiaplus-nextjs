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
}) => {
  return (
    <div className={classNames(style.blog__card, style[customClass])}>
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
          <a className={style.card__btn} href={link}>
            Leer más <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
