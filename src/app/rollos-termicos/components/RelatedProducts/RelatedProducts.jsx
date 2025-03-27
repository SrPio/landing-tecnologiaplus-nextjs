"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./RelatedProducts.module.scss";

function RelatedProducts({ titleClassName = "" }) {
  const products = [
    {
      name: "TurnoMaster",
      description: "Digitaliza la gestión de turnos.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74.webp",
      sold: "0000 vendidos",
      className: style.turnomaster__card,
    },
    {
      name: "TurnoExpress",
      description: "Rapidez y agilidad para tus filas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
      sold: "692 vendidos",
    },
    {
      name: "Dispensador de tiquetes",
      description: "Complemento práctico para tomar el turno.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp",
      sold: "2686 vendidos",
      className: style.dispensador__card,
    },
  ];

  return (
    <section className={style.related__products}>
      <h2 className={`${style.defaultTitle} ${titleClassName}`}>
        Productos similares
      </h2>
      <div className={style.related__products__container}>
        <div className={style.card__container}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className={`${style.swiper__slide} ${product.className || ""}`}
              >
                <div className={style.related__products__card}>
                  <div className={style.card__info}>
                    <div className={style.card__text}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                    <img
                      loading="lazy"
                      src={product.img}
                      alt={`imagen de ${product.name}`}
                    />
                  </div>
                  <p className={style.selling__counter}>{product.sold}</p>
                  <a className={style.card__btn} href="#">
                    Ver más
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={style.related__products__specs}>
        <ul>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
              alt="icono pulgar arriba"
            />
            <p>Precios Justos</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
              alt="icono de seguridad"
            />
            <p>Protección al comprador</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
              alt="icono de excelencia"
            />
            <p>Garantía superior</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
              alt="icono de Envíos en Colombia y Latinoamérica"
            />
            <p>Envíos en Colombia y Latinoamérica</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RelatedProducts;
