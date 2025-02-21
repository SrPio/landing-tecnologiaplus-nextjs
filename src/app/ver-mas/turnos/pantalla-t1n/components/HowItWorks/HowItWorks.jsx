import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076445/como_funciona_1_4x-8_2_h6qk1q.webp"
            alt="imagen de personas tomando su turno"
          />
          <p>
            Usuario toma un número de turno
            <br />
            en el dispensador tipo caracol.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076445/como_funciona_2_4x-8_2_dgqfek.webp"
            alt="imagen de persona esperando ser llamados por la pantalla"
          />
          <p>
            Usuario espera que lo llamen en la pantalla.
            <br />
            Cada asesor tiene un control inalámbrico para llamar turnos.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076446/como_funciona_4x-8_2_mnetd3.webp"
            alt="imagen de pantalla mostrando el número de turno"
          />
          <p>Muestra el numero del turno.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
