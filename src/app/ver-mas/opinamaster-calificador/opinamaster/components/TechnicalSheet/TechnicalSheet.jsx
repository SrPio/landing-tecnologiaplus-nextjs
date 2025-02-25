import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section id="clients-section" className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img loading="lazy" src="" alt="icono de niveles de calificación" />
          <p>4 niveles de calificación</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740174266/9_4x-8_1_qsscxv.webp"
            alt="icono de calidad"
          />
          <p>Material: Acrílico</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507272/7_4x-8_xw5adb.webp"
            alt="icono de USB"
          />
          <p>
            Alimentación de
            <br />
            energía y transferencia
            <br />
            de datos por USB
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono de Tecnología Plus"
          />
          <p>Marca</p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
