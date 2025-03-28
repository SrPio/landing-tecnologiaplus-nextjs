import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740160660/11_4x-8_e5kor0.webp"
            alt="imagen de cocinero digitando número asignado a mesero"
          />
          <p>
            1. Desde cocina digitan el número asignado a cada
            <br />
            mesero para avisarle que la orden está lista.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041698/21_4x-8_lmx89i.webp"
            alt="imagen de mesero recibiendo alerta en reloj o pantalla"
          />
          <p>
            2. El mesero recibe la alerta en
            <br />
            el reloj o en la pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740160659/13_4x-8_ofe2yc.webp"
            alt="imagen de mesero llevando orden desde cocina"
          />
          <p>3. El mesero va a la cocina</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
