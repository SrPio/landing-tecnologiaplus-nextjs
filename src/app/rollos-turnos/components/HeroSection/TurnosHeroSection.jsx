import styles from "./TurnosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnosHeroSection() {
  return (
    <section id="hero-section" className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <div className={styles.central__container}>
          <img
            loading="lazy"
            className={styles.hero__img}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Imagen_banner_2x-8_kcq3mt_v22bb7.webp"
            alt="imagen de rollos para impresora"
          />
          <div className={styles.hero__text}>
            <h1>
              Numeración clara y corte
              <br />
              preciso para agilizar
              <br />
            </h1>
            <p>la atención de turnos.</p>
            <a className={styles.hero__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurnosHeroSection;
