// components/CardJobLab.js

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import './card3-cases.css';

const CardJobLab = () => {
  useEffect(() => {
    const containers = document.querySelectorAll('.image-container, .image-container-mobile');

    const observers = [];

    containers.forEach((container) => {
      const joblabColor = container.querySelector('#color');
      const joblab = container.querySelector('#black-and-white');
      let timeoutId;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Delay the transition
            timeoutId = setTimeout(() => {
              joblabColor.style.opacity = '1';
              joblab.style.opacity = '0';
            }, 500); // Delay in milliseconds (500ms)
          } else {
            // Reset styles immediately when out of viewport
            clearTimeout(timeoutId);
            joblabColor.style.opacity = '0';
            joblab.style.opacity = '1';
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(container);
      observers.push(observer);
    });

    // Cleanup observers when the component is unmounted
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div id="card3" className="card">
      <div className="card-body">
        <div className="left">
          <h2 className="cases-title">Job Lab</h2>
          <p className="cases-text">
            <strong>Client</strong>
            <br /> German Academic Exchange Service (DAAD)
          </p>
          <p className="cases-text">
            <strong>What we did</strong>
            <br /> Brand Design <br /> Poster Design <br /> Web Development <br /> Website Design
          </p>
          <p className="justify cases-text">
            <strong>Overview</strong>
            <br />
            In May and June 2024, the DAAD in China organized the project Job Lab in collaboration with the German 
            Embassy, the Goethe-Institut, and other renowned institutions. Under the motto &quot;With German into the Future,&quot;
             the fair offered career perspectives for Chinese students of German to support them on their path to the working world.
          </p>
          {/* Wrap the button with Link */}
          <Link href="/joblab">
            <button className="send-button">More Information</button>
          </Link>
        </div>
        <div className="right">
          {/* Wrap the image containers with Link */}
          <Link href="/joblab">
            <div className="image-container">
              <img src="/images/JobLab-grey.png" alt="JobLab Logo" id="black-and-white" />
              <img src="/images/JobLab-color.png" alt="JobLab Logo" id="color" />
            </div>
          </Link>
          <Link href="/joblab">
            <div className="image-container-mobile">
              <img src="/images/JobLab-grey-mobile2.png" alt="JobLab Logo" id="black-and-white" />
              <img src="/images/JobLab-color-mobile2.png" alt="JobLab Logo" id="color" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardJobLab;





