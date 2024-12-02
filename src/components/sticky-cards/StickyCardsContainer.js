"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import P5Background with SSR disabled
const P5Background = dynamic(() => import('./P5Background'), { ssr: false }); // Adjust the import path if needed

import Card1 from './card1';
import Card2 from './card2';
import CardJobLab from './card3-joblab';
import CardBlancec from './card4-blancec';
import Card5 from './card5';
import Card6 from './card6';
import Card7 from './card7';
import Card8 from './card8';
import Card9 from './card9';
import Card10 from './card10';
import Card11 from './card11';
import Card12 from './card12';
import Card13 from './card13';
import './sticky-cards.css';

const StickyCardsContainer = () => {
  return (
    <div id="sticky-cards-container">
      <P5Background />
      <div id="cards" className="container">
        <Card1 />
        <Card2 />
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
        <Card13 />
      </div>
    </div>
  );
};

export default StickyCardsContainer;
