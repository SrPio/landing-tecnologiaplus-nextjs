import style from "./StepsSectionCalificador.module.scss";

function StepsSectionCalificador() {
  return (
    <section className={style.steps__section}>
      <h2>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/1_2x-8_uapzf4.webp"
            alt="imagen de asesor hablando con el cliente"
          />
          <div className={style.text__container}>
            <div className={style.number}>1</div>
            <p>
              Al finalizar la asesoría el asesor pide al cliente evaluar la
              atención.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/2_2x-8_uiwi6q.webp"
            alt="imagen de encuesta y sus opciones"
          />
          <div className={style.text__container}>
            <div className={style.number}>2</div>
            <p>
              El cliente elige entre 4
              <br />
              niveles de calificación
            </p>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/3_2x-8_x3j9tc.webp"
            alt="imagen de asesor hablando con el cliente"
          />
          <div className={style.text__container}>
            <div className={style.number}>3</div>
            <p>
              La información queda
              <br />
              registrada en el sistema
              <br />
              para revisar estadísticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionCalificador;
