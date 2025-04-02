"use client";
import React from "react";
import style from "./DispensadorTiquetesClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function DispensadorTiquetesClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes y pequeños negocios eliminan filas con nuestro dispensador de
        turnos.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosTurnos} />
      </div>
    </section>
  );
}

export default DispensadorTiquetesClientsSection;
