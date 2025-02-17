import PropTypes from "prop-types";
import styles from "./ArticuloPlantilla.module.scss";

function ArticuloPlantilla({ titulo, contenido }) {
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
};

export default ArticuloPlantilla;
