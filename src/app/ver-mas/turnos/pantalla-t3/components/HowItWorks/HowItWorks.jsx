import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021819/10_4x-8_6_wenqh9.webp"
            alt="imagen de personas tomando su turno"
          />
          <p>
            Usuario toma un número de turno
            <br />
            en el dispensador tipo caracol.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021837/11_4x-8_7_vnj3jv.webp"
            alt="imagen de usuario esperando ser llamado"
          />
          <p>
            Usuario espera que lo llamen en la pantalla.
            <br />
            Cada asesor tiene un control inalámbrico para llamar turnos.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021837/12_4x-8_6_zwcaxj.webp"
            alt="imagen de pantalla mostrando el número de turno"
          />
          <p>
            Muestra el numero del turno y el modulo a donde
            <br />
            debe dirigirse el cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
