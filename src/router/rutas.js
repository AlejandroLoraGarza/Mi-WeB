/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Inicio from "../componentes/Inicio";
import Portafolio from '../componentes/Portafolio';
import CV from '../componentes/CV';
import Contacto from '../componentes/Contacto';
import Header_nav from '../componentes/layout/Header_nav';
import Footer from '../componentes/layout/Footer';
import { AnimatePresence, motion } from "framer-motion";
import RutasAnimadas from './RutasAnimadas';

const rutas = ({ setfondo, icon_color, set_icon_color }) => {

    return (

        <BrowserRouter className='cuerpo'>

            {/*HEADER Y NAVEGACION*/}
            <Header_nav setfondo={setfondo} set_icon_color={set_icon_color} />

            {/*CONTENIDO CENTRAL*/}
            <section className='content'>
                <RutasAnimadas icon_color={icon_color} />
            </section>

            {/*FOOTER*/}
            <Footer />

        </BrowserRouter>

    )
}

export default rutas
