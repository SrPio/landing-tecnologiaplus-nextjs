import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740084322/como_funciona_4x-8_3_mamyu7.webp"
            alt="imagen de personas tomando su turno"
          />
          <p>
            1) El cliente recibe el número
            <br />
            de turno para su pedido
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740084320/como_funciona_1_4x-8_3_tlakgc.webp"
            alt="imagen de persona digitando en el control el numero de turno"
          />
          <p>
            2) Cuando el pedido está listo, digita en
            <br />
            el control el número del turno
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740084320/como_funciona_2_4x-8_3_m8bouq.webp"
            alt="imagen de pantalla mostrando el número de turno"
          />
          <p>
            3) La pantalla suena
            <br />
            avisando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
