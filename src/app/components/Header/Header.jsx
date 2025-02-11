import styles from "./Header.module.scss";
import { HiPhone } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav__links}>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Blog</a>
      </div>
      <a href="#" className={styles.logo__container}>
        <img
          loading="lazy"
          className={styles.logo}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/Logo_Tecnolog%C3%ADa_Plus_2024_cyahos_cgz5gx.svg"
          alt="logo Tecnología plus"
        />
      </a>
      <div className={styles.header__right}>
        <a href="#">Contacto</a>
        <a href="#">
          <FaSearch className={styles.search__icon} />
        </a>
        <a href="#" className={styles.phone__btn}>
          <HiPhone className={styles.phone__icon} />
          322 734 7971
        </a>
      </div>
    </header>
  );
}

export default Header;
