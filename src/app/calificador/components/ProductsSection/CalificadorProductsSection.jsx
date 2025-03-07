import style from "./CalificadorProductsSection.module.scss";

function CalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.product__item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741104598/nuevo_4x-8_qbdidq.webp"
            alt="Rollos de dispositivo calificador"
          />
          <div className={style.btn__container}>
            <p className={style.selling__counter}>0000 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/opinamaster-calificador/opinamaster"
            >
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
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/opinamaster-calificador/aviso-de-pared"
            >
              Ver más
            </a>
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

export default CalificadorProductsSection;
