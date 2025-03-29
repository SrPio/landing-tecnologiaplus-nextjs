import style from "./VideoSection.module.scss";

function VideoSection() {
  return (
    <section className={style.video__section}>
      <video
        className="w-full h-auto rounded-lg"
        src="https://res.cloudinary.com/ddqh0mkx9/video/upload/v1743107660/COMPRESS_ANIMACIO%CC%81N_FINAL_COM_AJUSTES_nualz4.mp4"
        controls
        preload="none"
        playsInline
      />

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
