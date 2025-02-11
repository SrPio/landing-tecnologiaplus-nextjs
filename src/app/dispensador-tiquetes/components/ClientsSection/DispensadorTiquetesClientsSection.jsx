"use client";
import React from "react";
import style from "./DispensadorTiquetesClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function DispensadorTiquetesClientsSection() {
  const { logosDispensadorTiquetes } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes y pequeños negocios eliminan filas con nuestro Dispensador de
        Turnos.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosDispensadorTiquetes} />
      </div>
    </section>
  );
}

export default DispensadorTiquetesClientsSection;
