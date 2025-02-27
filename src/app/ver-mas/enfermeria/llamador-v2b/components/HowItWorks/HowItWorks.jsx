import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/10_4x-8_2_xnbpdt.webp"
            alt="imagen de paciente presionando botón"
          />
          <p>
            Presiona el botón para
            <br />
            llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/9_4x-8_1_r2py4s.webp"
            alt="imagen de enfermera recibiendo llamado"
          />
          <p>
            La enfermera recibe el llamado en la
            <br />
            pantalla o en el reloj receptor
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740668328/8_4x-8_1_ewxndx.webp"
            alt="imagen de enfermera atendiendo llamado"
          />
          <p>
            Se atiende el llamado y presiona
            <br />
            la tecla "CANCEL" para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
