import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section id="clients-section" className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254431/16_4x-8_pcbsng.webp"
            alt="icono batería"
          />
          <p>
            Batería: Se recarga tipo
            <br />
            celular, duración entre 1 y
            <br />3 días. Incluye cargador.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254435/8_4x-8_ppgjyp.webp"
            alt="icono de alfanumerica"
          />
          <p>Alfanumérica</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254424/14_4x-8_1_n708uh.webp"
            alt="icono de enchufe"
          />
          <p>
            Incluye adaptador y
            <br />
            cable de conexión
            <br />
            eléctrica.
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740411505/nuevo_4x-8_nqits1.webp"
            alt="icono de diferentes tipos de aviso"
          />
          <p>
            Tipo de aviso:
            <br />
            vibración, sonido y luz
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

        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/7_4x-8_1_ptxtfo.webp"
            alt="icono de gotas"
          />
          <p>
            Resiste derrames
            <br />
            accidentales de agua.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740503168/6_4x-8_jbsk2k.webp"
            alt="icono de hospital"
          />
          <p>
            Ideal en espacios para llamar
            <br />
            enfermera y empleados.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254433/9_4x-8_y7wpo5.webp"
            alt="icono de 4 llamados visibles"
          />
          <p>
            4 llamados visibles
            <br />
            en pantalla
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
