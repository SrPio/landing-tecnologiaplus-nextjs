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
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743773248/NUEVO_ICONO_1_4x-8_xjrawz.webp"
            alt="icono de alerta con sonido y número en pantalla"
            className={styles.img__mobile}
          />
          <p>
            Alerta con sonido y <br className={styles.hide__on__mobile} />
            número en pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            Recibe los llamados <br className={styles.hide__on__mobile} />
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
            alt="icono Tecnología Plus"
          />
          <p>
            Compatible con: <br className={styles.hide__on__mobile} />
            Llamadores de Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono de cabina"
          />
          <p>
            Uso: espacios para llamar <br className={styles.hide__on__mobile} />
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
            1 llamado visible <br className={styles.hide__on__mobile} />
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
            Muestra hasta <br className={styles.hide__on__mobile} />3 dígitos
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
