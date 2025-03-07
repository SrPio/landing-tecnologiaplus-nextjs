import styles from "./HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671517/12_4x-8_2_qo19se.webp"
            alt="imagen de paciente presionando el botón de llamado"
          />
          <p>
            El paciente presiona el botón
            <br />
            para llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671518/13_4x-8_4_snqnmr.webp"
            alt="imagen de pantalla de enfermera recibiendo el llamado"
          />
          <p>
            La pantalla muestra el número de
            <br />
            la habitación o del baño
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671518/11_4x-8_2_asd27h.webp"
            alt="imagen de enfermera atendiendo el llamado"
          />
          <p>
            Se atiende el llamado y presiona la tecla
            <br />
            "CANCEL" para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
