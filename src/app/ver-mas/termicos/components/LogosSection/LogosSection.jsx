"use client";
import styles from "../../../styles/LogosSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useLogos } from "../../../../context/LogosContext";
import InfiniteSlider from "@/app/components/sliders/InfiniteSlider";

function LogosSection() {
  const { logosTermicos } = useLogos();
  return (
    <section className={styles.logossection__container}>
      <input type="checkbox" id="toggle" className={styles.toggleCheckbox} />
      <div className={styles.header}>
        <h2>Algunos clientes</h2>
        <label htmlFor="toggle" className={styles.toggleLabel}>
          <IoIosArrowForward className={styles.arrowIcon} />
        </label>
      </div>
      <div className={styles.content}>
        <InfiniteSlider logos={logosTermicos} />
      </div>
    </section>
  );
}

export default LogosSection;
