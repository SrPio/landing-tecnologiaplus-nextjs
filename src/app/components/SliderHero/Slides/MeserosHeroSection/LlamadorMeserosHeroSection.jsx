import styles from "./LlamadorMeserosHeroSection.module.scss";
import Header from "../../../Header/Header";

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
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462123/1-8_mhpcwo.webp"
          alt="llamador de personal junto al reloj receptor"
        />

        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744780947/4_4x-8_nlf2cd_1_dih39x.webp"
          alt="llamador de personal junto al reloj receptor"
        />

        <div className={styles.hero__text}>
          <h1>Llamador de meseros</h1>
          <p>Un solo toque evita largas esperas</p>
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
