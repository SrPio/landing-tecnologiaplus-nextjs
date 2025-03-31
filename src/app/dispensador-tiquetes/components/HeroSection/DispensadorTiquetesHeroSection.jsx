import styles from "./DispensadorTiquetesHeroSection.module.scss";
import Header from "../../../components/Header/Header";

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
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/Imagen_banner_2x-8_qd3lwx.webp"
          alt="Dispensador de tiquetes rojo"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>Dispensador de turnos</span>
            <br />
            Adiós a las filas
          </h1>
          <p>Orden y comodidad en cada turno.</p>
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
