import style from "./StepsSectionLlamadorMeseros.module.scss";

function StepsSectionLlamadorMeseros() {
  return (
    <section className={style.steps__section}>
      <h2>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694390/como_funciona_2x-8_trdqwf.webp"
            alt="imagen de instrucciones usando el llamador"
          />
        </div>
      </div>
    </section>
  );
}

export default StepsSectionLlamadorMeseros;
