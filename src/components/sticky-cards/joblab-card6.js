'use client';
import React from 'react';

const JoblabCard6 = () => {
  return (
    <div id="joblab-card6" className="card">
      <div className="card-body" id="gif-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">Animation</h2>
          <p className="joblab-text justify">
          A welcome animation that also serves as a menu for navigation on the website.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container" id="gif-container">
            <img src="/images/index-de.gif" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/index-de.gif" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard6;