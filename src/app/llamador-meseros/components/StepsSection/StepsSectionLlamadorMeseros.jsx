import style from "./StepsSectionLlamadorMeseros.module.scss";

function StepsSectionLlamadorMeseros() {
  return (
    <section className={style.steps__section}>
      <h2>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card__desktop}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226220/COMO_FUNCIONA_NUEVA_4x-8_x1l4zi.webp"
            alt="imagen de instrucciones usando el llamador"
          />
        </div>
        <div className={style.mobile__cards__container}>
          <div className={style.card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226558/COMO_FUNCIONA_CEL_2_4x-8_rsu66r.webp"
              alt="imagen de instrucciones usando el llamador"
            />
          </div>
          <div className={style.card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226576/COMO_FUNCIONA_CEL_1_4x-8_q0x4n9.webp"
              alt="imagen de instrucciones usando el llamador"
            />
          </div>
          <div className={style.card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226590/COMO_FUNCIONA_CEL_4x-8_qspcoa.webp"
              alt="imagen de instrucciones usando el llamador"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionLlamadorMeseros;
