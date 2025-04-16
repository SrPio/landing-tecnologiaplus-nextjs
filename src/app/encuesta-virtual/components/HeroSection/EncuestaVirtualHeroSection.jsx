import styles from "./EncuestaVirtualHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function EncuestaVirtualHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607993/Imagen_principal_2x-8_pc1qfd.webp"
          alt="Software de encuestas en línea"
        />

        <div className={styles.hero__text}>
          <h1>
            Encuesta virtual:
            <br />
            Detecta los puntos fuertes
          </h1>
          <p>y como mejorar tu negocio.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>Encuesta virtual:</h1>
          <p>
            Detecta los puntos fuertes y
            <br />
            como mejorar tu negocio.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744780300/1_4x-8_2_ezutdl_1_jgjhbv.webp"
          alt="Calificador de servicio al cliente"
        />
      </div>
    </section>
  );
}

export default EncuestaVirtualHeroSection;
