import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581919/14_4x-8_1_lnmadc.webp"
            alt="imagen de paciente presionando botón de llamado"
          />
          <p>
            1) Presiona el botón para
            <br />
            llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581920/13_4x-8_2_zodkru.webp"
            alt="imagen de la enfermera recibiendo llamado"
          />
          <p>
            2) La enfermera recibe el llamado en la
            <br />
            pantalla o en el reloj receptor
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581919/15_4x-8_1_tnac4x.webp"
            alt="imagen de la enfermera atendiendo llamado"
          />
          <p>
            3) Se atiende el llamado y presiona
            <br />
            la tecla "CANCEL" para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
