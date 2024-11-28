'use client';
import React from 'react';
import './card3-cases.css'; 

const Card9 = () => {
  return (
    <div id="card9" className="card">
      <div className="card-body" id="services">
        <div className="left" id="center-services">
          <h2 className="services-title">E-commerce Solutions</h2>
          <p className="services-text justify">
          Launch and grow your online store with our e-commerce services. We handle everything from product displays and shopping carts to checkout processes and secure payment integration, using platforms like Shopify and Magento.
          </p>
        </div>
        <div className="right" id="responsive-sketch">
          <video id="services-animation" autoPlay loop muted>
            <source src="/videos/04.mp4" type="video/mp4" />
            Your browser doesn't support video reproductions.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Card9;