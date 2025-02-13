import style from "./TurnosBenefitsSection.module.scss";

function TurnosBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        ¿POR QUÉ CONFIAR
        <br />
        EN NUESTROS ROLLOS
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
          Evita el desperdicio - Corte limpio y preciso para aprovechar cada
          ticket.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_2_2x-8_q5lixj_n0jsyy.webp"
            alt="icono de tipos de ticket"
          />
          Múltiples estilos de numeración. Opción de fabricar segun la
          necesidad.
        </li>
      </ul>
    </section>
  );
}

export default TurnosBenefitsSection;
