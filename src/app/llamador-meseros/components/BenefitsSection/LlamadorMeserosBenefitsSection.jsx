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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o.webp"
            alt="icono de gota de agua"
          />
          Empleados mas alertas
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4.webp"
            alt="icono de batería"
          />
          Reduce tiempos de espera
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de señal"
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
