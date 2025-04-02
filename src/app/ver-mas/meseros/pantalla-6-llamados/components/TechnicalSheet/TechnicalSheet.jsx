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
            alt="icono enchufe"
          />
          <p>
            Conexión eléctrica, <br className={styles.hide__on__mobile} />
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
            Muestra hasta 6 llamados <br className={styles.hide__on__mobile} />
            al mismo tiempo, cada <br className={styles.hide__on__mobile} />
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
            Recibe llamados de forma <br className={styles.hide__on__mobile} />
            inalámbrica, largo Alcance,{" "}
            <br className={styles.hide__on__mobile} />
            50 metros o más con <br className={styles.hide__on__mobile} />
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
            Alerta con sonido y <br className={styles.hide__on__mobile} />
            número en pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono Tecnología Plus"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono compatibilidad"
            className={styles.img__mobile}
          />
          <p>
            Compatible con: <br className={styles.hide__on__mobile} />
            Equipos de <br className={styles.hide__on__mobile} />
            Tecnología Plus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
