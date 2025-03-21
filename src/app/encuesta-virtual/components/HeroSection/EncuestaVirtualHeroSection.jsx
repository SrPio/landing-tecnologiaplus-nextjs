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
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607993/Imagen_principal_2x-8_pc1qfd.webp"
          alt="imagen de encuesta virtual"
        />

        <div className={styles.hero__text}>
          <h1>
            OpinaMaster Virtual:
            <br />
            Descubre lo que
            <br />
            piensan tus clientes
          </h1>
          <p>
            Encuesta Virtual, atrévete a detectar
            <br />
            los puntos fuertes y débiles de tu negocio.
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

export default EncuestaVirtualHeroSection;
