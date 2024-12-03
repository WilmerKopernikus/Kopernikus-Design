"use client";

import { useEffect, useRef } from 'react';

const TOTAL = 4000;

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let p5Instance;

    const loadP5 = async () => {
      const p5 = (await import('p5')).default;

      const sketch = (s) => {
        let blobs = [];
        let colors;
        let variation = 0;
        let xScale, yScale, centerX, centerY;

        // Auto change
        let changeDuration = 3000;
        let lastChange = 0;

        s.setup = () => {
          let canvas = s.createCanvas(s.windowWidth, s.windowHeight);
          canvas.position(0, 0);
          canvas.style('z-index', '-1'); // Ensures it stays behind content
          canvas.style('position', 'fixed');

          s.background(0, 0, 70);

          colors = [
            s.color('#E32C36'),
            s.color('#FF5733'),
            s.color('#DCA80D'),
            s.color('#1AC7C4'),
          ];

          start();
        };

        function start() {
          centerX = s.width / 2;
          centerY = s.height / 2;

          xScale = s.width / 20;
          yScale = (s.height / 20) * (s.width / s.height);

          blobs = [];
          s.background('#1a0633');
          variation = 0;
          lastChange = s.millis();
          for (let i = 0; i < TOTAL; i++) {
            addParticle();
          }
        }

        s.draw = () => {
          while (blobs.length < TOTAL) {
            addParticle();
          }

          // Fade
          s.noStroke();
          s.fill(0, 10);
          s.rect(0, 0, s.width, s.height);

          // Auto change
          let time = s.millis();
          if (time - lastChange > changeDuration) {
            lastChange = time;
            variation++;
            if (variation > 10) variation = 0;
          }

          var stepsize = s.deltaTime * 0.0008;
          for (var i = blobs.length - 1; i >= 0; i--) {
            let blob = blobs[i];

            var x = getSlopeX(blob.x, blob.y);
            var y = getSlopeY(blob.x, blob.y);
            blob.x += blob.direction * x * stepsize;
            blob.y += blob.direction * y * stepsize;

            x = getXPrint(blob.x);
            y = getYPrint(blob.y);
            s.stroke(blob.color);
            s.strokeWeight(blob.size);
            s.line(x, y, blob.lastX, blob.lastY);
            blob.lastX = x;
            blob.lastY = y;

            const border = 200;
            if (
              x < -border ||
              y < -border ||
              x > s.width + border ||
              y > s.height + border
            ) {
              blobs.splice(i, 1);
            }
          }
        };

        s.windowResized = () => {
          s.resizeCanvas(s.windowWidth, s.windowHeight);
        };

        function addParticle() {
          let x = s.random(s.width);
          let y = s.random(s.height);
          var blob = {
            x: getXPos(x),
            y: getYPos(y),
            size: 1,
            lastX: x,
            lastY: y,
            color: s.random(colors),
            direction: s.random(0.1, 1) * s.random([-1, 1]),
          };
          blobs.push(blob);
        }

        function getSlopeY(x, y) {
          switch (variation) {
            case 0:
              return Math.sin(x);
            case 1:
              return Math.sin(x * 5) * y * 0.3;
            case 2:
              return Math.cos(x * y);
            case 3:
              return Math.sin(x) * Math.cos(y);
            case 4:
              return Math.cos(x) * y * y;
            case 5:
              return Math.log(Math.abs(x)) * Math.log(Math.abs(y));
            case 6:
              return Math.tan(x) * Math.cos(y);
            case 7:
              return -Math.sin(x * 0.1) * 3; // orbit
            case 8:
              return -Math.sin(x * 0.1) * 3; // orbit
            case 9:
              return (x - x * x * x) * 0.01; // two orbits
            case 10:
              return -Math.sin(x);
            case 11:
              return -y - Math.sin(1.5 * x) + 0.7;
            case 12:
              return Math.sin(x) * Math.cos(y);
            default:
              return 0;
          }
        }

        function getSlopeX(x, y) {
          switch (variation) {
            case 0:
              return Math.cos(y);
            case 1:
              return Math.cos(y * 5) * x * 0.3;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return 1;
            case 7:
              return Math.sin(y * 0.1) * 3; // orbit
            case 8:
              return Math.sin(y * 0.1) * 3; // orbit
            case 9:
              return y / 3; // two orbits
            case 10:
              return -y;
            case 11:
              return -1.5 * y;
            case 12:
              return Math.sin(y) * Math.cos(x);
            default:
              return 0;
          }
        }

        function getXPos(x) {
          return (x - centerX) / xScale;
        }

        function getYPos(y) {
          return (y - centerY) / yScale;
        }

        function getXPrint(x) {
          return xScale * x + centerX;
        }

        function getYPrint(y) {
          return yScale * y + centerY;
        }
      };

      p5Instance = new p5(sketch, sketchRef.current);
    };

    if (typeof window !== 'undefined') {
      loadP5();
    }

    return () => {
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
