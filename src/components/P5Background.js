"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Background = () => {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null); // Store the p5 instance for global access

  useEffect(() => {
    const sketch = (p) => {
      let objs = [];
      let colors = ["#ffc400"];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1"); // Ensure it's behind other content
        canvas.style("position", "fixed");
        p.rectMode(p.CENTER);
        addObj();
        p.background(0);
      };

      p.draw = () => {
        bkgd();
        for (let i of objs) {
          i.show();
          i.move();
        }

        if (p.frameCount % 20 === 0) {
          addObj();
        }

        for (let i = 0; i < objs.length; i++) {
          if (objs[i].isDead) {
            objs.splice(i, 1);
          }
        }
      };

      const addObj = () => {
        let num = p.int(p.random(1, 25));
        for (let i = 0; i < num; i++) {
          objs.push(new OBR(p.random(p.width), p.random(p.height)));
        }
      };

      const bkgd = () => {
        let wid = p.width * 1.2;
        let c = 90;
        let w = wid / c;

        p.background("#00000015");
        for (let i = 0; i < c; i++) {
          for (let j = 0; j < c; j++) {
            let x = i * w + w / 2 + (p.width - wid) / 2;
            let y = j * w + w / 2 + (p.height - wid) / 2;
            p.noStroke();
            p.fill(255, 30);
            p.circle(x, y, p.width * 0.001);
          }
        }
      };

      class OBR {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.d = 0;
          this.sw = p.width * 0.005;
          this.isDead = false;
          this.dStep = p.random(0.2, 0.7);
          this.swStep = p.random(0.05, 0.009);
          this.col = p.color(p.random(colors));
          this.t1 = p.random(23904);
          this.t2 = p.random(43894);
          this.xStep = p.random(-1, 1) * 2;
          this.yStep = p.random(-1, 1) * 2;
          this.t1Step = p.random(0.1) * p.random();
          this.t2Step = p.random(0.1) * p.random();
          this.aStep = p.random(1, 2);
          this.rnd = p.int(p.random(2));
          this.alp = 255;
        }

        show() {
          if (this.rnd) {
            p.noFill();
            p.stroke(this.col);
            p.strokeWeight(this.sw);
          } else {
            p.noStroke();
            this.col.setAlpha(this.alp);
            p.fill(this.col);
          }
          p.circle(this.x, this.y, this.d);
        }

        move() {
          this.d += this.dStep;
          if (this.rnd) this.sw -= this.swStep;
          else this.alp -= this.aStep;
          if (this.sw <= 0 || this.alp <= 0) {
            this.isDead = true;
          }
          this.x += this.xStep * p.sin(this.t1);
          this.y += this.yStep * p.cos(this.t2);
          this.t1 += this.t1Step;
          this.t2 += this.t2Step;
        }
      };
    };

    // Create the p5 instance when the component mounts
    p5InstanceRef.current = new p5(sketch, sketchRef.current);

    // Dynamically assign pause and resume methods to the global object
    const setGlobalMethods = () => {
      if (typeof window !== "undefined") {
        window.pauseP5Sketch = () => p5InstanceRef.current.noLoop();
        window.resumeP5Sketch = () => p5InstanceRef.current.loop();
      }
    };

    setGlobalMethods();

    return () => {
      // Cleanup the p5 instance and global methods when the component unmounts
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
      if (typeof window !== "undefined") {
        delete window.pauseP5Sketch;
        delete window.resumeP5Sketch;
      }
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Background;
