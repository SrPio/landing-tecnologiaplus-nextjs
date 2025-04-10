import styles from "./LocalizadoresHeroSection.module.scss";
import Header from "../../../components/Header/Header";

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
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742225417/Imagen_portada_4x-8_dfrjjg.webp"
          alt="Localizadores para restaurantes junto a su base de carga"
        />

        <div className={styles.hero__text}>
          <h1>
            Localizadores para restaurantes:
            <br />
          </h1>
          <p>
            Tus clientes disfrutan el tiempo
            <br />
            sin temor de perder el turno.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            Localizadores para restaurantes:
            <br />
          </h1>
          <p>
            Tus clientes disfrutan el tiempo
            <br />
            sin temor de perder el turno.
          </p>
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
