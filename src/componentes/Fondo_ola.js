import React, { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

const FondoOla = ({ fondo }) => {
  const vantaRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) {
      vantaRef.current = WAVES({
        el: containerRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 0.0,
        minWidth: 0.0,
        scale: 1.0,
        scaleMobile: 0.5,
        color: fondo,
        shininess: 30.0,
        waveHeight: 10.0,
        waveSpeed: 1,
        zoom: 0.7,
      });
    } else {
      vantaRef.current.setOptions({ color: fondo }); // Solo actualiza el color si cambia
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [fondo]); // Dependencia en 'fondo'

  return (
    <div id="canva_fondo"
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default FondoOla;
