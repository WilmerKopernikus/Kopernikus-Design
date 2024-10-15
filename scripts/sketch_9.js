let t = 0;
let w;
let offset;
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1'); // Ensures it stays behind content
	canvas.style('position', 'fixed'); 

}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(ADD);
  push();
  fill(255, 0);
  rect(0, 0, windowWidth, windowHeight);
  drawingContext.clip();

  for (let i = 0; i < 2; i++) {
    w = sqrt(sq(width) + sq(height));
    push();
    translate(width / 2, height / 2);
    rotate(PI / 2*i);
    translate(-w / 2, -w / 2);
    let n = 0;
    let sw = width / 100;
    for (let y = 0; y <= w; y += w / 5) {
      push();
      translate((n % 2) * sw, y);
      for (let x = -200; x < w + 200; x += sw * 1) {
        let n1 = (noise(i*1000+y, x / w, t / 400) - 1 / 2) * 2;
        let n2 = (noise(i*777+n1 * 2, x / w, t / 400) - 1 / 2) * 2;
        n1 *= sin((x / w + y / w) * TWO_PI + t / 50);
        n2 *= cos((x / w + y / w) * TWO_PI + t / 100);
        let y1 = (n1 * w) / 2;
        let y2 = (n2 * w) / 2;
        strokeWeight(sw / 2);
        push();
        translate(x, 0);
        rotate(n1 * n2 * TWO_PI);
        shearY(radians(89) * cos(n1 * TWO_PI) * cos(n2 * TWO_PI));
        let g = drawingContext.createLinearGradient(0, y1, 0, y2);
        if(i%2==0){
        g.addColorStop(0, color(0, 0, 255));
        g.addColorStop(1, color(255, 0, 0));          
        }else{
        g.addColorStop(0, color(0,255,200));
        g.addColorStop(1, color(255/1.5,0, 255/1.5));
          
        }
        strokeCap(SQUARE);
        drawingContext.strokeStyle = g;
        line(0, y1, 0, y2);
        pop();
      }
      pop();
      n++;
    }
    pop();
  }
  pop();
  t++;
}