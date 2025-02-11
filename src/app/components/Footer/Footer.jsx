import styles from "./Footer.module.scss";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        {/* Redes Sociales */}
        <div>
          <h3>Síguenos</h3>
          <ul className={styles.footer__social}>
            <li>
              <FiInstagram />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="mailto:ventas@tecnologiaplus.com">
                <MdOutlineEmail /> ventas@tecnologiaplus.com
              </a>
            </li>
            <li>
              <a href="tel:+573227347971">
                <HiPhone /> (+57) 322 734 79 71
              </a>
            </li>
            <li>
              <a href="tel:+573166923827">
                <HiPhone /> (+57) 316 692 38 27
              </a>
            </li>
          </ul>
        </div>

        {/* Ubicación */}
        <div>
          <h3>Estamos en</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/colombia_1_mcsiuu_vyabd4.png"
                alt="Colombia"
                loading="lazy"
              />{" "}
              Colombia
            </li>
            <li>Bogotá • Av. Cra 30#75-61 Oficina 510.</li>
            <li>Medellín • El Poblado edificio Oceanía.</li>
            <li>Cobertura nacional</li>
          </ul>
        </div>
        <div className={styles.footer__peru}>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/peru_myylpq_rpvpzb.png"
                alt="Perú"
                loading="lazy"
              />{" "}
              Perú
            </li>
            <li>(+51) 976 270 171</li>
            <li>Envíos a toda Latinoamérica</li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className={styles.footer__bottom}>
        <img
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/Tplus_en_blanco_2x-8_uokdmv_zoykmd.webp"
          alt="Logo de Tecnología Plus"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
