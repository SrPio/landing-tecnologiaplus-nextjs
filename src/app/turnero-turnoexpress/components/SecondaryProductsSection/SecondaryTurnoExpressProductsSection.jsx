import style from "./SecondaryTurnoExpressProductsSection.module.scss";

function SecondaryTurnoExpressProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Dispensador de tiquetes</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738789798/Dispensador_2x-8_soj9hp.webp"
              alt="imagen de dispensador de turnos"
            />
            <p>2686 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/dispensador-de-tiquetes"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <h2>Rollos de turnos</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738448114/Rollos_de_turnos_2x-8_ovbwlu.webp"
              alt="imagen del turnero T3 con logo"
            />
            <p>8527 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/rollos-de-turnos"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryTurnoExpressProductsSection;
