import React from 'react'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import Inicio from "../componentes/Inicio";
import Portafolio from '../componentes/Portafolio';
import CV from '../componentes/CV';
import Contacto from '../componentes/Contacto';
import Header_nav from '../componentes/layout/Header_nav';
import Footer from '../componentes/layout/Footer';
import { AnimatePresence, motion } from "framer-motion";
import Page from '../componentes/Page';

const RutasAnimadas = ({ icon_color }) => {

  const location = useLocation();
  const routeOrder = {
    "/": 0,
    "/inicio": 0,
    "/portafolio": 1,
    "/cv": 2,
    "/contacto": 3,
  }
  const current = routeOrder[location.pathname] ?? 0;
  const previous = useRef(current);

  const direction = current > previous.current ? 1 : -1;

  useEffect(() => {
    previous.current = current;
  }, [current]);


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page direction={direction}>
              <Inicio />
            </Page>
          }
        />

        <Route
          path="/inicio"
          element={
            <Page direction={direction}>
              <Inicio />
            </Page>
          }
        />

        <Route
          path="/portafolio"
          element={
            <Page direction={direction}>
              <Portafolio />
            </Page>
          }
        />

        <Route
          path="/cv"
          element={
            <Page direction={direction}>
              <CV icon_color={icon_color} />
            </Page>
          }
        />

        <Route
          path="/contacto"
          element={
            <Page direction={direction}>
              <Contacto />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
export default RutasAnimadas