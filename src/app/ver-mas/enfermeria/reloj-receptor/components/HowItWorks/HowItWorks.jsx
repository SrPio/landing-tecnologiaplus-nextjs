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
            1. Presiona el botón para <br className={styles.hide__on__mobile} />
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
            2. La enfermera recibe el llamado en la{" "}
            <br className={styles.hide__on__mobile} />
            pantalla o en el reloj receptor
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041523/19_4x-8_eldrap.webp"
            alt="imagen de enfermera atendiendo el llamado"
          />
          <p>
            3. Se atiende el llamado y presiona la tecla{" "}
            <br className={styles.hide__on__mobile} />
            "CANCEL" para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
