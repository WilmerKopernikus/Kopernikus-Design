let palette;
let g;
let boxes = [];
let isFirst = true;
let index;
let p, p2;
let camera;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
	canvas.style('z-index', '-1'); // Ensures it stays behind content
	canvas.style('position', 'fixed'); 
  colorMode(HSB, 360, 100, 100, 100);
  palette = shuffle(random(colorScheme).colors.concat());
  let d = min(width, height) * 0.75;
  index = 0;
  separateGrid(-d / 2, -d / 2, -d / 2, d, d / 2, palette);
  camera = createCamera();
  camera.ortho(-width / 2, width / 2, height / 2, -height / 2, -5000, 5000);
}

function draw() {
  background(10);
  orbitControl();
  ambientLight(0, 0, 70);
  directionalLight(0, 0, 30, 0, 0, -1);
  directionalLight(0, 0, 20, 0, 0, 1);

  scale(1);
  push();
  rotateX(frameCount / 300);
  rotateY(frameCount / 400);
  rotateZ(frameCount / 500);

  let r = (width / sqrt(2)) * sin(frameCount / 80);
  let thetaA = frameCount / 30 / 2;
  let thetaB = frameCount / 50 / 2;
  let x = cos(thetaA) * cos(thetaB) * r;
  let y = sin(thetaA) * cos(thetaB) * r;
  let z = sin(thetaB) * r;
  p = createVector(x, y, z);

  let thetaC = PI + frameCount / 30 / 2;
  let thetaD = PI + frameCount / 50 / 2;
  let x2 = cos(thetaC) * cos(thetaD) * r;
  let y2 = sin(thetaC) * cos(thetaD) * r;
  let z2 = sin(thetaD) * r;
  p2 = createVector(x2, y2, z2);

  camera.setPosition(p2.x, p2.y, p2.z);
  camera.lookAt(0, 0, 0);
  // camera.lookAt(p.x,p.y,p.z);

  pointLight(color(0, 100, 100, 30), p.x, p.y, p.z);
  // pointLight(color(0, 100, 100), p2.x, p2.y, p2.z);
  let isReset = true;
  for (let b of boxes) {
    b.draw();
    if (b.v != 0) {
      isReset = false;
    }
  }

  if (isReset) {
    boxes = [];
    palette = shuffle(random(colorScheme).colors.concat());
    let d = min(width, height) * 0.75;
    index = 0;
    separateGrid(-d / 2, -d / 2, -d / 2, d, d / 2, palette);
  }

  if (mouseIsPressed) {
    push();
    translate(p.x, p.y, p.z);
    noStroke();
    ambientMaterial(0, 10, 10);
    emissiveMaterial(0, 100, 100, 30);
    sphere(50);
    pop();
  }
  pop();
  // noLoop();
}


function separateGrid(x, y, z, d) {
  let sepNum = int(random(1, 4));
  let w = d / sepNum;
  for (let i = x; i < x + d - 1; i += w) {
    for (let j = y; j < y + d - 1; j += w) {
      for (let k = z; k < z + d - 1; k += w) {
        if (isFirst || (random(100) < 90 && d > width / 3)) {
          separateGrid(i, j, k, w);
          isFirst = false;
        } else {
          let b = new Box(
            i + w / 2,
            j + w / 2,
            k + w / 2,
            w - 5,
            w - 5,
            w - 5,
            palette[index % palette.length]
          );
          boxes.push(b);
        }
      }
    }
  }
}

class Box {
  constructor(x, y, z, w, h, d, c) {
    this.pos = createVector(x, y, z);
    this.w = w;
    this.h = h;
    this.d = d;
    this.c = c;
    this.num = index++;
    this.distanceMax = dist(
      0,
      0,
      0,
      width / 2,
      height / 2,
      max(width / 2, height / 2)
    );
    this.isBox = noise(x / width, y / height, z / width + frameCount/ 100) > 0.5;
    this.pt = 0;
  }
  draw() {
    let distance = dist(p.x, p.y, p.z, this.pos.x, this.pos.y, this.pos.z);
    let t = distance / this.distanceMax;

    let v = Easing.easeOutQuint(1 - (t % 1));
    if (v > 0.85) v = 0;
    this.v = v;
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    ambientMaterial(this.c);
    scale(v);
    noStroke();
    if (this.isBox) {
      box(this.w, this.h, this.d);
    } else {
      ellipsoid(this.w / 2, this.h / 2, this.d / 2);
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

let colorScheme = [
  {
    name: "Benedictus",
    colors: ["#F27EA9", "#366CD9", "#5EADF2", "#636E73", "#F2E6D8"],
  },
  {
    name: "Cross",
    colors: ["#D962AF", "#58A6A6", "#8AA66F", "#F29F05", "#F26D6D"],
  },
  {
    name: "Demuth",
    colors: ["#222940", "#D98E04", "#F2A950", "#BF3E21", "#F2F2F2"],
  },
  {
    name: "Hiroshige",
    colors: ["#1B618C", "#55CCD9", "#F2BC57", "#F2DAAC", "#F24949"],
  },
  {
    name: "Hokusai",
    colors: ["#074A59", "#F2C166", "#F28241", "#F26B5E", "#F2F2F2"],
  },
  {
    name: "Hokusai Blue",
    colors: ["#023059", "#459DBF", "#87BF60", "#D9D16A", "#F2F2F2"],
  },
  {
    name: "Java",
    colors: ["#632973", "#02734A", "#F25C05", "#F29188", "#F2E0DF"],
  },
  {
    name: "Kandinsky",
    colors: ["#8D95A6", "#0A7360", "#F28705", "#D98825", "#F2F2F2"],
  },
  {
    name: "Monet",
    colors: ["#4146A6", "#063573", "#5EC8F2", "#8C4E03", "#D98A29"],
  },
  {
    name: "Nizami",
    colors: ["#034AA6", "#72B6F2", "#73BFB1", "#F2A30F", "#F26F63"],
  },
  {
    name: "Renoir",
    colors: ["#303E8C", "#F2AE2E", "#F28705", "#D91414", "#F2F2F2"],
  },
  {
    name: "VanGogh",
    colors: ["#424D8C", "#84A9BF", "#C1D9CE", "#F2B705", "#F25C05"],
  },
  {
    name: "Mono",
    colors: ["#D9D7D8", "#3B5159", "#5D848C", "#7CA2A6", "#262321"],
  },
  {
    name: "RiverSide",
    colors: ["#906FA6", "#025951", "#252625", "#D99191", "#F2F2F2"],
  },
];

class Easing {
  static easeInSine(x) {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  static easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
  }

  static easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  static easeInQuad(x) {
    return x * x;
  }

  static easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  }

  static easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  }

  static easeInCubic(x) {
    return x * x * x;
  }

  static easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  static easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  static easeInQuart(x) {
    return x * x * x * x;
  }

  static easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

  static easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  }

  static easeInQuint(x) {
    return x * x * x * x * x;
  }

  static easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  }

  static easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }

  static easeInExpo(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  }

  static easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  static easeInOutExpo(x) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }

  static easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }

  static easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  static easeInOutCirc(x) {
    return x < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }

  static easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * x * x * x - c1 * x * x;
  }

  static easeOutBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  }

  static easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return x < 0.5
      ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
      : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  }
  static easeInElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }

  static easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }

  static easeInOutElastic(x) {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
      : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
  }

  static easeInBounce(x) {
    return 1 - Easing.easeOutBounce(1 - x);
  }

  static easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  static easeInOutBounce(x) {
    return x < 0.5
      ? (1 - Easing.easeOutBounce(1 - 2 * x)) / 2
      : (1 + Easing.easeOutBounce(2 * x - 1)) / 2;
  }
}
