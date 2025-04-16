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
          className={styles.hero__img__desktop}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744781254/Imagen_portada_4x-8_dfrjjg_1_1_lvtv17.webp"
          alt="Localizadores para clientes"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744781156/Imagen_portada_4x-8_dfrjjg_1_cg4eew.webp"
          alt="Localizadores para clientes"
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
