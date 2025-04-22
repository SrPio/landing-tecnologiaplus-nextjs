"use client";
import { useState, useRef, useEffect } from "react";
import style from "./ContactForm.module.scss";
import { GoCheckCircleFill } from "react-icons/go";
import emailjs from '@emailjs/browser';

// EmailJS configuration - use environment variables if available, fallback to hardcoded values
// You can manage your EmailJS account at https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  : 'not_present';
const EMAILJS_TEMPLATE_ID = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  : 'not_present';
const EMAILJS_SERVICE_ID = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  : 'not_present'; 

// Local storage key to track form submissions
const FORM_SUBMISSION_KEY = "contact_form_submission";
// Cooldown period in milliseconds (1 hour)
const SUBMISSION_COOLDOWN = 60 * 60 * 1000;

function ContactForm({ noMarginTop = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const formRef = useRef();

  // Check for previous submissions on component mount
  useEffect(() => {
    const checkPreviousSubmission = () => {
      try {
        const lastSubmission = localStorage.getItem(FORM_SUBMISSION_KEY);
        if (lastSubmission) {
          const submissionTime = parseInt(lastSubmission, 10);
          const currentTime = Date.now();
          const timeElapsed = currentTime - submissionTime;
          
          if (timeElapsed < SUBMISSION_COOLDOWN) {
            setCooldownActive(true);
            setCooldownRemaining(SUBMISSION_COOLDOWN - timeElapsed);
            
            // Set a timer to remove the cooldown when it expires
            const timerId = setTimeout(() => {
              setCooldownActive(false);
              localStorage.removeItem(FORM_SUBMISSION_KEY);
            }, SUBMISSION_COOLDOWN - timeElapsed);
            
            return () => clearTimeout(timerId);
          } else {
            // Clear expired submission
            localStorage.removeItem(FORM_SUBMISSION_KEY);
          }
        }
      } catch (error) {
        console.error("Error checking local storage:", error);
      }
    };
    
    checkPreviousSubmission();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Get form data
      const formData = new FormData(formRef.current);
      const name = formData.get('user_name');
      const email = formData.get('user_email');
      const phone = formData.get('user_phone');
      const message = formData.get('message');
      
      // Create template parameters with phone concatenated to message
      const templateParams = {
        user_name: name,
        user_email: email,
        message: `${message}\n\nNúmero de contacto: ${phone}`
      };
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitted(true);
        // Save submission timestamp to localStorage
        try {
          localStorage.setItem(FORM_SUBMISSION_KEY, Date.now().toString());
        } catch (error) {
          console.error("Error saving to local storage:", error);
        }
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setError('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      console.error('Email error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Format remaining cooldown time into minutes and seconds
  const formatCooldownTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <h2>Llámanos o escríbenos</h2>
              <input type="text" name="user_name" placeholder="Nombre" required />
              <input type="tel" name="user_phone" placeholder="Celular" required />
              <input type="email" name="user_email" placeholder="Correo" required />
              <input type="text" name="message" placeholder="En qué te podemos ayudar." required />
              
              {error && <p className={style.error_message}>{error}</p>}
              
              {cooldownActive ? (
                <p className={style.cooldown_message}>
                  Ya has enviado un mensaje. Puedes enviar otro en {formatCooldownTime(cooldownRemaining)}.
                </p>
              ) : (
                <button type="submit" disabled={loading || cooldownActive}>
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              )}
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
