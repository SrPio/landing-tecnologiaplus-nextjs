import style from "./EnfermeriaSecondaryProductsSection.module.scss";

function EnfermeriaSecondaryProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Opciones de llamador de enfermeras
      </h2>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685525/llamador_para_colgar_cuello_2x-8_oqbvar.webp"
              alt="imagen del Llamador E1
para colgar en cuello"
            />
            <h3>
              Llamador E1
              <br />
              para colgar en cuello
            </h3>
            <a
              className={style.card__btn}
              href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/boton-e1"
            >
              Ver más
            </a>
            <p>4.568 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685527/llamador_blanco_2x-8_pibji3.webp"
              alt="imagen del Llamador E2 Blanco"
            />
            <h3>Llamador E2 Blanco</h3>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/llamador-v2b"
            >
              Ver más
            </a>
            <p>4.193 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739198779/Recurso_32_2x-8_ifuwuz.webp"
              alt="imagen de Llamador con
extensor EX1"
            />
            <h3>
              Llamador con
              <br />
              extensor EX1
            </h3>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/llamador-con-extensor"
            >
              Ver más
            </a>
            <p>198 vendidos</p>
          </div>
        </div>
        <h2>Opciones para recibir llamados</h2>
        <div
          className={`${style.products__card__container} ${style.products__card__container__variant}`}
        >
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp"
              alt="imagen de Pantalla T1B"
            />
            <h3>Pantalla T1B</h3>
            <p>286 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/pantalla-t1b"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/pantalla_T6_2x-8_zm3lja.webp"
              alt="imagen de Pantalla T6"
            />
            <h3>Pantalla T6</h3>
            <p>142 vendidos</p>
            <a
              className={style.card__btn}
              href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/pantalla-6-llamados"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685530/alarma_de_luz_2x-8_xhufht.webp"
              alt="imagen de Alarma de luz"
            />
            <h3>Alarma de luz</h3>
            <p>1649 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
              alt="imagen de Reloj receptor digital"
            />
            <h3>Reloj receptor digital</h3>
            <p>1276 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/reloj-receptor"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnfermeriaSecondaryProductsSection;
