import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016959/14_4x-8_6_xofupb.webp"
            alt="imagen de cliente haciendo pedido y recibiendo localizador"
          />
          <p>
            El cliente hace el pedido y
            <br />
            le entregan un localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016958/15_4x-8_6_sfwzly.webp"
            alt="imagen de persona digitando numero de localizador en control"
          />
          <p>
            Cuando el pedido está listo, digita
            <br />
            en el control el número del localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016957/16_4x-8_5_gfceng.webp"
            alt="imagen de localizador vibrando, alumbra y suena"
          />
          <p>
            El localizador vibra, alumbra y suena,
            <br />
            notificando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
