import React from 'react'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Inicio from "../componentes/Inicio";
import Portafolio from '../componentes/Portafolio';
import CV from '../componentes/CV';
import Contacto from '../componentes/Contacto';
import Header_nav from '../componentes/layout/Header_nav';
import Footer from '../componentes/layout/Footer';
import { AnimatePresence, motion } from "framer-motion";
import { exp } from 'three/tsl';
import Page from '../componentes/Page';

const RutasAnimadas = ({icon_color}) => {
 
    const location = useLocation();
 return ( 
    <AnimatePresence mode = "wait">
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page>
              <Inicio />
            </Page>
          }
        />

        <Route
          path="/portafolio"
          element={
            <Page>
              <Portafolio />
            </Page>
          }
        />

        <Route
          path="/cv"
          element={
            <Page>
              <CV icon_color={icon_color} />
            </Page>
          }
        />

        <Route
          path="/contacto"
          element={
            <Page>
              <Contacto />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
 );
}
export default RutasAnimadas