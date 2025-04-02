import styles from "../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689242/8_4x-8_2_twguhd.webp"
            alt="imagen de usuario tomando turno"
          />
          <p>
            1. Usuario toma un número de turno{" "}
            <br className={styles.hide__on__mobile} />
            en el dispensador tipo caracol.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689241/9_4x-8_2_cldmeo.webp"
            alt="imagen de usuario esperando ser llamado"
          />
          <p>2. Usuario espera que lo llamen en la pantalla.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689243/7_4x-8_1_ek8a7o.webp"
            alt="imagen de usuario dirigiendose a la ventanilla"
          />
          <p>
            3. Cuando llaman el turno, se dirige a la{" "}
            <br className={styles.hide__on__mobile} />
            ventanilla o módulo de atención.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
