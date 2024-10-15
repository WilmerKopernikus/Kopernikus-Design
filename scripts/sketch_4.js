let objs = [];
let colors = ['#182350', '#3360b1', '#859ac5', '#d5be4e', '#dbd5a1', '#182350'];

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	let gridSize = width * 1.0;
	let cellCount = 15;
	let cellSize = gridSize / cellCount;
	for (let i = 0; i < cellCount; i++) {
		for (let j = 0; j < cellCount; j++) {
			let x = i * cellSize + (cellSize / 2) + ((width - gridSize) / 2);
			let y = j * cellSize + (cellSize / 2) + ((width - gridSize) / 2);
			objs.push(new SuperSquare(x, y, cellSize));
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

function easeInOutQuint(x) {
	return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

class SuperSquare {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.originX = x;
		this.originY = y;
		this.currentX = x;
		this.currentY = y;
		this.fromX = this.currentX;
		this.fromY = this.currentY;
		this.xpm = random([-1, 1]);
		this.ypm = random([-1, 1]);
		this.len = int(random(1, 4));
		this.toX = this.originX + this.w * this.len * this.xpm;
		this.toY = this.originY + this.w * this.len * this.ypm;
		this.time = -int(random(500));
		this.time1 = 60;
		this.time2 = this.time1 + 200;
		this.time3 = this.time2 + 60;
		this.clr = random(colors);
	}
	show() {
		noStroke();
		fill(this.clr);

		beginShape(QUADS);
		vertex(this.originX - this.w / 2, this.originY - this.w / 2);
		vertex(this.originX + this.w / 2, this.originY - this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY - this.w / 2);
		vertex(this.currentX - this.w / 2, this.currentY - this.w / 2);

		vertex(this.originX + this.w / 2, this.originY - this.w / 2);
		vertex(this.originX + this.w / 2, this.originY + this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY + this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY - this.w / 2);

		vertex(this.originX + this.w / 2, this.originY + this.w / 2);
		vertex(this.originX - this.w / 2, this.originY + this.w / 2);
		vertex(this.currentX - this.w / 2, this.currentY + this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY + this.w / 2);

		vertex(this.originX - this.w / 2, this.originY + this.w / 2);
		vertex(this.originX - this.w / 2, this.originY - this.w / 2);
		vertex(this.currentX - this.w / 2, this.currentY - this.w / 2);
		vertex(this.currentX - this.w / 2, this.currentY + this.w / 2);

		fill(0);
		vertex(this.currentX - this.w / 2, this.currentY - this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY - this.w / 2);
		vertex(this.currentX + this.w / 2, this.currentY + this.w / 2);
		vertex(this.currentX - this.w / 2, this.currentY + this.w / 2);
		endShape();

		beginShape(QUADS);


		if (this.ypm == 1) {
			fill(0, 75);
			vertex(this.originX - this.w / 2, this.originY - this.w / 2);
			vertex(this.originX + this.w / 2, this.originY - this.w / 2);
			vertex(this.currentX + this.w / 2, this.currentY - this.w / 2);
			vertex(this.currentX - this.w / 2, this.currentY - this.w / 2);
		}

		if (this.xpm == -1) {
			fill(0, 150);
			vertex(this.originX + this.w / 2, this.originY - this.w / 2);
			vertex(this.originX + this.w / 2, this.originY + this.w / 2);
			vertex(this.currentX + this.w / 2, this.currentY + this.w / 2);
			vertex(this.currentX + this.w / 2, this.currentY - this.w / 2);
		}

		if (this.ypm == -1) {
			fill(255, 150);
			vertex(this.originX + this.w / 2, this.originY + this.w / 2);
			vertex(this.originX - this.w / 2, this.originY + this.w / 2);
			vertex(this.currentX - this.w / 2, this.currentY + this.w / 2);
			vertex(this.currentX + this.w / 2, this.currentY + this.w / 2);
		}

		if (this.xpm == 1) {
			fill(255, 75);
			vertex(this.originX - this.w / 2, this.originY + this.w / 2);
			vertex(this.originX - this.w / 2, this.originY - this.w / 2);
			vertex(this.currentX - this.w / 2, this.currentY - this.w / 2);
			vertex(this.currentX - this.w / 2, this.currentY + this.w / 2);
		}
		endShape();
		fill(this.clr);
		square(this.currentX, this.currentY, this.w);
	}
	move() {
		if (0 < this.time && this.time < this.time1) {
			let n = norm(this.time, 0, this.time1 - 1);
			this.currentX = lerp(this.fromX, this.toX, easeInOutQuint(n));
			this.currentY = lerp(this.fromY, this.toY, easeInOutQuint(n));
		}
		else if (this.time2 < this.time && this.time < this.time3) {
			let n = norm(this.time, this.time2, this.time3 - 1);
			this.currentX = lerp(this.toX, this.fromX, easeInOutQuint(n));
			this.currentY = lerp(this.toY, this.fromY, easeInOutQuint(n));
		}
		if (this.time > this.time3) {
			this.time = -int(random(500));

			this.xpm = random([-1, 1]);
			this.ypm = random([-1, 1]);
			this.len = int(random(1, 4));
			this.toX = this.originX + this.w * this.len * this.xpm;
			this.toY = this.originY + this.w * this.len * this.ypm;
		}
		this.time++;
	}
}
