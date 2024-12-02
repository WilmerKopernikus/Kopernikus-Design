import React from 'react';
import './card3-cases.css'; 

const Card11 = () => {
  return (
    <div id="card11" className="card">
     <div className="card-body" id="services">
    <div className="left" id="center-services">
      <h2 className="services-title">Web Hosting and Domain Services</h2>
        <p className="services-text justify">
        Get reliable web hosting and domain management services that ensure your site remains secure and accessible around the clock.
        </p>
    </div>

      
      <div className="right" id="responsive-sketch">
        <video id="services-animation" autoPlay loop muted>
          <source src="/videos/06.mp4" type="video/mp4" />
          Your browser doesn&apos;t support video reproductions
        </video>
      </div>


  </div>
</div>
);
};

export default Card11;