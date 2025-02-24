import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432239/9_4x-8_1_vtqhow.webp"
            alt="imagen de persona escaneando código QR"
          />
          <p>
            El usuario se acerca al aviso para
            <br />
            escanear el código QR.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432238/10_4x-8_1_vco8n7.webp"
            alt="imagen de persona seleccionando tipo de pregunta"
          />
          <p>
            Opción amigable con diferentes
            <br />
            tipos de preguntas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432236/11_4x-8_1_cylads.webp"
            alt="imagen de información registrada en sistema"
          />
          <p>
            La información queda registrada en el
            <br />
            sistema para revisar estadísticas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
