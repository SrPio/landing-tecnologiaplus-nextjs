import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section id="clients-section" className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_6_4x-8_bmmdoa.webp"
            alt="icono enchufe"
          />
          <p>
            Conexión eléctrica,
            <br />
            es inalámbrica.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186438/6_4x-8_fayirq.webp"
            alt="icono de alfanumerica"
          />
          <p>Alfanumérica</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186438/7_4x-8_lablxj.webp"
            alt="icono de llamados"
          />
          <p>
            Muestra hasta 6 llamados
            <br />
            al mismo tiempo, cada
            <br />
            llamado hasta 3 dígitos.
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_5_4x-8_1_wkvdpj.webp"
            alt="icono de alerta con sonido y número en pantalla"
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
            alt="icono Tecnología Plus"
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
