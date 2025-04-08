import PropTypes from "prop-types";
import styles from "./ArticuloPlantilla.module.scss";
import BlogCard from "@/app/components/Cards/Blog/BlogCard";

function ArticuloPlantilla({
  titulo,
  contenido,
  /* publicadoPor, */
  fechaPublicacion,
  fechaActualizacion,
}) {
  return (
    <>
      <div className={styles.articulo__container}>
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
                  <img
                    src={bloque.url}
                    alt={bloque.descripcion || "Imagen del artículo"}
                    loading="lazy"
                    className={styles.articulo__imagen}
                    style={{
                      height: bloque.altura || "auto",
                      ...bloque.estilo,
                    }}
                  />
                );

              case "texto-enriquecido":
                return (
                  <p key={index} className={styles.articulo__texto}>
                    {bloque.partes.map((parte, i) =>
                      typeof parte === "string" ? (
                        parte
                      ) : (
                        <a
                          key={i}
                          href={parte.href}
                          className="text-blue-600 underline hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {parte.texto}
                        </a>
                      )
                    )}
                  </p>
                );

              case "enlaces":
                return (
                  <ul key={index} className={styles.articulo__lista}>
                    {bloque.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                );

              case "texto-html":
                return (
                  <div
                    key={index}
                    className={styles.articulo__texto}
                    dangerouslySetInnerHTML={{ __html: bloque.html }}
                  />
                );

              case "boton":
                return (
                  <a
                    key={index}
                    href={bloque.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn__cta}
                  >
                    {bloque.texto}
                  </a>
                );

              case "lista":
                const listStyle =
                  bloque.bulletStyle === "emoji"
                    ? styles.articulo__lista_emoji
                    : bloque.bulletStyle === "circle"
                    ? styles.articulo__lista_circle
                    : bloque.bulletStyle === "square"
                    ? styles.articulo__lista_square
                    : ""; // Usamos la clase CSS por defecto si no hay estilo personalizado

                return bloque.ordenada ? (
                  <ol
                    key={index}
                    className={`${styles.articulo__lista} ${listStyle}`}
                  >
                    {bloque.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    key={index}
                    className={`${styles.articulo__lista} ${listStyle}`}
                  >
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
              <p className={styles.publicadoPor}>
                {/* Publicado por: {publicadoPor} */}
                <p>Publicado: {fechaPublicacion}</p>
              </p>
              <div className={styles.publicadoFechas}>
                <p>Actualizado: {fechaActualizacion}</p>
              </div>
            </div>
          </footer>
        </article>
        <section className={styles.articulos__similares}>
          <h3>Artículos similares</h3>
          {/* Contenedor de las tarjetas */}
          <div className={styles.articulos__similares__container}>
            <BlogCard
              title="Timbre para Cama de Hospital: Atención Rápida y Eficaz para el Paciente"
              description="Estar hospitalizado es una experiencia desafiante."
              imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743783087/Imagen_de_WhatsApp_2025-04-04_a_las_11.06.54_1dcf04a8_gj6t2l.webp"
              altText="Imagen 1"
              link="#"
              date="20 de marzo de 2025"
              width="20vw"
              height="12vw"
              imageWidth="20vw"
              imageHeight="5vw"
              titleFontSize="0.8rem"
              descriptionFontSize="0.7rem"
              imageObjectPosition="50% 20%"
            />
            <BlogCard
              title="Título 2"
              description="Descripción breve del segundo blog"
              imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739206940/3_1_2x-8_znjln1.png"
              altText="Imagen 2"
              link="#"
              date="21 de marzo de 2025"
              width="20vw"
              height="12vw"
              imageWidth="20vw"
              imageHeight="5vw"
              titleFontSize="0.8rem"
              descriptionFontSize="0.7rem"
            />
            <BlogCard
              title="Título 3"
              description="Descripción breve del tercer blog"
              imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739206940/3_1_2x-8_znjln1.png"
              altText="Imagen 3"
              link="#"
              date="22 de marzo de 2025"
              width="20vw"
              height="12vw"
              imageWidth="20vw"
              imageHeight="5vw"
              titleFontSize="0.8rem"
              descriptionFontSize="0.7rem"
            />
          </div>
        </section>
      </div>
    </>
  );
}

ArticuloPlantilla.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.oneOf([
        "titulo",
        "subtitulo",
        "texto",
        "imagen",
        "lista",
        "enlaces",
        "texto-enriquecido",
      ]).isRequired,
      texto: PropTypes.string,
      url: PropTypes.string,
      descripcion: PropTypes.string,
      altura: PropTypes.string,
      ordenada: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            titulo: PropTypes.string,
            url: PropTypes.string,
          }),
        ])
      ),
      estilo: PropTypes.object,
      partes: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            texto: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
          }),
        ])
      ),
    })
  ).isRequired,
  /* publicadoPor: PropTypes.string.isRequired, */
  fechaPublicacion: PropTypes.string.isRequired,
  fechaActualizacion: PropTypes.string.isRequired,
};

export default ArticuloPlantilla;
