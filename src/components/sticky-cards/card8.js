import React from 'react';
import './card3-cases.css'; 

const Card8 = () => {
  return (
    <div id="card8" className="card">
      <div className="card-body" id="services">
        <div className="left" id="center-services">
          <h2 className="services-title">Branding and Creative Services</h2>
          <p className="services-text justify">
            Build a strong brand identity with our creative services that include logo design, business cards, and promotional materials that resonate with your audience.
          </p>
        </div>
        <div className="right" id="responsive-sketch">
          <video id="services-animation" autoPlay loop muted>
            <source src="/videos/03.mp4" type="video/mp4" />
            Your browser doesn&apos;t support video reproductions
            </video>
        </div>
      </div>
    </div>
  );
};

export default Card8;