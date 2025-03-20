import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/13_4x-8_tvckpg.webp"
            alt="imagen de cliente presionando botón"
          />
          <p>
            1) El cliente presiona el botón
            <br />
            para llamar al mesero
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/12_4x-8_tqhx4s.webp"
            alt="imagen de pantalla mostrando número de mesa"
          />
          <p>
            2) La pantalla muestra el número
            <br />
            de la mesa que está llamando.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/14_4x-8_brlm1s.webp"
            alt="imagen de mesero atendiendo llamado"
          />
          <p>3) El mesero atiende el llamado</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
