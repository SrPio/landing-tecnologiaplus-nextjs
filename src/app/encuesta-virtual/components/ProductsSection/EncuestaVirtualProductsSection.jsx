import style from "./EncuestaVirtualProductsSection.module.scss";

function EncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681738/Group_3_1_kawcef.webp"
          alt="Imagen de computador con encuesta virtual"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681739/Group_4_1_h4asog.webp"
          alt="Imagen de celular con alerta en tiempo real"
        />
      </div>
    </section>
  );
}

export default EncuestaVirtualProductsSection;
