import styles from "./TurnoMasterHeroSection.module.scss";
import Header from "../../../Header/Header";

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
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462122/4-8_lwh7js.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861623/Group_7_zgut7e.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo__turnoMaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744830279/3-8_jxkhuf.webp"
            alt="Logo TurnoMaster"
          />
          <h1>
            Sistema de turnos
            <span className={styles.hide__mobile}> de espera</span>
          </h1>
          <p>Digitaliza tu sala de espera fácilmente.</p>

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
