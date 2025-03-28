import style from "./EncuestaVirtualBenefitsSection.module.scss";

function EncuestaVirtualBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        CREA ENCUESTAS <br className={style.hide__on__mobile} /> VIRTUALES
        ADAPTADAS <br className={style.hide__on__mobile} />A TU NEGOCIO
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607995/Tablet_2x-8_yfzeko.webp"
            alt="imagen de tablet"
          />
          Tablet o celular.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607999/Link_por_mail_o_RS_2x-8_gfs8zq.webp"
            alt="imagen de celular"
          />
          Link por email
          <br />O redes sociales.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607998/pantalla_tactil_2x-8_brnroa.webp"
            alt="imagen de computador"
          />
          Pantalla táctil.
        </li>
      </ul>
    </section>
  );
}

export default EncuestaVirtualBenefitsSection;
