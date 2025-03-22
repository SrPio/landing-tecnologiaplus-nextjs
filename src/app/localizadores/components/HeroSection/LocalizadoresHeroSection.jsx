import styles from "./LocalizadoresHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function LocalizadoresHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742225417/Imagen_portada_4x-8_dfrjjg.webp"
          alt="imagen de localizadores"
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

export default LocalizadoresHeroSection;
