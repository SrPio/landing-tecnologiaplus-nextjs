import styles from "./TurnoExpressHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnoExpressHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Imagen_bannerprincipal_2x-8_daisi3.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744772604/Imagen_bannerprincipal_2x-8_daisi3_1_ocb3i9.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>Turnero digital:</span>
            <br />
            Adiós a las filas
          </h1>
          <p>Agilidad y orden en cada turno.</p>
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

export default TurnoExpressHeroSection;
