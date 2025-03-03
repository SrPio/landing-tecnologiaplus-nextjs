import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011162/4_4x-8_4_uxxrur.webp"
            alt="icono de vibrar, sonar y alumbra"
          />
          <p>Vibra, suena y alumbra</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de antena"
          />
          <p>
            Largo Alcance, más de
            <br />
            200 metros a la redonda
          </p>
        </div>

        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740174266/9_4x-8_1_qsscxv.webp"
            alt="icono de calidad"
          />
          <p>
            Material: Termoplástico
            <br />
            (resistente a golpes)
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011162/1_4x-8_6_aj3hcn.webp"
            alt="icono compatibilidad"
          />
          <p>
            Capacidad:
            <br />
            La cantidad es según la
            <br />
            necesidad. Pueden tener
            <br />
            varias bases de recarga.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono caseta"
          />
          <p>
            Tipos de USO:
            <br />
            Áreas de espera y
            <br />
            zonas de comidas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_6_4x-8_bmmdoa.webp"
            alt="icono de enchufe"
          />
          <p>
            Requerimiento:
            <br />
            Conexión eléctrica
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254431/16_4x-8_pcbsng.webp"
            alt="icono de batería"
          />
          <p>
            Duración de la batería:
            <br />
            Más de 3 horas por fuera
            <br />
            de la base de recarga.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono de Tecnología Plus"
          />
          <p>Marca</p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
