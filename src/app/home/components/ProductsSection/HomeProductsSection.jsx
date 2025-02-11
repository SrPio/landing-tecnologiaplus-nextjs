import Card from "../../../components/Cards/Products/Card";
import style from "./HomeProductsSection.module.scss";

function HomeProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Productos</h2>
      <div className={style.products__container}>
        <Card
          title="TurnoExpress"
          description="Rapidez y agilidad para tus filas."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp"
          altText="imagen de TurnoExpress"
          link="#"
        />

        <Card
          title="TurnoMaster"
          description="Digitaliza la gestión de turnos."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74.webp"
          altText="imagen de TurnoMaster"
          link="#"
          customClass="custom__style__one"
        />

        <Card
          title="Localizadores"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431731/Localizadores_2x-8_niu5kx.webp"
          altText="imagen de Localizadores"
          link="#"
        />

        <Card
          title="Llamadores de meseros"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944552/4_2x-8_2_zbywdq.webp"
          altText="imagen de Llamadores de meseros"
          link="#"
          customClass="custom__style__four"
        />

        <Card
          title="Llamado de enfermería"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596111/cuidamaster_2x-8_dlawzx.webp"
          altText="imagen de Llamado de enfermería"
          link="#"
        />

        <Card
          title="Calificador de servicios"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp"
          altText="imagen de Calificador de servicios"
          link="#"
          customClass="custom__style__three"
        />

        <Card
          title="OpinaMaster"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685536/Opinamaster_2x-8_sg1wyy.webp"
          altText="imagen de OpinaMaster"
          link="#"
        />

        <Card
          title="Dispensador de tiquetes"
          description="Complemento práctico para
tomar el turno."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp"
          altText="imagen de Dispensador de tiquetes"
          link="#"
        />

        <Card
          title="Rollos de turnos"
          description="Organiza y mejora el servicio."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/Rollos_de_turnos_2x-8_tcxrnt.webp"
          altText="imagen de Rollos de turnos"
          link="#"
        />

        <Card
          title="Rollos térmicos"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp"
          altText="imagen de Rollos térmicos"
          link="#"
          customClass="custom__style__five"
        />

        <Card
          title="Desarrollo de software"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738945022/11_2x-8_lb72ht.webp"
          altText="imagen de Desarrollo de software"
          link="#"
          customClass="custom__style__five"
        />

        <Card
          title="Soporte Técnico"
          description="Descripción pequeña aquí"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738945024/12_2x-8_nnlbla.webp"
          altText="imagen de Soporte Técnico"
          link="#"
          customClass="custom__style__six"
        />
      </div>

      <p>
        En Tecnología Plus, somos fabricantes especializados en rollos térmicos
        de alta calidad, diseñados para satisfacer las necesidades de impresión
        de todo tipo de negocios. Nuestros productos destacan por su precisión,
        durabilidad y compatibilidad con las principales impresoras del mercado.
        Nos comprometemos a brindar soluciones confiables que optimicen tus
        procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología
        Plus y experimenta la diferencia que solo los expertos pueden ofrecer.
        ¡Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en
        impresión térmica!
      </p>
    </section>
  );
}

export default HomeProductsSection;
