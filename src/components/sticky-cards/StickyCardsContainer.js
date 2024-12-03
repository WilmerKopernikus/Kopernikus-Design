"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader"; // Asegúrate de ajustar el path si está en otro lugar

const P5Background = dynamic(() => import("./P5Background"), { ssr: false });

import Card1 from "./card1";
//import Card2 from "./card2";
//import CardJobLab from "./card3-joblab";
//import CardBlancec from "./card4-blancec";
//import Card5 from "./card5";
//import Card6 from "./card6";
//import Card7 from "./card7";
//import Card8 from "./card8";
//import Card9 from "./card9";
//import Card10 from "./card10";
//import Card11 from "./card11";
//import Card12 from "./card12";
//import Card13 from "./card13";
import "./sticky-cards.css";

const StickyCardsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga completa después de 2 segundos
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer); // Limpia el timer al desmontar
  }, []);

  return (
    <>
      {isLoading && <Loader />} {/* Muestra el loader mientras isLoading es true */}
      <div id="sticky-cards-container" style={{ display: isLoading ? "none" : "block" }}>
        <P5Background />
        <div id="cards" className="container">
          <Card1 />
          {/*<Card2 />
          <CardJobLab />
          <CardBlancec />
          <Card5 />
          <Card6 />
          <Card7 />
          <Card8 />
          <Card9 />
          <Card10 />
          <Card11 />
          <Card12 />
          <Card13 />*/}
        </div>
      </div>
    </>
  );
};

export default StickyCardsContainer;


