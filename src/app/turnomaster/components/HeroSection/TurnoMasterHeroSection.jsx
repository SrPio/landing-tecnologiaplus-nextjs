import styles from "./TurnoMasterHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnoMasterHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860875/imagen_ppal_2x-8_1_cpkvb2.webp"
          alt="imagen de localizadores"
        />
        <img
          loading="lazy"
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743016309/3_4x-8_1_lidcip.webp"
          alt="imagen de localizadores"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>TurnoMaster:</span>
            <br />
            Sistema de turnos de espera
          </h1>
          <p>Lleva tu sala de espera al siguiente nivel</p>

          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
        <div className={styles.hero__text__mobile}>
          <h1>TurnoMaster: Sistema de turnos de espera</h1>
          <p>Lleva tu sala de espera al siguiente nivel</p>

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

export default TurnoMasterHeroSection;
