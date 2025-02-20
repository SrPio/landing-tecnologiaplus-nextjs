import styles from "./ControlsOptions.module.scss";

function ControlsOptions() {
  return (
    <section className={styles.ControlsOptions__container}>
      <h2>Opciones de controles</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076453/control_1_4x-8_irysjd.webp"
            alt="imagen de Control de 1 tecla"
          />
          <div>
            <h3>Control de 1 tecla</h3>
            <p>
              Solamente permite avanzar en orden.
              <br />
              Medidas: 5cm x 3cm x 8cm.
              <br />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076445/contro_4x-8_esbfwc.webp"
            alt="imagen de Control de 2 teclas"
          />
          <div>
            <h3>Control de 2 teclas</h3>
            <p>
              Teclas: Avanzar y retroceder.
              <br />
              Medidas: 5cm x 3cm x 8cm.
              <br />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076454/control_4x-8_xsgy4z.webp"
            alt="imagen de pantalla mostrando el número de turno"
          />
          <div>
            <h3>Control con números</h3>
            <p>
              Permite avanzar, repetir,
              <br />
              y llamar cualquier número.
              <br />
              Medidas: 6cm x 3.5cm x 12.5cm.
              <br />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlsOptions;
