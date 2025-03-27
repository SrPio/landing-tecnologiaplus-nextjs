import style from "./LocalizadoresSecondaryProductsSection.module.scss";

function LocalizadoresSecondaryProductsSection() {
  return (
    <>
      <section className={`${style.products__section}  ${style.bg__section}`}>
        <div className={style.products__container}>
          <div
            className={`${style.products__card__container} ${style.products__card__container__variant}`}
          >
            <div className={style.card}>
              <div>
                <h3>REC V3</h3>
                <a
                  className={style.card__btn}
                  href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/localizadores/rec-v3"
                >
                  Ver más
                </a>
                <p>1.948 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738855044/rec_v3_1_2x-8_ctzrqp.webp"
                alt="imagen de localizador REC V3"
              />
            </div>
            <img
              className={style.separator}
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851946/linea_2x-8_n80wv9.webp"
              alt="Separador"
            />
            <div className={style.card}>
              <div>
                <h3>CIR C2</h3>
                <a
                  className={style.card__btn}
                  href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/localizadores/cir-c2"
                >
                  Ver más
                </a>
                <p>1.630 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851948/cir_c2_1_2x-8_lb8ufb.webp"
                alt="imagen de localizador CIR C2"
              />
            </div>
          </div>
          <p>
            Localizador de clientes con señal de largo alcance y material
            resistente a golpes o caidas.
          </p>
        </div>
      </section>
      <section className={`${style.products__section} ${style.video__section}`}>
        <div className={style.products__container}>
          <h2>Veamos funcionar nuestros Localizadores para Restaurantes</h2>
          <div className={style.products__card__container}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aB7FLAPCCJ8?si=COqYK2Ftu2pBov47"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/b2nlu7sOlcI?si=4sszI32LRP3rQTlP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocalizadoresSecondaryProductsSection;
