import React from 'react';
import './card3-cases.css'; 

const Card6 = () => {
  return (
    <div id="card6" className="card">
      <div className="card-body" id="services">
        <div className="left" id="center-services">
          <h2 className="services-title">Website Development</h2>
          <p className="services-text justify">
            We go beyond aesthetics to build robust websites that function flawlessly. Our development expertise includes both front-end and back-end solutions, crafting everything from simple informational sites to complex web applications.
          </p>
        </div>
        <div className="right" id="responsive-sketch">
          <video id="services-animation" autoPlay loop muted>
            <source src="/videos/cube2.mp4" type="video/mp4" />
            Your browser doesn&apos;t support video reproductions
          </video>
        </div>
      </div>
    </div>
  );
};

export default Card6;

