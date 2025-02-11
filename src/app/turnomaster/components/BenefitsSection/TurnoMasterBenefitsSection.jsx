import style from "./TurnoMasterBenefitsSection.module.scss";

function TurnoMasterBenefitsSection() {
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860473/icono_1_2x-8_2_ahx7d0.webp"
            alt="icono de controles"
          />
          Personaliza según tus
          <br />
          colores y necesidades.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860472/icono_2_2x-8_2_kjq13k.webp"
            alt="icono gráfico de barras"
          />
          Estadísticas detalladas.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860471/icono_3_2x-8_2_fzlqej.webp"
            alt="icono de medalla de adición"
          />
          Elige servicios adicionales.
        </li>
      </ul>
    </section>
  );
}

export default TurnoMasterBenefitsSection;
