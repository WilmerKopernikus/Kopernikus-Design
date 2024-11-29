'use client';
import React from 'react';

const JoblabCard5 = () => {
  return (
    <div id="joblab-card5" className="card">
      <div className="card-body" id="joblab-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">In Cooperation with German Foreign Representations</h2>
          <p className="joblab-text justify">
          The Job Lab was created in collaboration with the German foreign representations 
          in Guangzhou, Shanghai, and Beijing, the German Centre Shanghai, the German Centre Beijing, 
          the AHK Greater China, Advantage Austria, the OeAD, and the Goethe-Institut Beijing. By 
          involving DAAD lecturers from across China as workshop leaders, it also functioned as a 
          comprehensive project within the Lecturers&apos; Program.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container">
            <img src="/images/joblab-foto-04.jpeg" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/joblab-foto-04.jpeg" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard5;