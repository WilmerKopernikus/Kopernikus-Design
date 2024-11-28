'use client';
import React from 'react';

const JoblabCard4 = () => {
  return (
    <div id="joblab-card4" className="card">
      <div className="card-body" id="joblab-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">German Learners in China</h2>
          <p className="joblab-text justify">
          The Job Lab took place at the major locations of Guangzhou, Shanghai, and Beijing. A supporting program of lectures, panel discussions, and application training complemented the exhibition at all locations.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container">
            <img src="/images/joblab-foto-03.jpg" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/joblab-foto-03.jpg" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard4;