import style from "./LlamadorMeserosBenefitsSection.module.scss";

function LlamadorMeserosBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS DE
        <br />
        NUESTROS TIMBRES
        <br />
        DE MESA
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024065/15_4x-8_xfnlus.webp"
            alt="icono de alerta"
          />
          Empleados mas alertas
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024067/14_4x-8_fmpqd8.webp"
            alt="icono de reducción de tiempo"
          />
          Reduce tiempos de espera
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024062/13_4x-8_iqmqcf.webp"
            alt="icono de aumento de ventas"
          />
          Aumenta ventas al facilitar
          <br />
          pedidos adicionales
        </li>
      </ul>
    </section>
  );
}

export default LlamadorMeserosBenefitsSection;
