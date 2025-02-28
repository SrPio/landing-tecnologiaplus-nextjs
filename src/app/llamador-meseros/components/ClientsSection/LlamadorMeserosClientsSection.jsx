"use client";
import React from "react";
import style from "./LlamadorMeserosClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function LlamadorMeserosClientsSection() {
  const { logosLlamadorMeseros } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosLlamadorMeseros} />
      </div>
    </section>
  );
}

export default LlamadorMeserosClientsSection;
