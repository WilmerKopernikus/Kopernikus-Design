import React from 'react';
import './card3-cases.css'; 

const Card7 = () => {
  return (
  <div id="card7" className="card">
    <div className="card-body" id="services">
      <div className="left" id="center-services">
        <h2 className="services-title">Web Design and Redesign</h2>
        <p className="services-text justify">
        Our team specializes in creating visually stunning and user-friendly websites. Whether you need a brand-new site or a refreshed design for your existing site, we ensure it looks great and performs seamlessly on all devices.
        </p>
      </div>  
      <div className="right" id="responsive-sketch">
        <video id="services-animation" autoPlay loop muted>
          <source src="/videos/02.mp4" type="video/mp4" />
          Your browser doesn&apos;t support video reproductions
        </video>
      </div>
    </div>
  </div>
  );
};

export default Card7;