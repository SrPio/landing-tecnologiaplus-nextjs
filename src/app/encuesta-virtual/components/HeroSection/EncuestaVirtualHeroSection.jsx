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
          alt="Software de encuestas en línea"
        />

        <div className={styles.hero__text}>
          <h1>
            OpinaMaster
            <br />
            Descubre lo que piensan
            <br />
            tus clientes con nuestra
            <br />
            encuesta virtual.
          </h1>
          <p>
            Atrévete a detectar los puntos fuertes
            <br />y las oportunidades de mejora en tu negocio.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            OpinaMaster
            <br />
            Descubre lo que piensan tus
            <br />
            clientes con nuestra
            <br />
            encuesta virtual.
          </h1>
          <p>
            Atrévete a detectar los puntos fuertes y las oportunidades de
            mejora en tu negocio.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <img
          loading="lazy"
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743004188/1_4x-8_2_ezutdl.webp"
          alt="Calificador de servicio al cliente"
        />
      </div>
    </section>
  );
}

export default EncuestaVirtualHeroSection;
