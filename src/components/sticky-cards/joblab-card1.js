'use client';
import React from 'react';
import './card3-cases.css'; 

const JoblabCard1 = () => {
  return (
    <div id="joblab-card1" className="card">
      <div className="card-body" id="joblab-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">Design and Web Development</h2>
          <p className="joblab-text justify">
          Job Lab is a project commissioned by the DAAD (German Academic Exchange Service), 
          China. In collaboration with the German Embassy in Beijing China, and the German 
          consulates from Shanghai and Guangzhou. The project includes graphic design, website 
          development, and poster design.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container">
            <img src="/images/Logo-JobLab.jpg" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/Logo-JobLab.jpg" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard1;