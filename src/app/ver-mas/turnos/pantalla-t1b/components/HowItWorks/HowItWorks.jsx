import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_4x-8_1_kq1e3m.webp"
            alt="imagen de personas recibiendo su turno"
          />
          <p>
            1. El cliente recibe el número
            <br />
            de turno para su pedido
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_1_4x-8_1_mnux8l.webp"
            alt="imagen de persona de caja digitando el numero de turno"
          />
          <p>
            2. Cuando el pedido está listo, digita
            <br />
            en el control el número del turno
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_2_4x-8_1_t1wkij.webp"
            alt="imagen de cliente escuchando la pantalla sonar y reclamando su pedido"
          />
          <p>
            3. La pantalla suena
            <br />
            notificando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
