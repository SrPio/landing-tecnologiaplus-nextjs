import style from "./LlamadorMeserosSecondaryProductsSection.module.scss";

function LlamadorMeserosSecondaryProductsSection() {
  return (
    <>
      <section className={`${style.products__section} ${style.bg__section}`}>
        <div className={style.products__container}>
          <h2>Botón para llamar mesero</h2>
          <div
            className={`${style.products__card__container} ${style.products__card__container__variant}`}
          >
            <div className={style.card}>
              <div>
                <h3>
                  Llamador E2-N
                  <br />
                  de 3 teclas
                </h3>
                <a
                  className={style.card__btn}
                  href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/llamador-v2n"
                >
                  Ver más
                </a>
                <p>4.987 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742395037/Boto%CC%81n_3_teclas_4x-8_buaiyg.webp"
                alt="imagen de Llamador V2N de 3 teclas"
              />
            </div>
            <div className={style.card}>
              <div>
                <h3>
                  Llamador E2-B
                  <br />
                  de 2 teclas
                </h3>
                <a
                  className={style.card__btn}
                  href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/llamador-v2b"
                >
                  Ver más
                </a>
                <p>4.193 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694394/2_2x-8_1_yojp4b.webp"
                alt="imagen de Llamador V2B"
              />
            </div>
            <div className={style.card}>
              <div>
                <h3>
                  Hablador
                  <br />
                  para mesa
                </h3>
                <a
                  className={style.card__btn}
                  href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/hablador-para-mesa"
                >
                  Ver más
                </a>
                <p>2.175 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694393/3_2x-8_igijiu.webp"
                alt="imagen de Hablador para mesa"
              />
            </div>
            <div className={style.card}>
              <div>
                <h3>
                  Control numérico
                  <br />
                  para cocina
                </h3>
                <a
                  className={style.card__btn}
                  href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/control-numerico"
                >
                  Ver más
                </a>
                <p>198 vendidos</p>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/4_2x-8_mioq3p.webp"
                alt="imagen de Control numérico"
              />
            </div>
          </div>
          <h2>Opciones para recibir llamados</h2>
          <div className={style.products__card__container}>
            <div className={style.card}>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
                alt="imagen del Reloj de llamados"
              />
              <h3>Reloj receptor de llamados</h3>
              <p>2276 vendidos</p>
              <a
                className={style.card__btn}
                href="http://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/reloj-receptor"
              >
                Ver más
              </a>
            </div>
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
                href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/pantalla-t1b"
              >
                Ver más
              </a>
            </div>
            <div className={style.card}>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/6_llamados_2x-8_wppkb6.webp"
                alt="imagen del Pantalla de 6 llamados"
              />
              <h3>Pantalla T6 de 6 llamados</h3>
              <p>942 vendidos</p>
              <a
                className={style.card__btn}
                href="https://landing-tecnologiaplus-nextjs.vercel.app/ver-mas/meseros/pantalla-6-llamados"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={style.products__section}>
        <div className={style.products__container}>
          <h2>Dale play para verlos funcionar</h2>
          <div
            className={`${style.products__card__container} ${style.video__container}`}
          >
            <div className={style.card__video}>
              <p>Así de fácil es mejorar la atención en tu restaurante</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uXfDzZuoym4?si=2rqKuCI7mCsD2fgo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className={style.card__video}>
              <p>
                Personal mas alerta, facilita el llamado de meseros desde la
                cocina.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XevVCpp6Drc?si=JjbC36iw4KZHT8p8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className={style.card__video}>
              <p>Un solo toque y el número de mesa aparece en pantalla</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9CPZ2QoFyqM?si=Pmy0UayPdUdqOxF1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LlamadorMeserosSecondaryProductsSection;
