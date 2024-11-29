'use client';
import React from 'react';
import './card3-cases.css'; 

const Card10 = () => {
  return (
    <div id="card10" className="card">
      <div className="card-body" id="services">
        <div className="left" id="center-services">
          <h2 className="services-title">Search Engine Optimization (SEO)</h2>
          <p className="services-text justify">
          Increase your visibility on search engines and attract more visitors with our SEO services. We optimize your site structure and content to boost your rankings and drive traffic.
          </p>
        </div>
        <div className="right" id="responsive-sketch">
          <video id="services-animation" autoPlay loop muted>
            <source src="/videos/05.mp4" type="video/mp4" />
            Your browser doesn&apos;t support video reproductions
          </video>
        </div>
      </div>
    </div>
  );
};

export default Card10;