import React, { useState, useEffect } from "react";
import "../App.css";

const Contenido = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div className="flex flex-col pt-32 pb-5p5rem px-9 text-center text-xl leading-6 sm:pt-32 md:px-9 md:pt-8 md:text-justify md:text-xl md:leading-6 xl:pt-8 pl-xl xl:text-4xl lineheight-p-xl xl:pb-28 ">
      <p className="wtext-min-md wtext-min-xl">
        El futuro de la criptoeconomía en América Latina y el Caribe es una
        <span className=" font-bold">
          {" "}
          transmisión virtual en vivo que reúne a los líderes de opinión de
          todas las industrias
        </span>{" "}
        para debatir el futuro de esta nueva tecnología en la región.
      </p>
      <p className="pt-p wtext-max-md xl:w-4/5 wtext-max-xl">
        <span className="font-bold col-yellow-secundary">
          Conéctate el 30 y 31 de agosto
        </span>{" "}
        para sintonizar los debates sobre la regulación, el impacto de las
        criptomonedas en la vida, la cultura y las finanzas de la región.
      </p>
    </div>
  );
};

export default Contenido;
