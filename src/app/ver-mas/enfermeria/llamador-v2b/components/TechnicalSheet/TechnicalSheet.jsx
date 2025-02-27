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
            Voltaje: DC12V
            <br />
            Batería 23A12V
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de antena"
          />
          <p>
            Rango: hasta 100m o más
            <br />
            con amplificador de señal
            <br />
            Frecuencia: 433MHz
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740421969/18_4x-8_djfe2w.webp"
            alt="icono de 2 teclas de llamado"
          />
          <p>
            2 teclas de llamado:
            <br />
            Llamar
            <br />
            cancelar (para borrar el llamado
            <br />
            cuando atienden el paciente)
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
            enfermera y empleados
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono de compatibilidad"
          />
          <p>
            Compatible con:
            <br />
            Equipos de Tecnología Plus.
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
            alt="icono de resistencia al agua"
          />
          <p>
            Resiste derrames
            <br />
            accidentales de agua
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
