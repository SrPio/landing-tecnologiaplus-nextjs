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
                <h3>Llamador V2N</h3>
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
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694395/1_2x-8_1_gw4xok.webp"
                alt="imagen de Llamador V2N"
              />
            </div>
            <div className={style.card}>
              <div>
                <h3>Llamador V2B</h3>
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
                  Control
                  <br />
                  numérico
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
        </div>
      </section>
      <section className={style.products__section}>
        <div className={style.products__container}>
          <h2>Dale play para verlos funcionar</h2>
          <div className={style.products__card__container}>
            <div className={style.card__video}>
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
              <p>Así de fácil es mejorar la atención en tu restaurante</p>
            </div>

            <div className={style.card__video}>
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
              <p>
                Personal mas alerta, facilita el llamado de meseros desde la
                cocina.{" "}
              </p>
            </div>

            <div className={style.card__video}>
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
              <p>Un solo toque y el número de mesa aparece en pantalla</p>
            </div>
          </div>
          <h2>Opciones para recibir llamados</h2>
          <div className={style.products__card__container}>
            <div className={style.card}>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
                alt="imagen del Reloj receptor digital"
              />
              <h3>Reloj receptor digital</h3>
              <p>1276 vendidos</p>
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
                alt="imagen del Pantalla de 1 llamado"
              />
              <h3>Pantalla de 1 llamado</h3>
              <p>286 vendidos</p>
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
              <h3>Pantalla de 6 llamados</h3>
              <p>142 vendidos</p>
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
    </>
  );
}

export default LlamadorMeserosSecondaryProductsSection;
