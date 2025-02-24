import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section id="clients-section" className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono de Tecnología Plus"
          />
          <p>Marca</p>
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432635/6_4x-8_1_ixcizk.webp"
            alt="icono de cinta"
          />
          <p>
            Con adhesivo para
            <br />
            pegar en la pared
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/7_4x-8_1_ptxtfo.webp"
            alt="icono de gotas"
          />
          <p>
            Resiste derrames
            <br />
            de agua el aviso de acrílico
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
