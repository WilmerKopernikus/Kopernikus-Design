import React from 'react';
import Card2 from './card2';
import CardJobLab from './card3-joblab';
import CardBlancec from './card4-blancec';
import Card13 from './card13';
import './sticky-cards.css'; 



const StickyCardsContainer = () => {
  return (
    <div id="cards" className="container">
      <Card2 />
      <CardJobLab />
      <CardBlancec />
      <Card13 />
    </div>
  );
};

export default StickyCardsContainer;
