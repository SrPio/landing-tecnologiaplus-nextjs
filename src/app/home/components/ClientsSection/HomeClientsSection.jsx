"use client";
import React from "react";
import style from "./HomeClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";
import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function HomeClientsSection() {
  const { logosHome } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosHome} />
      </div>
    </section>
  );
}

export default HomeClientsSection;
