import styles from "./CalificadorHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function CalificadorHeroSection() {
  return (
    <section id="hero-section" className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596299/Imagen_principal_2x-8_xvqvel.webp"
          alt="imagen de calificador"
        />

        <div className={styles.hero__text}>
          <h1>Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetuer adipiscing elit,
          </p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default CalificadorHeroSection;
