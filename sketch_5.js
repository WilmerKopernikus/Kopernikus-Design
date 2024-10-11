let objs = [];
let colors = ['#272727', '#fed766', '#009fb7', '#eff1f3', '#e01a4f', '#f15946', '#193680', '#277AEE'];

function setup() {
	
    createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
    frameRate(20);
	let c = 25;
	let w = width / c;
	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			objs.push(new OBJ(x, y, w * 0.9));

		}
	}
	shuffle(objs, true);
}

function draw() {
	background(0);
	for (let i of objs) {
		i.show();
		i.move();
	}
}

function easeInOutQuart(x) {
	return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

class OBJ {
	constructor(x, y, d) {
		this.x0 = x;
		this.y0 = y;
		this.d0 = d;
		this.x = this.x0;
		this.y = this.y0;
		this.d = this.d0;
		this.t = -int(map(dist(x, y, width/2, height/2), 0, sqrt(sq(width) + sq(height)), 0, 200));
		this.t1 = 130;
		this.rad = random(0.05, 0.5) * width;
		this.aa = random(10);
		this.pm = (int(random(2)) * 2) - 1;
		this.off = 1;
		this.w = this.d;
		this.h = this.d;
		this.w1 = this.d * random(4);
		this.h1 = this.d * random(4);
		this.ang = 0;
		this.mo = int(random(-1, 1) * 3);
		this.col1 = color(random(colors));
		this.col2 = color(random(colors));
		this.col = this.col1;
        this.pauseCounter = 0; // New counter for pause
		this.pauseDuration = 60; // Pause duration (number of frames to wait)
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		fill(this.col);
        noStroke();
		rect(0, 0, this.w, this.h);
		pop();

	}

	move() {
		if (0 < this.t && this.t < this.t1) {
			let n = norm(this.t, 0, this.t1 - 1) ** 0.75;
			let a = ((TAU * n) + this.aa) * this.pm;
			let ik = sin(PI * n);
			this.x = this.x0 + this.rad * ik * cos(a);
			this.y = this.y0 + this.rad * ik * sin(a);
			this.w = lerp(this.d0, this.w1, ik);
			this.h = lerp(this.d0, this.h1, ik);
			this.ang = n * TAU * this.mo;
			this.col = lerpColor(this.col1, this.col2, n ** 0.05);
		}
		this.t++;

		if (this.t1 < this.t) {
			// Pause the final state for a duration
			if (this.pauseCounter < this.pauseDuration) {
				this.pauseCounter++; // Increment pause counter
			} else {
				// After pause, reset and start the animation loop again
				this.t = -90;
				this.col1 = this.col2;
				this.col2 = color(random(colors));
				this.pauseCounter = 0; // Reset the pause counter
			}
		}
	}
}