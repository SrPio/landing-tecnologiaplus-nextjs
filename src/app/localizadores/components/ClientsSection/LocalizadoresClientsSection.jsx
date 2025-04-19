"use client";
import React from "react";
import style from "./LocalizadoresClientsSection.module.scss";
import InfiniteSlider from "@/app/components/sliders/InfiniteSlider";
import { useLogos } from "@/app/context/LogosContext";

function LocalizadoresClientsSection() {
  const { logosLocalizadores } = useLogos();
  
  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes marcas confían en nuestros Localizadores de clientes para
        mejorar su atención y agilizar sus pedidos.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosLocalizadores} />
      </div>
    </section>
  );
}

export default LocalizadoresClientsSection;
