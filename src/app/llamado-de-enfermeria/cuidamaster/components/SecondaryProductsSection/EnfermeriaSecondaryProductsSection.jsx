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
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685527/llamador_blanco_2x-8_pibji3.webp"
              alt="Llamador de enfermería E2 Blanco"
            />
            <h3>Llamador E2 Blanco</h3>
            <a
              className={style.card__btn}
              href="http://landing-tecnologiaplus-nextjs.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco"
            >
              Ver más
            </a>
            <p>4.193 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739198779/Recurso_32_2x-8_ifuwuz.webp"
              alt="Botón para pacientes extensor EX1"
            />
            <h3>
              Llamador con
              <br />
              extensor EX<span>1</span>
            </h3>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/enfermeria/llamador-con-extensor"
            >
              Ver más
            </a>
            <p>3852 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685525/llamador_para_colgar_cuello_2x-8_oqbvar.webp"
              alt="Llamador de enfermeras para colgar en el cuello"
            />
            <h3>
              Llamador E<span>1</span>
              <br />
              para colgar en cuello
            </h3>
            <a
              className={style.card__btn}
              href="http://landing-tecnologiaplus-nextjs.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello"
            >
              Ver más
            </a>
            <p>568 vendidos</p>
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
              alt="Turnero T1-B"
            />
            <h3>
              Pantalla T<span>1</span>B de <span>1</span> llamado
            </h3>
            <p>886 vendidos</p>
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
              alt="Pantalla de turnos T6"
            />
            <h3>Pantalla T6 de 6 llamados</h3>
            <p>942 vendidos</p>
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
              alt="Alarma de luz para enfermeras"
            />
            <h3>Alarma de luz</h3>
            <p>2649 vendidos</p>
            <a
              className={style.card__btn}
              href="http://landing-tecnologiaplus-nextjs.vercel.app/llamado-de-enfermeria-cuidamaster/alarma-de-luz"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
              alt="Reloj de llamado al personal"
            />
            <h3>Reloj receptor de llamados</h3>
            <p>2276 vendidos</p>
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
