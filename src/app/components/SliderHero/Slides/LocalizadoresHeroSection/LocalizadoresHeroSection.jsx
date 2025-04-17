import styles from "./LocalizadoresHeroSection.module.scss";
import Header from "../../../Header/Header";

function LocalizadoresHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/12_1-8_o5nq6u.webp"
          alt="Localizadores para clientes"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744781156/Imagen_portada_4x-8_dfrjjg_1_cg4eew.webp"
          alt="Localizadores para clientes"
        />

        <div className={styles.hero__text}>
          <h1>Localizadores para restaurantes</h1>
          <p>Tiempo de espera sin temor a perder el turno.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresHeroSection;
