let num = 30;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = ["SERVICES", "DESIGN", "CREATIVITY", "DEVELOPMENT", "IDEAS", "FUTURIST", "INNOVATION", "BRANDING", "DESIGN", "CREATIVITY", "DEVELOPMENT", "IDEAS", "FUTURIST", "INNOVATION", "BRANDING"];
let charChange = 0;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight); // Crea un lienzo en 3D que ocupa toda la ventana
    canvas.position(0, 30); // Posiciona el lienzo en la esquina superior izquierda
    canvas.style('z-index', '-1'); // Asegura que el lienzo esté detrás del contenido
   // Fija la posición del lienzo para que no se desplace con el scroll
	textAlign(CENTER, CENTER);
	textFont('Trebuchet MS');   
	textSize(200);
}

function draw() {
	for (let x = 0; x < width; x += width / num) {
		drawingContext.save();
		noStroke();
		fill(0, 40);
		rect(x, 0, width / num, height);
		drawingContext.clip();
		fill(255);
		text(alphabet[charChange], width / 2 + 50 * cos(frameCount * 0.02 + 3 * noise(x)), height / 2);
		drawingContext.restore();
	}
	if (frameCount % 120 === 0) {
		if (charChange < alphabet.length) {
			charChange++;
		} else {
			charChange = 0;
		}
	}
}