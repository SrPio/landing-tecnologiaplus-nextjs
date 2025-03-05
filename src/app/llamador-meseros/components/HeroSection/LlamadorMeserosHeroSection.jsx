import styles from "./LlamadorMeserosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function LlamadorMeserosHeroSection() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738804065/nueva_ppal_2x-8_kg8gd9.webp"
          alt="imagen de llamador de personal"
        />

        <div className={styles.hero__text}>
          <h1>
            Llamador de Meseros:
            <br />
            Un solo toque evita largas esperas
          </h1>
          <p>
            Innovador y sin ruidos para
            <br />
            facilitar el llamado de meseros.
          </p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default LlamadorMeserosHeroSection;
