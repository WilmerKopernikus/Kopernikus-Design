'use client';
import React from 'react';

const JoblabCard3 = () => {
  return (
    <div id="joblab-card3" className="card">
      <div className="card-body" id="joblab-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">Poster Exhibition</h2>
          <p className="joblab-text justify">
          This was not a conventional job fair but rather a mobile and sustainable poster exhibition that showcased companies and their contacts on posters.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container">
            <img src="/images/joblab-foto-02.jpg" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/joblab-foto-02.jpg" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard3;