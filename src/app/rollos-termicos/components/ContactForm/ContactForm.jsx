"use client";
import style from "./ContactForm.module.scss";

function ContactForm() {
  return (
    <section className={style.contact__form}>
      <div className={style.contact__form__container}>
        <form>
          <h2>Llámanos o escríbenos</h2>
          <input
            type="text"
            placeholder="Nombre"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Nombre")}
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Celular"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Celular")}
          />
          <input
            type="email"
            placeholder="Correo"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Correo")}
          />
          <input
            type="text"
            placeholder="¿Que producto te interesa?"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = "¿Que producto te interesa?")
            }
          ></input>
          <button type="submit">Enviar</button>
        </form>
        <div className={style.contact__texts}>
          <h2 className={style.contact__title}>Te brindamos asesoría</h2>
          <p>Para escoger la mejor opción según tu necesidad</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
