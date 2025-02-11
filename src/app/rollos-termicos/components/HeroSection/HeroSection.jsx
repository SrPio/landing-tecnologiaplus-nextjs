import styles from "./HeroSection.module.scss";
import Header from "../../../components/Header/Header";

function HeroSection() {
  return (
    <section id="hero-section" className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/tiuyfgrjwlmhj4gdzrtm_lybcwl.webp"
          alt="imagen de rollos para impresora"
        />

        <div className={styles.hero__text}>
          <h1>
            Rollos térmicos en variedad
            <br />
            de tamaños. ¡Somos fabricantes!
          </h1>
          <p>
            Perfectos para tickets, facturas y más.
            <br />
            ¡No busques mas!
          </p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
