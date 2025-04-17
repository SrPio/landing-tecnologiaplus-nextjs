import styles from "./LocalizadoresHeroSection.module.scss";
import Header from "../../../Header/Header";
import OptimizedImage from "../../../OptimizedImage/OptimizedImage";

function LocalizadoresHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
  priority = false,
}) {
  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      {!hideHeader && <Header />}
      <div className={styles.hero__content}>
        <OptimizedImage
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/12_1-8_o5nq6u.webp"
          alt="Localizadores para clientes"
          width={620}
          height={500}
          priority={priority}
        />
        <OptimizedImage
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861573/12_1-8_1_x1xwix.webp"
          alt="Localizadores para clientes"
          width={375}
          height={400}
          priority={priority}
        />

        <div className={styles.hero__text}>
          <h1>Localizadores para restaurantes</h1>
          <p>Tiempo de espera sin temor a perder el turno.</p>
          {boton ? (
            <a 
              className={styles.hero__btn} 
              href={boton.href}
              aria-label="Ver más sobre localizadores para restaurantes"
            >
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresHeroSection;
