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
          alt="Imagen de persona solicitando turno desde casa en su celular"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pedestal_2x-8_eurzvd.webp"
          alt="Imagen de solicitud de turno presencial"
        />
      </div>
    </section>
  );
}

export default TurnoMasterProductsSection;
