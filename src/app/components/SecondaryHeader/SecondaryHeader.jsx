"use client";
import React, { useState, useEffect } from "react";
import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";

function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <section
      className={`${style.secondary__header} ${isVisible ? style.visible : ""}`}
    >
      <a
        className={style.inicio__mobile}
        href="https://landing-tecnologiaplus-nextjs.vercel.app/"
      >
        Inicio
      </a>
      <div className={`${style.nav__links} ${menuOpen ? style.showMenu : ""}`}>
        <a href="https://landing-tecnologiaplus-nextjs.vercel.app/">Inicio</a>
        {/* Dropdown Productos */}
        <div className={style.dropdown}>
          <a
            href="#"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                toggleDropdown("productos");
              }
            }}
          >
            Productos <IoIosArrowDown className={style.arrow__icon} />
          </a>
          <ul
            className={`${style.dropdownMenu} ${
              dropdownOpen["productos"] ? style.show : ""
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
          </ul>
        </div>
        <a
          className={style.btn__mobile}
          href="https://landing-tecnologiaplus-nextjs.vercel.app/blog-tecnologia-plus"
        >
          Blog
        </a>
        <a
          className={style.btn__mobile}
          href="https://landing-tecnologiaplus-nextjs.vercel.app/contacto"
        >
          Contacto
        </a>
      </div>

      <div className={style.phone__container}>
        <HiPhone />
        <a href="tel:3227347971">322 734 7971</a>
      </div>

      <div
        className={`${style.menu__icon} ${menuOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default SecondaryHeader;
