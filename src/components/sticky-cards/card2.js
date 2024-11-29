"use client"; // Ensure this is a client component

import React, { useEffect } from "react";

const Card2 = () => {
  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pause the p5.js sketch when Card2 is in the viewport
            if (typeof window.pauseP5Sketch === "function") {
              window.pauseP5Sketch();
            }
          } else {
            // Resume the p5.js sketch when Card2 exits the viewport
            if (typeof window.resumeP5Sketch === "function") {
              window.resumeP5Sketch();
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    const target = document.getElementById("card2");
    if (target) observer.observe(target);

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  return (
    <div id="card2" className="card">
      <div className="video-body">
        <video autoPlay loop muted>
          <source src="/videos/cases.mp4" type="video/mp4" />
          Your browser doesn&apos;t support video reproductions
        </video>
        <video id="cube" autoPlay loop muted>
          <source src="/videos/cube.mp4" type="video/mp4" />
          Your browser doesn&apos;t support video reproductions
        </video>
      </div>
    </div>
  );
};

export default Card2;


