"use client";
import React from "react";
import style from "./EncuestaVirtualClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function EncuestaVirtualClientsSection() {
  const { logosDispensadorTiquetes } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Marcas que utilizan la encuesta virtual y mejoran la experiencia de sus
        clientes.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosDispensadorTiquetes} />
      </div>
    </section>
  );
}

export default EncuestaVirtualClientsSection;
