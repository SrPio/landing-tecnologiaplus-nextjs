import styles from "./LlamadorMeserosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function LlamadorMeserosHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742225589/Imagen_portada_4x-8_1_z9hiby.webp"
          alt="Reloj receptor de llamador de meseros"
        />

        <img
          loading="lazy"
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743017344/4_4x-8_nlf2cd.webp"
          alt="Reloj receptor de llamador de meseros"
        />

        <div className={styles.hero__text}>
          <h1>
            Llamador de Meseros:
            <br />
            Un solo toque evita largas esperas.
          </h1>
          <p>Silencioso y de largo alcance.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>Llamador de Meseros: Un solo toque evita largas esperas.</h1>
          <p>Silencioso y de largo alcance.</p>
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

export default LlamadorMeserosHeroSection;
