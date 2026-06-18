import React from 'react'
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer className='footer'
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <a>Portafolio de Alejandro Lora Garza WEB &copy; React - 2025</a>
    </motion.footer>
  )
}

export default Footer
