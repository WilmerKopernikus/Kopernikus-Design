import React from 'react';
import './card3-cases.css'; 

const Card12 = () => {
  return (
    <div id="card12" className="card">
      <div className="card-body" id="services">
        <div className="left" id="center-services">
          <h2 className="services-title">Maintenance and Support</h2>
          <p className="services-text justify">
          Our ongoing support and maintenance services keep your site updated and functioning optimally. We handle security updates, bug fixes, and performance tuning to prevent any disruptions.
          </p>
        </div>
        <div className="right" id="responsive-sketch">
          <video id="services-animation" autoPlay loop muted>
            <source src="/videos/cube.mp4" type="video/mp4" />
            Your browser doesn&apos;t support video reproductions
          </video>
        </div>
      </div>
    </div>
  );
};

export default Card12;