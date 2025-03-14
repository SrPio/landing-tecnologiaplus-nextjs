"use client";
import { useState } from "react";
import style from "./ContactForm.module.scss";
import { GoCheckCircleFill } from "react-icons/go";

function ContactForm({ noMarginTop = false }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={style.contact__form}>
      <div className={style.contact__form__container}>
        <div
          className={`${style.form__container} ${
            noMarginTop ? style.noMarginTop : ""
          }`}
        >
          {submitted ? (
            <div className={style.message__container}>
              <div className={style.message__head}>
                <GoCheckCircleFill className={style.check__icon} />
                <h2>Mensaje recibido</h2>
              </div>
              <p>En la próxima hora hábil estaremos en contacto contigo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Llámanos o escríbenos</h2>
              <input type="text" placeholder="Nombre" />
              <input type="tel" placeholder="Celular" />
              <input type="email" placeholder="Correo" />
              <input type="text" placeholder="¿Qué producto te interesa?" />
              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
        <div className={style.contact__texts}>
          <h2 className={style.contact__title}>Te brindamos asesoría</h2>
          <p>Para escoger la mejor opción según tu necesidad</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
