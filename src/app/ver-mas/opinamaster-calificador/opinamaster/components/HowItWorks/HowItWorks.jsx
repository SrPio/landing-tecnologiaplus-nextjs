import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507244/13_4x-8_1_ecteza.webp"
            alt="imagen de persona solicitando asesoría"
          />
          <p>
            1. Al finalizar la asesoría el asesor pide{" "}
            <br className={styles.hide__on__mobile} />
            al cliente evaluar la atención.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507243/14_4x-8_zhsved.webp"
            alt="imagen de persona eligiendo calificación"
          />
          <p>
            2. El cliente elige entre 4{" "}
            <br className={styles.hide__on__mobile} />
            niveles de calificación
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507244/15_4x-8_fcq15o.webp"
            alt="imagen de persona enviando calificación"
          />
          <p>
            3. La información queda registrada en el{" "}
            <br className={styles.hide__on__mobile} />
            sistema para revisar estadísticas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
