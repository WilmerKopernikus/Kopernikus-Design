"use client";
import { useEffect, useRef } from "react";
import p5 from "p5";

const CubeSketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const overlaySketch = (p) => {
      let rotationX = 0;
      let rotationY = 0;
      let isRotating = true;

      p.setup = () => {
        // Create the canvas and attach it to the ref div
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent(sketchRef.current);
        p.angleMode(p.DEGREES);
      };

      p.draw = () => {
        p.background(0); // Set black background
        p.normalMaterial(); // Basic material for the cube

        if (isRotating) {
          rotationX += 1; // Increase rotation for X-axis
          rotationY += 1.5; // Increase rotation for Y-axis
        }

        p.push();
        p.fill(0, 0, 0, 100); // Set fill color (translucent black)
        p.stroke(255); // Set stroke color (white)
        p.strokeWeight(2);
        p.rotateX(rotationX);
        p.rotateY(rotationY);
        p.box(150); // Draw the box
        p.pop();
      };

      p.mousePressed = () => {
        // Stop rotation if the mouse is pressed inside the cube area
        const xDist = Math.abs(p.mouseX - p.width / 2);
        const yDist = Math.abs(p.mouseY - p.height / 2);
        if (xDist < 75 && yDist < 75) {
          isRotating = false;
        }
      };

      p.mouseReleased = () => {
        isRotating = true; // Resume rotation on mouse release
      };

      p.windowResized = () => {
        // Resize the canvas if the window is resized
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    // Create the p5 instance and mount it
    const p5Instance = new p5(overlaySketch);

    // Cleanup function to remove the p5 instance on component unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  // Return the div where the p5 sketch will be attached
  return <div ref={sketchRef} style={{ width: "100%", height: "100%" }} />;
};

export default CubeSketch;



  
  
  