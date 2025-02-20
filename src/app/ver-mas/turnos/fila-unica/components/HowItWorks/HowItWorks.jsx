import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_4x-8_fug49b.webp"
            alt="imagen de personas esperando su turno"
          />
          <p>
            El usuario hace la fila y se dirige al
            <br />
            número de caja que muestra la pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_1_4x-8_ikcgrd.webp"
            alt="imagen de persona atendida en caja"
          />
          <p>EI usuario es atendido en la caja</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_2_4x-8_vjoxua.webp"
            alt="imagen de cajera accionando botón de siguiente turno"
          />
          <p>
            Cada cajera tiene 1 control para
            <br />
            indicar cuando quedan libres.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
