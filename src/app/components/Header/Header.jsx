"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { HiPhone } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Header({ customStyles = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Estado para cada dropdown
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className={`${styles.header} ${customStyles.header || ""}`}>
      <div
        className={`${styles.nav__links} ${menuOpen ? styles.showMenu : ""} ${
          customStyles.navLinks || ""
        }`}
      >
        <a href="#">Inicio</a>

        {/* Dropdown Productos */}
        <div className={styles.dropdown}>
          <a
            href="#"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                toggleDropdown("productos");
              }
            }}
          >
            Productos <IoIosArrowDown className={styles.arrow__icon} />
          </a>
          <ul
            className={`${styles.dropdownMenu} ${
              dropdownOpen["productos"] ? styles.show : ""
            }`}
          >
            <li>
              <a href="#">Turnero</a>
            </li>
            <li>
              <a href="#">Rollos de turnos</a>
            </li>
            <li>
              <a href="#">Rollos térmicos</a>
            </li>
            <li>
              <a href="#">Dispensador de tiquetes</a>
            </li>
            <li>
              <a href="#">Software para turnos</a>
            </li>
            <li>
              <a href="#">Localizadores de clientes</a>
            </li>
            <li>
              <a href="#">Llamadores de meseros</a>
            </li>
            <li>
              <a href="#">Llamado de enfermería</a>
            </li>
            <li>
              <a href="#">Calificador de servicios</a>
            </li>
            <li>
              <a href="#">Encuestas de satisfacción</a>
            </li>
          </ul>
        </div>

        {/* Blog como enlace normal */}
        <a href="#">Blog</a>

        <a href="#" className={styles.contactoMobile}>
          Contacto
        </a>
      </div>
      <a
        href="#"
        className={`${styles.logo__container} ${
          customStyles.logoContainer || ""
        }`}
      >
        <img
          loading="lazy"
          className={`${styles.logo} ${customStyles.logo || ""}`}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/Logo_Tecnolog%C3%ADa_Plus_2024_cyahos_cgz5gx.svg"
          alt="logo Tecnología plus"
        />
      </a>
      <div
        className={`${styles.header__right} ${customStyles.headerRight || ""}`}
      >
        <a href="#" className={styles.contactoDesktop}>
          Contacto
        </a>
        <a href="#">
          <FaSearch
            className={`${styles.search__icon} ${
              customStyles.searchIcon || ""
            }`}
          />
        </a>
        <a
          href="#"
          className={`${styles.phone__btn} ${customStyles.phoneBtn || ""}`}
        >
          <HiPhone
            className={`${styles.phone__icon} ${customStyles.phoneIcon || ""}`}
          />
          322 734 7971
        </a>
        <div
          className={`${styles.menu__icon} ${menuOpen ? styles.open : ""} ${
            customStyles.menuIcon || ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
