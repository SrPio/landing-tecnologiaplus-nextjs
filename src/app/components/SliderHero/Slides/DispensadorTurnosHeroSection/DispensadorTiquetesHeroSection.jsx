import styles from "./DispensadorTiquetesHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function DispensadorTiquetesHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/9-8_dmswza.webp"
          alt="Dispensador de tiquetes rojo"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861625/Group_3_nkqa3u.webp"
          alt="Dispensador de tiquetes rojo"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp"
            alt="Logo Turno Express"
          />
          <h1>Dispensador de tickets</h1>
          <p>Para llamar turnos en orden.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : (
            <a
              className={styles.hero__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/dispensador-de-tiquetes"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default DispensadorTiquetesHeroSection;
