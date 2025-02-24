import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420410/22_4x-8_siy8li.webp"
            alt="imagen de cliente presionando botón"
          />
          <p>
            El cliente presiona el botón
            <br />
            para llamar al mesero
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420543/21_4x-8_klg7jr.webp"
            alt="imagen de mesero recibiendo llamado"
          />
          <p>
            El mesero recibe el llamado en
            <br />
            alguna de las pantallas o en el reloj
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420354/33_4x-8_taayyo.webp"
            alt="imagen de mesero atendiendo llamado"
          />
          <p>
            El mesero atiende el llamado y presiona la
            <br />
            tecla CANCELAR para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
