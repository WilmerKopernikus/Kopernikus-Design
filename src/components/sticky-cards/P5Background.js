"use client";

import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    // Define el sketch de p5.js
    const sketch = (p) => {
      const TOTAL = 4000;
      let blobs = [];
      let colors;
      let variation = 0;
      let xScale, yScale, centerX, centerY;
      let changeDuration = 3000;
      let lastChange = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).style("position", "fixed").style("z-index", "-1");
        p.background(0, 0, 70);

        colors = [p.color("#E32C36"), p.color("#FF5733"), p.color("#DCA80D"), p.color("#1AC7C4")];
        start();
      };

      const start = () => {
        centerX = p.width / 2;
        centerY = p.height / 2;
        xScale = p.width / 20;
        yScale = (p.height / 20) * (p.width / p.height);

        blobs = [];
        p.background("#1a0633");
        variation = 0;
        lastChange = p.millis();

        for (let i = 0; i < TOTAL; i++) {
          addParticle();
        }
      };

      p.draw = () => {
        while (blobs.length < TOTAL) {
          addParticle();
        }

        p.noStroke();
        p.fill(0, 10);
        p.rect(0, 0, p.width, p.height);

        let time = p.millis();
        if (time - lastChange > changeDuration) {
          lastChange = time;
          variation++;
          if (variation > 10) variation = 0;
        }

        const stepsize = p.deltaTime * 0.0008;
        for (let i = blobs.length - 1; i >= 0; i--) {
          let blob = blobs[i];
          const x = getSlopeX(blob.x, blob.y);
          const y = getSlopeY(blob.x, blob.y);
          blob.x += blob.direction * x * stepsize;
          blob.y += blob.direction * y * stepsize;

          const printX = getXPrint(blob.x);
          const printY = getYPrint(blob.y);
          p.stroke(blob.color);
          p.strokeWeight(blob.size);
          p.line(printX, printY, blob.lastX, blob.lastY);
          blob.lastX = printX;
          blob.lastY = printY;

          const border = 200;
          if (printX < -border || printY < -border || printX > p.width + border || printY > p.height + border) {
            blobs.splice(i, 1);
          }
        }
      };

      const addParticle = () => {
        const x = p.random(p.width);
        const y = p.random(p.height);
        const blob = {
          x: getXPos(x),
          y: getYPos(y),
          size: 1,
          lastX: x,
          lastY: y,
          color: p.random(colors),
          direction: p.random(0.1, 1) * p.random([-1, 1]),
        };
        blobs.push(blob);
      };

      const getSlopeX = (x, y) => {
        switch (variation) {
          case 0: return Math.cos(y);
          case 1: return Math.cos(y * 5) * x * 0.3;
          case 7: return Math.sin(y * 0.1) * 3;
          case 9: return y / 3;
          case 10: return -y;
          default: return 1;
        }
      };

      const getSlopeY = (x, y) => {
        switch (variation) {
          case 0: return Math.sin(x);
          case 1: return Math.sin(x * 5) * y * 0.3;
          case 7: return -Math.sin(x * 0.1) * 3;
          case 9: return (x - x * x * x) * 0.01;
          case 10: return -Math.sin(x);
          default: return Math.sin(x) * Math.cos(y);
        }
      };

      const getXPos = (x) => (x - centerX) / xScale;
      const getYPos = (y) => (y - centerY) / yScale;
      const getXPrint = (x) => xScale * x + centerX;
      const getYPrint = (y) => yScale * y + centerY;

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
