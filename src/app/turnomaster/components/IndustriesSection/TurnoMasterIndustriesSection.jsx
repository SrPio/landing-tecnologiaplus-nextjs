import style from "./TurnoMasterIndustriesSection.module.scss";

function TurnoMasterIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        TurnoMaster se adapta <br className={style.hide__on__mobile} />
        a distintos sectores para <br className={style.hide__on__mobile} />
        organizar las filas
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
            alt="icono de salud"
          />
          <p>Sector salud</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
            alt="icono de oficina"
          />
          <p>Oficinas</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
            alt="icono de otras industrias"
          />
          <p>Otras industrias</p>
        </li>
      </ul>
    </section>
  );
}

export default TurnoMasterIndustriesSection;
