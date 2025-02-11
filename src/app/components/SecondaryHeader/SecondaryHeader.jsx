"use client";
import React, { useState, useEffect } from "react";
import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";

function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let isHeroVisible = false;
        let isClientsVisible = false;

        entries.forEach((entry) => {
          if (entry.target.id === "hero-section") {
            isHeroVisible = entry.isIntersecting;
          }
          if (entry.target.id === "clients-section") {
            isClientsVisible = entry.isIntersecting;
          }
        });

        if (isHeroVisible) {
          setIsVisible(false);
        } else if (isClientsVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50% 0px 0px 0px", // Ajuste para detectar mejor
      }
    );

    const heroTarget = document.querySelector("#hero-section");
    const clientsTarget = document.querySelector("#clients-section");

    if (heroTarget) observer.observe(heroTarget);
    if (clientsTarget) observer.observe(clientsTarget);

    return () => {
      if (heroTarget) observer.unobserve(heroTarget);
      if (clientsTarget) observer.unobserve(clientsTarget);
    };
  }, []);

  return (
    <section
      className={`${style.secondary__header} ${isVisible ? style.visible : ""}`}
    >
      <div className={style.nav__links}>
        <a href="#">Inicio</a>
        <a href="#">
          Productos
          <IoIosArrowDown className={style.arrow__icon} />
        </a>
      </div>
      <div className={style.phone__container}>
        <HiPhone />
        <a href="#">322 734 7971</a>
      </div>
    </section>
  );
}

export default SecondaryHeader;
