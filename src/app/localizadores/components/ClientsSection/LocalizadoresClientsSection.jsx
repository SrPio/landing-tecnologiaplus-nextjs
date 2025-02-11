"use client";
import React from "react";
import style from "./LocalizadoresClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function LocalizadoresClientsSection() {
  const { logosLocalizadores } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosLocalizadores} />
      </div>
    </section>
  );
}

export default LocalizadoresClientsSection;
