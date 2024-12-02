"use client";

import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let canvas;

      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");
        canvas.style("position", "fixed");
      };

      p.draw = () => {
        p.background("#000000");

        let ctx = p.drawingContext;
        let gradient = ctx.createLinearGradient(0, 0, p.width, 0);
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(0.25, "yellow");
        gradient.addColorStop(0.5, "orange");
        gradient.addColorStop(0.75, "red");
        gradient.addColorStop(1, "#000000");
        ctx.strokeStyle = gradient;

        p.strokeWeight(1);
        p.line(0, p.height / 2, p.width, p.height / 2);
        p.line(p.width / 2, 0, p.width / 2, p.height);

        let centerX = p.width / 2;
        let centerY = p.height / 2;
        let circleX = centerX + (p.mouseX - centerX) / 8;
        let circleY = centerY + (p.mouseY - centerY) / 4;
        let circleX2 = centerX - (p.mouseX - centerX) / 8;
        let circleY2 = centerY - (p.mouseY - centerY) / 4;
        let circleX3 = centerX - (p.mouseX - centerX) / 8;
        let circleY3 = centerY + (p.mouseY - centerY) / 4;
        let circleX4 = centerX + (p.mouseX - centerX) / 8;
        let circleY4 = centerY - (p.mouseY - centerY) / 4;

        p.noFill();
        p.ellipse(circleX, circleY, 250, 250);
        p.ellipse(circleX2, circleY2, 250, 250);
        p.ellipse(circleX3, circleY3, 250, 250);
        p.ellipse(circleX4, circleY4, 250, 250);
        p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 250, 250);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;