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
      <a className={style.inicio__mobile} href="#">
        Inicio
      </a>
      <div className={`${style.nav__links} ${menuOpen ? style.showMenu : ""}`}>
        <a href="#">Inicio</a>
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
        <a className={style.btn__mobile} href="#">
          Blog
        </a>
        <a className={style.btn__mobile} href="#">
          Contacto
        </a>
      </div>

      <div className={style.phone__container}>
        <HiPhone />
        <a href="#">322 734 7971</a>
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
