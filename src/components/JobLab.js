import React from 'react';

import JoblabCard1 from './sticky-cards/joblab-card1'; 
import JoblabCard2 from './sticky-cards/joblab-card2';
import JoblabCard3 from './sticky-cards/joblab-card3';
import JoblabCard4 from './sticky-cards/joblab-card4';
import JoblabCard5 from './sticky-cards/joblab-card5';
import JoblabCard6 from './sticky-cards/joblab-card6';
import JoblabCard7 from './sticky-cards/joblab-card7';
import JoblabCard8 from './sticky-cards/joblab-card8';



import './sticky-cards/sticky-cards.css'; 

const JobLab = () => {
  return (
    <div id='joblab-cards-container'>
      <div id="cards" className="container">
      <JoblabCard1 />
      <JoblabCard2 />
      <JoblabCard3 />
      <JoblabCard4 />
      <JoblabCard5 />
      <JoblabCard6 />
      <JoblabCard7 />
      <JoblabCard8 />
      </div>
    </div>
  );
};

export default JobLab;
