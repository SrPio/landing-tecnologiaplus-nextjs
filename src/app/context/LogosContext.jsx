"use client";
import { createContext, useContext, useState } from "react";

const LogosContext = createContext();

export const useLogos = () => {
  return useContext(LogosContext);
};

export const LogosProvider = ({ children }) => {
  // Add all the required state variables
  const [logosTermicos] = useState([]);
  const [logosTurnos] = useState([]);
  const [logosTurnoExpress] = useState([]);
  const [logosCalificador] = useState([]);
  const [logosEnfermeria] = useState([]);
  const [logosLlamadorMeseros] = useState([]);
  const [logosTurnoMaster] = useState([]);
  const [logosHome] = useState([]);
  // Add some actual data for Localizadores
  const [logosLocalizadores] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542309/Mesa_de_trabajo_39_4x_szfdyq.webp",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563268/Mesa_de_trabajo_40_bjtiqo.svg",
      alt: "Logo Home",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    }
  ]);
  


  return (
    <LogosContext.Provider
      value={{
        logosTermicos,
        logosTurnos,
        logosTurnoExpress,
        logosCalificador,
        logosEnfermeria,
        logosLlamadorMeseros,
        logosLocalizadores,
        logosTurnoMaster,
        logosHome,
      }}
    >
      {children}
    </LogosContext.Provider>
  );
};
