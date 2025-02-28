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
            alt="icono de registro hasta 99"
          />
          <p>Registra hasta 99</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_2_4x-8_q91g57.webp"
            alt="icono de dos iconos visibles"
          />
          <p>
            Dos dígitos visibles
            <br />
            en pantalla.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_4x-8_rtz4i6.webp"
            alt="icono de personas"
          />
          <p>
            Agilizar filas en supermercados
            <br />y espacios similares.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de antena"
          />
          <p>
            La comunicación con
            <br />
            el control es inalámbrica.
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_1_4x-8_zo6qki.webp"
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
