import PropTypes from "prop-types";
import styles from "./ArticuloPlantilla.module.scss";

function ArticuloPlantilla({
  titulo,
  contenido,
  publicadoPor,
  fechaPublicacion,
  fechaActualizacion,
}) {
  return (
    <article className={styles.articulo__section}>
      <h1 className={styles.articulo__titulo}>{titulo}</h1>
      {contenido.map((bloque, index) => {
        switch (bloque.tipo) {
          case "titulo":
            return (
              <h2 key={index} className={styles.articulo__subtitulo}>
                {bloque.texto}
              </h2>
            );
          case "subtitulo":
            return (
              <h3 key={index} className={styles.articulo__subtitulo}>
                {bloque.texto}
              </h3>
            );
          case "texto":
            return (
              <p key={index} className={styles.articulo__texto}>
                {bloque.texto}
              </p>
            );
          case "imagen":
            return (
              <figure key={index} className={styles.articulo__imagen}>
                <img
                  src={bloque.url}
                  alt={bloque.descripcion || "Imagen del artículo"}
                  loading="lazy"
                  style={{ height: bloque.altura || "auto" }}
                />
                {bloque.descripcion && (
                  <figcaption>{bloque.descripcion}</figcaption>
                )}
              </figure>
            );
          case "lista":
            return bloque.ordenada ? (
              <ol key={index} className={styles.articulo__lista}>
                {bloque.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={index} className={styles.articulo__lista}>
                {bloque.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}

      {/* Pie de página */}
      <footer className={styles.articulo__footer}>
        {/* Sección de compartir */}
        <div className={styles.social__section}>
          <span>Compartir</span>
          <div className={styles.social__icons}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944989/instagram_2x-8_bflzuj.webp"
              alt="Instagram"
              className={styles.social__icon}
            />
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944985/facebook_2x-8_sy9pch.webp"
              alt="Facebook"
              className={styles.social__icon}
            />
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944987/wpp_2x-8_tsgorp.webp"
              alt="Whatsapp"
              className={styles.social__icon}
            />
          </div>
        </div>

        {/* Información del artículo */}
        <div className={styles.articulo__info}>
          <p className={styles.publicadoPor}>Publicado por: {publicadoPor}</p>
          <div className={styles.publicadoFechas}>
            <p>Actualizado: {fechaActualizacion}</p>
            <p>Publicado: {fechaPublicacion}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}

ArticuloPlantilla.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.oneOf(["titulo", "subtitulo", "texto", "imagen", "lista"])
        .isRequired,
      texto: PropTypes.string,
      url: PropTypes.string,
      descripcion: PropTypes.string,
      altura: PropTypes.string,
      ordenada: PropTypes.bool,
      items: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  publicadoPor: PropTypes.string.isRequired,
  fechaPublicacion: PropTypes.string.isRequired,
  fechaActualizacion: PropTypes.string.isRequired,
};

export default ArticuloPlantilla;
