import style from "./SecondaryEncuestaVirtualProductsSection.module.scss";

function SecondaryEncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Reportes gráficos</h2>
            <p>
              con un gráfico para cada
              <br />
              pregunta, reflejando la
              <br />
              percepción real de tus clientes.
            </p>
          </div>
          <div className={style.card}>
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

export default SecondaryEncuestaVirtualProductsSection;
