let num = 30;  
let startUnicode = 65;  
let endUnicode = 90;  
let counter = startUnicode;  
let alphabet = ["SERVICES", "DESIGN", "CREATIVITY", "FRONT-END", "BACK-END", "IDEAS", "INNOVATION", "BRANDING"]; 
let charChange = 0;  

function setup() {
	let canvas = createCanvas(windowWidth, 400);  
    canvas.position(0, 30);  
    canvas.style('z-index', '-1');  
    textAlign(CENTER, CENTER); 
    textFont('Trebuchet MS');  

	let proportion = windowWidth / windowHeight;

	if (proportion >= 0.75) {
		textSize(200);  // Para pantallas más anchas
	} else if (proportion < 0.75) {
		textSize(100);  // Para pantallas con proporción entre 0.5 y 0.7
	} else if (proportion < 0.58) {
		textSize(70);  // Para pantallas más altas
	} else {
		textSize(50);  // Para pantallas muy altas (verticales)
	}


console.log("Proporción:", proportion);
}

function draw() {
	for (let x = 0; x < width; x += width / num) {  
		drawingContext.save();  
		noStroke();  
		fill(0, 30);  
		rect(x, 0, width / num, height);  
		drawingContext.clip();  
		fill(255);  
		text(alphabet[charChange], width / 2 + 50 * cos(frameCount * 0.02 + 1.8 * noise(x)), height / 2); 
		
		
		drawingContext.restore();  
	}

	if (frameCount % 180 === 0) {  
		charChange = (charChange + 1) % alphabet.length;  
	}
}
