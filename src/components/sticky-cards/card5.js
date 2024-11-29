"use client"; // Ensure this is a client component

import React, { useEffect } from "react";

const Card5 = () => {
  return (
    <div id="card5" className="card">
      <div className="video-body">
        <video autoPlay loop muted>
          <source src="/videos/services.mp4" type="video/mp4" />
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

export default Card5;