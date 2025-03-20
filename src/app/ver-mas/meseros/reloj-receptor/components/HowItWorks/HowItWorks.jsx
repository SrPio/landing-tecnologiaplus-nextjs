import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740252975/20_4x-8_onglwi.webp"
            alt="imagen de cliente presionando botón"
          />
          <p>
            1. El cliente presiona el botón
            <br />
            para llamar al mesero
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740252975/19_4x-8_jto88r.webp"
            alt="imagen de mesero recibiendo alerta en reloj"
          />
          <p>
            2. El mesero recibe una alerta en el reloj, este vibra y le
            <br />
            muestra la mesa de donde están llamando
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740252975/21_4x-8_hzykoo.webp"
            alt="imagen de mesero atendiendo llamado"
          />
          <p>
            3. El mesero atiende el llamado y presiona
            <br />
            la tecla CANCELAR para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
