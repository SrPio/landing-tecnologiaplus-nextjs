"use client";
import { createContext, useContext, useState } from "react";

const LogosContext = createContext();

export const useLogos = () => {
  return useContext(LogosContext);
};

export const LogosProvider = ({ children }) => {
  const [logosTermicos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
  ]);

  const [logosTurnos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
  ]);

  const [logosDispensadorTiquetes] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_5_dsigab.svg",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
  ]);

  const [logosTurnoExpress] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
  ]);

  const [logosCalificador] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_6_gheasz.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
  ]);

  const [logosEnfermeria] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200374/logo_2_nbclel.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739200370/logo_3_wvlvzc.svg",
      alt: "Logo Hospital San Rafael",
    },
  ]);

  const [logosLlamadorMeseros] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209440/logo_2_2x-8_jkuild.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_4_2x-8_b9hwiy.webp",
      alt: "Logo Piccolo",
    },
  ]);

  const [logosLocalizadores] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_1_2x-8_av2kmi.webp",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209439/logo_3_2x-8_ovkmnz.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425713/Logo_cliente_1_jutge5.svg",
      alt: "Logo Don Jediondo",
    },
  ]);

  const [logosTurnoMaster] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739209737/logo_2_1_n8aqlu.svg",
      alt: "Logo Liga Colombiana Contra El Cancer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
  ]);

  const [logosHome] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425714/Logo_cliente_3_f6ba1f.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738425712/Logo_cliente_4_g8ztvp.svg",
      alt: "Logo Smart Fit",
    },
  ]);

  return (
    <LogosContext.Provider
      value={{
        logosTermicos,
        logosTurnos,
        logosDispensadorTiquetes,
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
