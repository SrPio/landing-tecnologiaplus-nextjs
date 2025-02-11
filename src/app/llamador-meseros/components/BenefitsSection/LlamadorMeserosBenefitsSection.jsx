import style from "./LlamadorMeserosBenefitsSection.module.scss";

function LlamadorMeserosBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o.webp"
            alt="icono de gota de agua"
          />
          Resiste derrames
          <br />
          accidentales de agua
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4.webp"
            alt="icono de batería"
          />
          Batería de larga duración
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de señal"
          />
          Señal de largo alcance
        </li>
      </ul>
    </section>
  );
}

export default LlamadorMeserosBenefitsSection;
