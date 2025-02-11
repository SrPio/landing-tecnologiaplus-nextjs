import style from "./SecondaryCalificadorProductsSection.module.scss";

function SecondaryCalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Alertas en tiempo real</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/Alertas_cel_2x-8_tfsbg1.webp"
              alt="imagen de alertas en celular"
            />
          </div>
          <div className={style.card}>
            <h2>Estadísticas</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/Estadi%CC%81sticas_2x-8_dlqi3u.webp"
              alt="imagen de estadísticas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryCalificadorProductsSection;
