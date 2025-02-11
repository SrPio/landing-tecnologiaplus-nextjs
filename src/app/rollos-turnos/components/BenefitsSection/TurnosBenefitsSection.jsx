import style from "./TurnosBenefitsSection.module.scss";

function TurnosBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        ¿POR QUÉ ELEGIR
        <br />
        NUESTROS ROLLOS
        <br />
        DE TURNOS?
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_1_2x-8_qhtpsh_s64dlx.webp"
            alt="icono de ticket"
          />
          Evita desperdicio - Corte de calidad.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_2_2x-8_q5lixj_n0jsyy.webp"
            alt="icono de tipos de ticket"
          />
          Distintas formas de numeración.
          <br />
          Opción de fabricar según la necesidad.
        </li>
      </ul>
    </section>
  );
}

export default TurnosBenefitsSection;
