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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743018206/5_4x-8_1_v0uhtd.webp"
            alt="Rollos para impresora térmica personalizados"
          />
          <div className={styles.hero__text}>
            <h1>Numeración clara</h1>
            <p>
              y corte preciso para agilizar
              <br />
              la atención de turnos.
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
          <div className={styles.hero__text__mobile}>
            <h1>
              Numeración clara y corte preciso para agilizar la atención de
              turnos.
            </h1>
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
