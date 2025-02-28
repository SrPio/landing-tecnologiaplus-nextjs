"use client";
import React from "react";
import style from "./TurnoMasterClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function TurnoMasterClientsSection() {
  const { logosTurnoMaster } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Usan TurnoMaster para decidir en tiempo real como agilizar el flujo de
        filas
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosTurnoMaster} />
      </div>
    </section>
  );
}

export default TurnoMasterClientsSection;
