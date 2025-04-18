"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Header.module.scss";
import { HiPhone } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Header({ customStyles = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Estado para cada dropdown
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef(null);
  const phoneRef = useRef(null);
  const menuRef = useRef(null);

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

  // Apply aria-labels after component mounts to avoid hydration mismatch
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.setAttribute('aria-label', 'Buscar en el sitio');
    }
    if (phoneRef.current) {
      phoneRef.current.setAttribute('aria-label', 'Llamar al teléfono 316 468 2034');
    }
    if (menuRef.current) {
      menuRef.current.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
      menuRef.current.setAttribute('aria-expanded', menuOpen);
    }
  }, [menuOpen]);

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
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/">Inicio</a>

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
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress">
                Turnero
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-turnos">
                Rollos de turnos
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-termicos">
                Rollos térmicos
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/dispensador-tiquetes">
                Dispensador de tiquetes
              </a>
            </li>
            {/* <li>
              <a href="#">Software para turnos</a>
            </li> */}
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/localizadores">
                Localizadores de clientes
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/llamador-meseros">
                Llamadores de meseros
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/enfermeria">
                Llamado de enfermería
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/calificador">
                Calificador de servicios
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/encuesta-virtual">
                Encuestas de satisfacción
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/turnomaster">
                Turnomaster
              </a>
            </li>
          </ul>
        </div>

        {/* Blog como enlace normal */}
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/blog-tecnologia-plus">
          Blog
        </a>

        <a
          href="https://landing-tecnologiaplus-nextjs.vercel.app/contacto"
          className={styles.contactoMobile}
        >
          Contacto
        </a>
      </div>
      <a
        href="https://landing-tecnologiaplus-nextjs.vercel.app/"
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
        <a
          href="https://landing-tecnologiaplus-nextjs.vercel.app/contacto"
          className={styles.contactoDesktop}
        >
          Contacto
        </a>
        <a 
          href="#" 
          ref={searchRef}
        >
          <FaSearch
            className={`${styles.search__icon} ${
              customStyles.searchIcon || ""
            }`}
          />
        </a>
        <a
          href="tel:+573164682034"
          className={`${styles.phone__btn} ${customStyles.phoneBtn || ""}`}
          ref={phoneRef}
        >
          <HiPhone
            className={`${styles.phone__icon} ${customStyles.phoneIcon || ""}`}
          />
          316 468 2034
        </a>
        <div
          className={`${styles.menu__icon} ${menuOpen ? styles.open : ""} ${
            customStyles.menuIcon || ""
          }`}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          ref={menuRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMenu();
            }
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
