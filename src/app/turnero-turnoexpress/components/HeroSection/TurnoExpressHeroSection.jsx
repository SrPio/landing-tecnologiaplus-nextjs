import styles from "./TurnoExpressHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnoExpressHeroSection() {
  return (
    <section id="hero-section" className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Imagen_bannerprincipal_2x-8_daisi3.webp"
          alt="imagen de rollos para impresora"
        />

        <div className={styles.hero__text}>
          <h1>
            Turnero digital:
            <br />
            ADIOS A LAS FILAS
          </h1>
          <p>Agilidad y orden en cada turno.</p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default TurnoExpressHeroSection;
