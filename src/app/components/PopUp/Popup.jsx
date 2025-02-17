"use client";
import { useState } from "react";
import styles from "./Popup.module.scss";

export default function Popup({ isOpen, setIsOpen }) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState("multimedia");

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setIsOpen(false)}>
              ✖
            </button>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={activeTab === "multimedia" ? styles.active : ""}
                onClick={() => setActiveTab("multimedia")}
              >
                Multimedia
              </button>
              <button
                className={activeTab === "medidas" ? styles.active : ""}
                onClick={() => setActiveTab("medidas")}
              >
                Medidas
              </button>
            </div>

            {/* Contenido */}
            {activeTab === "multimedia" ? (
              <div className={styles.grid}>
                <img
                  loading="lazy"
                  className={styles.image}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/1_2x-100_wutnmk.webp"
                  alt="Imagen 1"
                />
                <img
                  loading="lazy"
                  className={styles.image}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/2_2x-100_jikuc2.webp"
                  alt="Imagen 2"
                />
                <img
                  loading="lazy"
                  className={styles.image}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/3_2x-100_lqfj29.webp"
                  alt="Imagen 3"
                />
                <img
                  loading="lazy"
                  className={styles.image}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/4_2x-100_xp8nfs.webp"
                  alt="Imagen 4"
                />
                <img
                  loading="lazy"
                  className={styles.image}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/5_2x-100_tqczvp.webp"
                  alt="imagen de medidas"
                />
              </div>
            ) : (
              <div className={styles.content}>
                <img
                  loading="lazy"
                  className={styles.image__sizes}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/5_2x-100_tqczvp.webp"
                  alt="imagen de medidas"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
