import style from "./CalificadorProductsSection.module.scss";

function CalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.product__item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738679321/Group_1_fo9nmk.webp"
            alt="Rollos de dispositivo calificador"
          />
          <div className={style.btn__container}>
            <p className={style.selling__counter}>0000 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
        <div className={style.product__item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738678296/Group_2_fpyzaa.webp"
            alt="Imagen de aviso de pared"
          />
          <div className={style.btn__container}>
            <p className={style.selling__counter}>0000 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalificadorProductsSection;
