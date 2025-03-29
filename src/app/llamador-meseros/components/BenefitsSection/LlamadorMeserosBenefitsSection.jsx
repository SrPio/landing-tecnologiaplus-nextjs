import style from "./LlamadorMeserosBenefitsSection.module.scss";

function LlamadorMeserosBenefitsSection() {
  return (
    <div className={style.video__benefits__container}>
      <section className={style.video__section}>
        <video
          className="w-full h-auto rounded-lg"
          src="https://res.cloudinary.com/ddqh0mkx9/video/upload/v1743107660/COMPRESS_ANIMACIO%CC%81N_FINAL_COM_AJUSTES_nualz4.mp4"
          controls
          preload="none"
          playsInline
        />
      </section>
      <section className={style.benefits__section}>
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
    </div>
  );
}

export default LlamadorMeserosBenefitsSection;
