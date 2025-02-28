import styles from "./EncuestaVirtualHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function EncuestaVirtualHeroSection() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607993/Imagen_principal_2x-8_pc1qfd.webp"
          alt="imagen de encuesta virtual"
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

export default EncuestaVirtualHeroSection;
