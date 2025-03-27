"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./EncuestaVirtualRelatedProducts.module.scss";

function EncuestaVirtualRelatedProducts() {
  const products = [
    {
      name: "Calificador de servicios",
      description: "Toma decisiones con la opinión de tus clientes",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp",
      sold: "472 vendidos",
      className: style.calificador__card,
    },
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
  ];

  return (
    <section className={style.related__products}>
      <h2>Productos similares</h2>
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

export default EncuestaVirtualRelatedProducts;
