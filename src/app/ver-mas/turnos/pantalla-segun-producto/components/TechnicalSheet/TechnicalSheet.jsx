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
            Registra hasta 99 turnos
            <br />
            en cada pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740069836/Recurso_17_4x-8_o84p1k.webp"
            alt="icono de area de espera y restaurante"
          />
          <p>
            Tipos de uso: Áreas de
            <br />
            espera en general.
            <br />
            Restaurantes autoservicio
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono de Tecnología Plus"
          />
          <p>
            Compatible con:
            <br />
            Equipos de
            <br />
            Tecnología Plus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
