import style from "./TurnoMasterBenefitsSection.module.scss";

function TurnoMasterBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        Ventajas de nuestro
        <br />
        Sistema de Turnos
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860473/icono_1_2x-8_2_ahx7d0.webp"
            alt="icono de controles"
          />
          Personaliza según colores
          <br />y necesidades de tu marca
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860472/icono_2_2x-8_2_kjq13k.webp"
            alt="icono gráfico de barras"
          />
          Datos y estadisticas para evaluar
          <br />y controlar la calidad del servicio.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860471/icono_3_2x-8_2_fzlqej.webp"
            alt="icono de medalla de adición"
          />
          Agrega funciones extra
          <br />
          según tus necesidades
        </li>
      </ul>
    </section>
  );
}

export default TurnoMasterBenefitsSection;
