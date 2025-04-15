import style from "./TurnoMasterProductsSection.module.scss";

function TurnoMasterProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Dos formas de solicitar el turno</h2>
      <a
        className={style.card__btn}
        href="https://wa.me/573227347971"
        target="_blank"
        rel="noreferrer"
      >
        ¡Quiero más información!
      </a>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860442/turno_en_casa_2x-8_szazfa.webp"
          alt="Como solicitar el turno desde casa"
          className={style.img__desktop}
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994791/8_4x-8_xto11r.webp"
          alt="Como solicitar el turno desde casa"
          className={style.img__mobile}
        />
        <a
          className={style.card__btn__mobile}
          href="https://wa.me/573227347971"
          target="_blank"
          rel="noreferrer"
        >
          ¡Quiero más información!
        </a>

        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994790/9_4x-8_zejb3t.webp"
          alt="Como solicitar el turno de manera presencial"
          className={style.img__mobile}
        />

        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pedestal_2x-8_eurzvd.webp"
          alt="Como solicitar el turno de manera presencial"
          className={style.img__desktop}
        />
      </div>
    </section>
  );
}

export default TurnoMasterProductsSection;
