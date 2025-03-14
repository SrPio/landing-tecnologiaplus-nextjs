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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998014/icono_4_4x-8_leto92.webp"
            alt="icono de 99"
          />
          <p>
            Registra hasta
            <br />
            99 turnos
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_2_4x-8_q91g57.webp"
            alt="icono de 05"
          />
          <p>1 llamado visible en pantalla</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076255/icono_4x-8_2_tqnirp.webp"
            alt="icono de sala de espera"
          />
          <p>
            Tipos de uso
            <br />
            Área de espera.
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
            inalámbrica.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998011/icono_5_4x-8_datajh.webp"
            alt="icono de sonido"
          />
          <p>
            Alerta con sonido y
            <br />
            número en pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076255/icono_1_4x-8_2_k6mku0.webp"
            alt="icono de control de Tecnología Plus"
          />
          <p>
            Compatible con:
            <br />
            controles que indique
            <br />
            Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_3_4x-8_voj476.webp"
            alt="icono de ojo"
          />
          <p>
            Visibilidad:
            <br />1 a 50 metros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
