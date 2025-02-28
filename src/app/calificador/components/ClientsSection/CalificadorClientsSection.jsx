"use client";
import React from "react";
import style from "./CalificadorClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function CalificadorClientsSection() {
  const { logosCalificador } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Toman decisiones con el calificador de servicio al cliente de
        OpinaMaster
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosCalificador} />
      </div>
    </section>
  );
}

export default CalificadorClientsSection;
