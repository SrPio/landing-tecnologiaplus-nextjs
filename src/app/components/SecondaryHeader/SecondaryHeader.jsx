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
              <a href="http://landing-tecnologiaplus-nextjs.vercel.app/localizadores-para-restaurantes">
                Localizadores para Restaurantes
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/llamadores-de-meseros">
                Llamadores de Meseros
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/turnero/turnoexpress">
                Turnero TurnoExpress
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/turnomaster">
                Sistema de Turnos TurnoMaster
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs.vercel.app/rollos-de-fichos-para-turnos">
                Rollos de Fichos para Turnos
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/rollos-de-papel-termico">
                Rollos de Papel Térmico
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs.vercel.app/dispensador-de-tickets">
                Dispensador de Tickets
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/llamado-de-enfermeria/cuidamaster">
                Llamado de Enfermería CuidaMaster
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/calificador-de-servicio-al-cliente/opinamaster">
                Calificador de Servicio al cliente OpinaMaster
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs.vercel.app/encuesta-virtual">
                Encuesta Virtual OpinaMaster
              </a>
            </li>
          </ul>
        </div>
        <a
          className={style.btn__mobile}
          href="https://landing-tecnologiaplus-nextjs.vercel.app/blog"
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
        <a href="tel:+573164682034">316 468 2034</a>
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
