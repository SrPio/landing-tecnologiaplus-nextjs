import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740670192/17_4x-8_1_peyzbj.webp"
            alt="imagen de paciente presionando el botón de llamado"
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740683059/20_4x-8_tutk0n.webp"
            alt="imagen de enfermera recibiendo el llamado"
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740670192/16_4x-8_1_eielcu.webp"
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
