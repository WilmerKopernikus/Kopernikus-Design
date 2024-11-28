'use client';
import React from 'react';
import './card3-cases.css'; 

const CardBlancec = () => {
  return (
    <div id="card3" className="card">
      <div className="card-body">
        <div className="half-width left">
          <h2 className="cases-title">Blancec S.A.S.</h2>
          <p className="cases-text"><strong>Client</strong><br></br>Blancec Laboratories S.A.S.</p>
          <p className="cases-text"><strong>What we did</strong><br></br>Web Development & Design<br></br>Brand Design<br></br>Database<br></br>Quote Automation</p>
          <p className="overview cases-text"><strong>Overview</strong><br></br>BLANCEC S.A.S is a laboratory from Colombia specialized in product testing. They evaluate products from various industries to ensure they meet the necessary regulations for commercialization in global markets, guaranteeing that they are high-quality, safe, and reliable.</p>
          <button className="send-button">More Information</button>
        </div>
        <div className="half-width right">
        <div className="image-container">
            <img
              src="/images/Blancec-grey.png"
              alt="Blancec Logo"
              id="black-and-white"
            />
            <img
              src="/images/Blancec-color.png"
              alt="Blancec Logo"
              id="color"
            />
          </div>
          <div className="image-container-mobile">
            <img
              src="/images/Blancec-grey-mobile2.png"
              alt="Blancec Logo"
              id="black-and-white"
            />
            <img
              src="/images/Blancec-color-mobile2.png"
              alt="Blancec Logo"
              id="color"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlancec;