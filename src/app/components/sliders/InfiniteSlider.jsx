import React from "react";
import styles from "./InfiniteSlider.module.scss";

const InfiniteSlider = ({ logos }) => {
  return (
    <div className={styles.loop__slide}>
      <div>
        {logos.map((logo, index) => (
          <img loading="lazy" key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
