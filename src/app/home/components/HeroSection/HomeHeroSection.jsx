import styles from "./HomeHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function HomeHeroSection() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944991/imagen_ppal_2x-8_2_bccsu0.webp"
          alt="imagen de localizadores"
        />

        <div className={styles.hero__text}>
          <h1>
            Sistemas de llamado
            <br />
            inalámbrico para mejorar
          </h1>
          <p>la atención al cliente</p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
