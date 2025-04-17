import style from "./VideoSection.module.scss";
import YouTubePlayer from "../../../../../components/YouTubePlayer";

function VideoSection() {
  return (
    <section className={style.video__section}>
      <YouTubePlayer 
        videoId="XGGhLks0iVc" 
        title="Productos de Tecnología Plus"
      />

      <div className={style.text__container}>
        <h2 className={style.benefits__title}>SOMOS FABRICANTES</h2>
        <p>
          Reproduce el video y conoce la calidad de nuestros llamadores de
          meseros
        </p>
        <a
          className={style.card__btn}
          href="/llamador-meseros"
        >
          Ver más
        </a>
      </div>
    </section>
  );
}

export default VideoSection;
