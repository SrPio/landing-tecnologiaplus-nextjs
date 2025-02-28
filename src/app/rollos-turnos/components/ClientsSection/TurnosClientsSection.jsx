"use client";
import React from "react";
import style from "./TurnosClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function TurnosClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes y pequeñas empresas confían en nuestros Fichos de turnos para
        ordenar la atención al cliente.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosTurnos} />
      </div>
    </section>
  );
}

export default TurnosClientsSection;
