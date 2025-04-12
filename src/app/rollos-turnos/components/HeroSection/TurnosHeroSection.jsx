import styles from "./TurnosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnosHeroSection({
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
        <div className={styles.central__container}>
          <img
            loading="lazy"
            className={styles.hero__img}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744458412/Nueva_imagen_2x-8_xi5zmr.webp"
            alt="Rollos para impresora térmica personalizados"
          />
          <div className={styles.hero__text}>
            <h1>Numeración clara y corte preciso</h1>
            <p>para agilizar la atención de turnos.</p>
            {boton ? (
              <a className={styles.hero__btn} href={boton.href}>
                {boton.text}
              </a>
            ) : (
              <a
                className={styles.hero__btn}
                href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/rollos-de-turnos"
              >
                Ver más
              </a>
            )}
          </div>
          <div className={styles.hero__text__mobile}>
            <h1>
              Numeración clara
              <br />y corte preciso
            </h1>
            <p>
              para agilizar la atención
              <br />
              de turnos.
            </p>
            {boton ? (
              <a className={styles.hero__btn} href={boton.href}>
                {boton.text}
              </a>
            ) : (
              <a
                className={styles.hero__btn}
                href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/rollos-de-turnos"
              >
                Ver más
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurnosHeroSection;
