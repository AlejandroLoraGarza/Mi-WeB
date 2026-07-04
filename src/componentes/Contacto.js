import React from 'react'
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3qxmvc",
        "template_oot5p6x",
        form.current,
        "UwT0-DUJJ4CaaGCtD"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado", result.text);
          alert("Correo enviado correctamente.");
          form.current.reset(); // Limpiar el formulario
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          alert("Hubo un problema al enviar el correo.");
        }
      );
  };

  return (
    <motion.div className='cv'
     /*  initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }} */
    >

      <h1>Llena los campos</h1>

      <form ref={form} onSubmit={sendEmail} className="contact" id='contact'>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="text" name="apellidos" placeholder="Apellidos" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="mensaje" placeholder="Motivo de contacto" required />
        <input type="submit" value="Enviar" />
      </form>
    </motion.div>
  )
}

export default Contacto
