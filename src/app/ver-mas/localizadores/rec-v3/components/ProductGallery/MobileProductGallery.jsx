"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import ServerFirstImage from "../../../../../components/ServerFirstImage/ServerFirstImage";
import style from "../../../../styles/ProductGallery.module.scss";

import Header from "@/app/components/Header/Header";
import { FaWhatsapp } from "react-icons/fa";
import { useClientSwiperFix } from "@/app/utils/swiperClientFix";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import altStyles from "../../../../../components/Header/HeaderAlt.module.scss";

const MobileProductGallery = () => {
  const isClient = useClientSwiperFix();
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741622306/Frame_1_32_fg46my.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/3_4x-8_4_jpow97.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/1_4x-8_7_lw7jp3.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016955/4_4x-8_5_xujts9.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741622477/Frame_1_33_d1et3p.webp",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    setThumbsSwiper(null);
  }, []);

  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 8,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
      el: `.${style.swiper__pagination}`,
    },
    navigation: {
      prevEl: `.${style.swiper__button__prev}`,
      nextEl: `.${style.swiper__button__next}`,
    },
  };

  return (
    <div className={style.mobile__gallery}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
          menuIcon: altStyles.altMenuIcon,
        }}
      />

      <div className={style.mobile__gallery__container}>
        <h1>Rec V3</h1>
        <p>
          Un localizador para clientes con diseño de montura en forma de
          rectángulo. Permite avisarle a sus clientes cuando el pedido está listo
          y tiene un alcance de 200 metros, ideal para restaurantes o plazoletas
          de comida grandes.
        </p>
        <a
          className={style.mobile__gallery__btn}
          href={`https://wa.me/573026055136?text=Hola.%20Estoy%20interesado%20en%20localizadores%20para%20clientes%20Rec%20V3`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/WhatsApp_icon.svg"
            alt="WhatsApp icon"
            width={35}
            height={35}
            style={{ marginRight: "1rem" }}
          />
          Escribenos para cotizar
        </a>
      </div>

      <div className={style.mobile__gallery__swipper__container}>
        <div className={style.swiper__button__prev}>
          <IoChevronBack />
        </div>
        <div className={style.swiper__button__next}>
          <IoChevronForward />
        </div>
        {isClient && (
          <Swiper {...swiperConfig}>
            <SwiperSlide>
              <ServerFirstImage
                src="/localizadores/rec-v3/rec-v3-1.webp"
                alt="Localizador para clientes Rec V3"
                loading="eager"
                width={500}
                height={600}
                priority={true}
                optimizeAfterHydration={true}
                className={style.slide__image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServerFirstImage
                src="/localizadores/rec-v3/rec-v3-2.webp"
                alt="Localizador para clientes Rec V3 vista lateral"
                loading="lazy"
                width={500}
                height={600}
                optimizeAfterHydration={true}
                className={style.slide__image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServerFirstImage
                src="/localizadores/rec-v3/rec-v3-3.webp"
                alt="Localizador para clientes Rec V3 vista superior"
                loading="lazy"
                width={500}
                height={600}
                optimizeAfterHydration={true}
                className={style.slide__image}
              />
            </SwiperSlide>
          </Swiper>
        )}
        <div className={style.swiper__pagination}></div>
      </div>

      <div className={style.container__info__products}>
        <p>
          Con los Localizadores para restaurantes los clientes esperan su pedido
          sin temor de perder el turno, ya que el avisador de pedidos vibra y
          alumbra cuando el pedido está listo, evitando ruidos molestos para los
          demás clientes. Ideal para plazoletas de comida y restaurantes
          autoservicio.
        </p>

        <div className={style.container__contact__info}>
          <a href="https://wa.me/573164682034" target="_blank" rel="noreferrer">
            <FaWhatsapp className={style.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileProductGallery;
