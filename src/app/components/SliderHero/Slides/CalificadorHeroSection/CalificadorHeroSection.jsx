import styles from "./CalificadorHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function CalificadorHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
}) {
  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      {!hideHeader && <Header />}
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462121/5-8_hkjqqp.webp"
          alt="Calificador de Servicio"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo__turnoMaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744467470/6-8_xncpdx.webp"
            alt="Logo Opina Master"
          />
          <h1>Calificador de servicio</h1>
          <p>Escucha a tus clientes.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            OpinaMaster:
            <br />
            El calificador de servicio para crecer con la voz de tus clientes.
          </h1>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default CalificadorHeroSection;
