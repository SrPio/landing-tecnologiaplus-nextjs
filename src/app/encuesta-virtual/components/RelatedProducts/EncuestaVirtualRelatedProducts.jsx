import style from "./EncuestaVirtualRelatedProducts.module.scss";

function EncuestaVirtualRelatedProducts() {
  return (
    <section className={style.related__products}>
      <h2>Productos similares</h2>
      <div className={style.related__products__container}>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>Calificador de servicios</h3>
              <p>Descripción pequeña aquí</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp"
              alt="imagen de calificador de servición"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>TurnoMaster</h3>
              <p>Digitaliza la gestión de turnos.</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74.webp"
              alt="imagen de TurnoMaster"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>TurnoExpress</h3>
              <p>Rapidez y agilidad para tus filas.</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp"
              alt="imagen de TurnoExpress"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
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
              alt="icono de Envíos en Colombia y Latinoamerica"
            />
            <p>Envíos en Colombia y Latinoamerica</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default EncuestaVirtualRelatedProducts;
