import style from "./EnfermeriaProductsSection.module.scss";

function EnfermeriaProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795337/Group_6_1_oukvce.webp"
          alt="Imagen de llamador de personal"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795342/Group_7_1_qxkgvu.webp"
          alt="Imagen de llamador de personal para colgar en el cuello"
        />
      </div>
    </section>
  );
}

export default EnfermeriaProductsSection;
