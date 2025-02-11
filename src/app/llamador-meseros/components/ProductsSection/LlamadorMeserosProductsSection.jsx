import style from "./LlamadorMeserosProductsSection.module.scss";

function LlamadorMeserosProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694397/Group_8_og4pea.webp"
          alt="Imagen de brazalete del mesero"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694396/Group_9_yutx7u.webp"
          alt="Imagen de llamador de meseros"
        />
      </div>
    </section>
  );
}

export default LlamadorMeserosProductsSection;
