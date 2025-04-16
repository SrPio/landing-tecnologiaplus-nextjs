import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/12_4x-8_5_gg4wnr.webp"
            alt="imagen de cliente haciendo pedido y recibiendo localizador"
          />
          <p>
            1. El cliente hace el pedido y{" "}
            <br className={styles.hide__on__mobile} />
            le entregan un localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/13_4x-8_7_jzd9lo.webp"
            alt="imagen de persona digitando número de localizador en control"
          />
          <p>
            2. Cuando el pedido está listo, digita{" "}
            <br className={styles.hide__on__mobile} />
            en el control el número del localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/14_4x-8_5_twqpqp.webp"
            alt="imagen de localizador vibrando, alumbra y suena"
          />
          <p>
            3. El localizador vibra, alumbra y suena,{" "}
            <br className={styles.hide__on__mobile} />
            notificando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
