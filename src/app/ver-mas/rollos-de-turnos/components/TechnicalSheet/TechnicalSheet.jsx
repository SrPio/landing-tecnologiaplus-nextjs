import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762760/2_4x-8_5_k1yidc.webp"
            alt="icono tiquete"
          />
          <p>
            Material:
            <br />
            papel bond
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
            Áreas de espera general donde
            <br />
            hay una o varias filas de espera.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689277/2_4x-8_4_otmwfs.webp"
            alt="icono de numero"
          />
          <p>
            Agiliza el llamado de turnos
            <br />
            de manera ordenada.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762760/1_4x-8_5_pbgbpq.webp"
            alt="icono varias opciones de numeración"
          />
          <p>
            Varias opciones
            <br />
            de numeración
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
