import style from "./TurnoExpressProductsSection.module.scss";

function TurnoExpressProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Una Pantalla de Turnos para cada Necesidad
      </h2>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp"
              alt="imagen del turnero T1B"
            />
            <h3>Turnero T1b</h3>
            <p>294 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T1N_2x-8_r4igzs.webp"
              alt="imagen del turnero T1N"
            />
            <h3>Turnero T1N</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Fila_unica_2x-8_iejxvf.webp"
              alt="imagen del turnero de pantalla Fila única"
            />
            <h3>Pantalla fila única</h3>
            <p>32 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T3_2x-8_ypmexo.webp"
              alt="imagen del turnero T3"
            />
            <h3>Turnero T3</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
        <h2>Turneros Digitales Personalizados</h2>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431730/Segun_producto_2x-8_fepwc0.webp"
              alt="imagen del turnero según producto"
            />
            <h3>Turnero según producto</h3>
            <p>280 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431729/T3_con_logo_2x-8_ofmcyp.webp"
              alt="imagen del turnero T3 con logo"
            />
            <h3>Turnero T3 - con logo</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>

        <p>
          Dale a tus clientes la comodidad que merecen con Turno Express.
          Nuestro Turnero digital elimina las aburridas filas, brindando orden y
          comodidad para tu equipo de trabajo y para tus clientes. Con nuestra
          pantalla de turnos ayudas a mejorar el servicio y los tiempos de
          atención, mientras tus clientes esperan el turno de una forma más
          cómoda y sin estrés porque sabrán exactamente cuantos turnos faltan
          para ser atendidos.{" "}
        </p>
      </div>
    </section>
  );
}

export default TurnoExpressProductsSection;
