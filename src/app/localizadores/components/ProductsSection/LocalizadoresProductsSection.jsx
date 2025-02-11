import style from "./LocalizadoresProductsSection.module.scss";

function LocalizadoresProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Más de 1.000 restaurantes usan nuetros localizadores</h2>
      <p>Elige entre nuestras opciones</p>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851946/rec_v3_2x-8_ehwkxo.webp"
          alt="Imagen de localizador Rec V3"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851948/cir_c2_2x-8_icgmcm.webp"
          alt="Imagen de localizador Cir C2"
        />
      </div>
    </section>
  );
}

export default LocalizadoresProductsSection;
