"use client";
import React from "react";
import "./Loader.css"; // Asegúrate de crear este archivo CSS
const Loader = () => {
  return (
    <div className="loader-container">
      <img src="images/loading.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};
export default Loader;
