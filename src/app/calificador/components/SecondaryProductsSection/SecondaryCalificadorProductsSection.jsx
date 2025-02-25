import style from "./SecondaryCalificadorProductsSection.module.scss";

function SecondaryCalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Alertas en tiempo real</h2>
            <p>Agiliza la toma de decisiones</p>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/Alertas_cel_2x-8_tfsbg1.webp"
              alt="imagen de alertas en celular"
            />
          </div>
          <div className={style.card}>
            <h2>Métricas precisas</h2>
            <p>Identifica como mejorar tu negocio.</p>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/Estadi%CC%81sticas_2x-8_dlqi3u.webp"
              alt="imagen de estadísticas"
            />
          </div>
        </div>
      </div>
      <p>
        En Tecnología Plus, entendemos que la satisfacción del cliente es clave
        para el éxito de cualquier negocio. Por eso, hemos desarrollado Opina
        Master, un sistema avanzado que permite recopilar opiniones en tiempo
        real y transformar cada experiencia en una oportunidad de mejora. Con
        nuestro Calificador de Servicio, los clientes pueden evaluar su atención
        de forma rápida, permitiéndote recibir alertas automáticas en caso de
        calificaciones negativas, personalizar preguntas según tus necesidades y
        acceder a estadísticas en línea para analizar tendencias y tomar
        decisiones estratégicas. Somos fabricantes, lo que nos permite ofrecer
        soluciones personalizadas, adaptadas a distintos sectores como
        restaurantes, clínicas, hoteles y más.
      </p>
    </section>
  );
}

export default SecondaryCalificadorProductsSection;
