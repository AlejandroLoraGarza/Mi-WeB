import React from 'react'
import { trabajos } from './data/Trabajos'
import { Link } from 'react-router-dom'
import SliderImagenes from './Slider_imagenes'
import BDM1 from '../componentes/imagenes/BDM1.jpg'
import BDM2 from '../componentes/imagenes/BDM2.jpg'
import BDM3 from '../componentes/imagenes/BDM3.jpg'
import AAVD1 from '../componentes/imagenes/AAVD1.jpg'
import AAVD2 from '../componentes/imagenes/AAVD2.jpg'
import AAVD3 from '../componentes/imagenes/AAVD3.jpg'
import AAVD4 from '../componentes/imagenes/AAVD4.jpg'
import AAVD5 from '../componentes/imagenes/AAVD5.jpg'
import AAVD6 from '../componentes/imagenes/AAVD6.jpg'
import AAVD7 from '../componentes/imagenes/AAVD7.jpg'
import { motion } from 'framer-motion';

const imagenesBDM = [BDM1, BDM2, BDM3];
const imagenesAAVD = [AAVD1, AAVD2, AAVD3, AAVD4, AAVD5, AAVD6, AAVD7];



const Portafolio = () => {

  return (
    <motion.div className='cv'
      /* initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }} */
    >
      <div className='lista-trabajos'>
      { 
        trabajos.map(trabajo => {
          return (
            <>
              <motion.article key={trabajo.id} className='trabajo'>
                <h2 id="trabajo_titulo"><Link>{trabajo.nombre}</Link></h2>
                <SliderImagenes imagenurl={trabajo.id === "pia_bdm" ? imagenesBDM : trabajo.id === "pia_mad" ? imagenesAAVD : []} />
                <div className='trabajo_infoextra' id='trabajo_infoextra'>
                  <span>{trabajo.categorias}</span>
                  <h3>{trabajo.tecnologías}</h3>
                  <p>{trabajo.descripcion}</p>
                </div>
              </motion.article>
            </>
          );
        })
      }
      </div>
    </motion.div>
  )
}

export default Portafolio
