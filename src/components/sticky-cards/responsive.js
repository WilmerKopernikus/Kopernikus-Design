"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";

let objs = [];

const ResponsiveSketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p5Instance) => {
      p5Instance.setup = () => setup(p5Instance, sketchRef.current);
      p5Instance.draw = () => draw(p5Instance);
      p5Instance.noLoop(); // Prevent the loop from starting automatically
    };
    const myP5 = new p5(sketch, sketchRef.current);

    // Add event listeners for mouse enter and leave
    sketchRef.current.addEventListener("mouseenter", () => myP5.loop());
    sketchRef.current.addEventListener("mouseleave", () => myP5.noLoop());

    return () => {
      myP5.remove(); // Cleanup to avoid memory leaks
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

const setup = (p5, canvasParentRef) => {
  p5.createCanvas(250, 250).parent(canvasParentRef);

  let c = 4;
  let w = p5.width / c;
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < c; j++) {
      let x = i * w + w / 2;
      let y = j * w + w / 2;
      objs.push(new OBJ(x, y, w, p5));
    }
  }

  // Dibujar el primer frame sin movimiento, como preview antes de que la animación comience
  p5.background(0);
  for (let i of objs) {
    i.show(); // Mostrar los objetos sin que se muevan
  }
};

const draw = (p5) => {
  p5.background(0);
  for (let i of objs) {
    i.run(); // Los objetos comienzan a moverse
  }
};

function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

class OBJ {
  constructor(x, y, w, p5) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x;
    this.cy = y;
    this.init();
    this.t1 = 50;
  }

  show() {
    this.p5.noStroke();
    let xx = this.x - this.w / 2;
    let yy = this.y - this.w / 2;
    let ww = this.cx - xx;
    let hh = this.cy - yy;
    let off = this.w * 0.1;
    let crr = this.w * 0.5;
    this.p5.fill(255, 196, 0); // Set all figures to white color
    this.p5.rect(xx + off / 2, yy + off / 2, ww - off, hh - off, crr);
    this.p5.rect(xx + ww + off / 2, yy + off / 2, this.w - ww - off, hh - off, crr);
    this.p5.rect(this.cx + off / 2, this.cy + off / 2, this.w - ww - off, this.w - hh - off, crr);
    this.p5.rect(xx + off / 2, yy + hh + off / 2, ww - off, this.w - hh - off, crr);
  }

  move() {
    if (0 < this.t && this.t < this.t1) {
      let n = this.p5.norm(this.t, 0, this.t1);
      this.cx = this.p5.lerp(this.cx0, this.cx1, easeInOutExpo(n));
      this.cy = this.p5.lerp(this.cy0, this.cy1, easeInOutExpo(n));
    }
    if (this.t > this.t1) {
      this.init();
    }
    this.t++;
  }

  init() {
    this.drc = this.p5.int(this.p5.random(5));
    while (this.drc == this.pdrc) {
      this.drc = this.p5.int(this.p5.random(5));
    }
    this.d = this.w * this.p5.random(0.4, 0.75);

    this.pdrc = this.drc;
    if (this.drc == 0) {
      this.cx1 = this.x + (this.w / 2 - this.d / 2);
      this.cy1 = this.y + (this.w / 2 - this.d / 2);
    } else if (this.drc == 1) {
      this.cx1 = this.x - (this.w / 2 - this.d / 2);
      this.cy1 = this.y + (this.w / 2 - this.d / 2);
    } else if (this.drc == 2) {
      this.cx1 = this.x + (this.w / 2 - this.d / 2);
      this.cy1 = this.y - (this.w / 2 - this.d / 2);
    } else if (this.drc == 3) {
      this.cx1 = this.x - (this.w / 2 - this.d / 2);
      this.cy1 = this.y - (this.w / 2 - this.d / 2);
    } else if (this.drc == 4) {
      this.cx1 = this.x;
      this.cy1 = this.y;
    }
    this.cx0 = this.cx;
    this.cy0 = this.cy;
    this.t = 0;
  }

  run() {
    this.show();
    this.move();
  }
}

export default ResponsiveSketch;


