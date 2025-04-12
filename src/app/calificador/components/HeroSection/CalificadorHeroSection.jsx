import styles from "./CalificadorHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function CalificadorHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596299/Imagen_principal_2x-8_xvqvel.webp"
          alt="Calificador de Servicio"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>OpinaMaster:</span>
            <br />
            El calificador de servicio
          </h1>
          <p>
            para crecer con la voz de tus clientes.
            <br />
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            OpinaMaster:
            <br />
            El calificador
            <br />
            de servicio
          </h1>
          <p>
            para crecer con la voz
            <br />
            de tus clientes.
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

export default CalificadorHeroSection;
