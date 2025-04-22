"use client";
import styles from "../../../../styles/LogosSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useLogos } from "../../../../../context/LogosContext";
import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider";

function LogosSection() {
  const { logosLocalizadores } = useLogos();
  return (
    <section className={styles.logossection__container}>
      <div className={styles.header}>
        <h2>Algunos clientes</h2>
      </div>
      <div className={styles.content}>
        <InfiniteSlider2 logos={logosLocalizadores} duration={40} />
      </div>
    </section>
  );
}

export default LogosSection;
