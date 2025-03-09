import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_6_4x-8_bmmdoa.webp"
            alt="icono de enchufe"
          />
          <p>Conexión eléctrica.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392283/ICONO_1_ctsg4n.svg"
            alt="icono de color"
          />
          <p>Color: blanco</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558125/8_4x-8_aex4cu.webp"
            alt="icono de llamadores"
          />
          <p>
            Cada alarma
            <br />
            funciona hasta
            <br />
            con 8 llamadores.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558126/5_4x-8_utywac.webp"
            alt="icono de alarma"
          />
          <p>
            Se cuelga afuera de la
            <br />
            habitación y alumbra
            <br />
            hasta que atienden el
            <br />
            llamado.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de antena"
          />
          <p>
            Recibe llamados de forma
            <br />
            inalámbrica, largo Alcance,
            <br />
            50 metros o más con
            <br />
            amplificador de señal.
          </p>
        </div>

        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558128/9_4x-8_syembx.webp"
            alt="icono de modo de aviso"
          />
          <p>
            Modo de aviso: suena y
            <br />
            alumbra, opción de
            <br />
            graduar el volumen.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono de compatibilidad"
          />
          <p>
            Compatible con: Equipos
            <br />
            de Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono Tecnología Plus"
          />
          <p>Marca</p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
