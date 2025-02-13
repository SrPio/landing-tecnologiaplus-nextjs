import style from "./TurnosProductsSection.module.scss";

function TurnosProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Colores de Ticket más solicitados
      </h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/tickets_2x-8_j3gdmx_mt44rr.webp"
          alt="Colores de tickets"
        />
      </div>
      <p>
        Clasifica los turnos por prioridad o servicio con nuestra variedad de
        colores disponibles.
      </p>
    </section>
  );
}

export default TurnosProductsSection;
