"use client";
import React from "react";
import style from "./HomeClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function HomeClientsSection() {
  const { logosHome } = useLogos();

  // Map logos to the format expected by InfiniteSlider2 if needed
  const images = logosHome.map(logo => ({
    url: logo.src || logo.url, // Handle both property names
    alt: logo.alt
  }));

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Empresas que confían en Tecnología Plus para mejorar la atención al
        cliente.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider2 images={images} speed={5000} />
      </div>
    </section>
  );
}

export default HomeClientsSection;
