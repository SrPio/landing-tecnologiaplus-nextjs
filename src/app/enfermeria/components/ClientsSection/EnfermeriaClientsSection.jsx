"use client";
import React from "react";
import style from "./EnfermeriaClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function EnfermeriaClientsSection() {
  const { logosEnfermeria } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Entidades médicas que mejoran su atención con el llamado de enfermeras
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosEnfermeria} />
      </div>
    </section>
  );
}

export default EnfermeriaClientsSection;
