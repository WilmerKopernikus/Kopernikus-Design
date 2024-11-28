'use client';
import React from 'react';

const JoblabCard2 = () => {
  return (
    <div id="joblab-card2" className="card">
      <div className="card-body" id="joblab-services">
        <div className="left" id="center-services">
          <h2 className="cases-title">With German into the Future</h2>
          <p className="joblab-text justify">
          In May and June 2024, the DAAD in China, as part of the Lecturers' Program initiated by 
          DAAD lecturers Katharina Eberle and Katharina Quicker, organized the innovative project 
          Job Lab. Under the motto "With German into the Future," the fair offered career perspectives 
          for Chinese learners of German to support them on their path into the working world.
          </p>
        </div>
        <div className="right" id="joblab-images">
          <div className="image-container">
            <img src="/images/joblab-foto-01.jpg" alt="Joblab" />
          </div>
          <div className="image-container-mobile">
            <img src="/images/joblab-foto-01.jpg" alt="Joblab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoblabCard2;