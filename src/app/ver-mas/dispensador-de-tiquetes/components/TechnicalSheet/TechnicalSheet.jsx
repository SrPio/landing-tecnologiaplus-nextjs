import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689271/6_4x-8_4_er7odi.webp"
            alt="icono material"
          />
          <p>
            Material:
            <br />
            Acrílico
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689273/5_4x-8_2_hycuha.webp"
            alt="icono de personas"
          />
          <p>
            Es la opción más sencilla
            <br />
            de organizar filas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689274/4_4x-8_3_qytmzj.webp"
            alt="icono de turnos"
          />
          <p>
            Asigna turnos en
            <br />
            orden de llegada.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689276/3_4x-8_3_hdezke.webp"
            alt="icono de sala de espera"
          />
          <p>
            Tipos de uso:
            <br />
            Áreas de espera en general donde
            <br />
            hay una o varias filas de espera.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689277/2_4x-8_4_otmwfs.webp"
            alt="icono números"
          />
          <p>
            Agiliza eI llamado de turnos
            <br />
            de manera ordenada.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689278/1_4x-8_4_dl4ja1.webp"
            alt="icono de tornillo"
          />
          <p>
            Incluye tornillos para
            <br />
            colgarlo en la pared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
