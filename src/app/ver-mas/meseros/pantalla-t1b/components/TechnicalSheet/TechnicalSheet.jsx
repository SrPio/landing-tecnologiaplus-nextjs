import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de antena"
          />
          <p>
            Recibe los llamados
            <br />
            de forma inalámbrica.
          </p>
        </div>
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
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono de area de espera"
          />
          <p>
            uso: espacios para llamar
            <br />
            meseros o empleados.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_3_4x-8_1_feoyft.webp"
            alt="icono de pantalla visible"
          />
          <p>
            1 llamado visible
            <br />
            en pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065558/ICONO_6_4x-8_1_gx8jhi.webp"
            alt="icono de pantalla de 3 dígitos"
          />
          <p>
            Muestra hasta
            <br />3 dígitos
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
