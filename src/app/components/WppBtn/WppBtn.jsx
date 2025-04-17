import style from "./WppBtn.module.scss";
import { FaWhatsapp } from "react-icons/fa";

function WppBtn() {
  return (
    <a
      href="https://wa.me/573227347971"
      target="_blank"
      rel="noreferrer"
      className={style.wpp__btn}
      aria-label="Contactarnos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WppBtn;
