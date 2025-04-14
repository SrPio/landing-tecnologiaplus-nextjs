import style from "./VideoSection.module.scss";

function VideoSection() {
  return (
    <section className={style.video__section}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XGGhLks0iVc?si=8v7bSNs0cWdSTcSG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className={style.text__container}>
        <h2 className={style.benefits__title}>SOMOS FABRICANTES</h2>
        <p>
          Reproduce el video y conoce la calidad de nuestros llamadores de
          meseros
        </p>
        <a
          className={style.card__btn}
          href="https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros"
        >
          Ver más
        </a>
      </div>
    </section>
  );
}

export default VideoSection;
