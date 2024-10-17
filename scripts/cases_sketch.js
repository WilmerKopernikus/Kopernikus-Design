let num = 30;  
let startUnicode = 65;  
let endUnicode = 90;  
let counter = startUnicode;  
let alphabet = ["CASES", "PROJECTS", "PORTFOLIO"]; 
let charChange = 0;  

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0, 0);  
    canvas.style('z-index', '1');  
    textAlign(CENTER, CENTER); 
    textFont('Trebuchet MS');  

    let proportion = windowWidth / windowHeight;
    console.log("Proporción:", proportion);  // Verifica el valor en cada frame
    
    if (proportion >= 1) {
        textSize(220);
    } else if (proportion < 1 && proportion >= 0.8) {
        textSize(90);
    } else {
        textSize(75);
    } //Test 4 - crear formula para hacer services responsive
    }


function draw() {
	
    let proportion = windowWidth / windowHeight;
    let modifier;

    // Adjust 'modifier' based on the proportion of the screen
    if (proportion >= 1) {
        modifier = 50;  // Larger screens, bigger effect
    } else if (proportion >= 0.8) {
        modifier = 27;   // Medium screens
    } else {
        modifier = 20;   // Smaller screens, smaller effect
    }

	
	for (let x = 0; x < width; x += width / num) {  
		drawingContext.save();  
		noStroke();  
		fill(0, 30);  
		rect(x, 0, width / num, height);  
		drawingContext.clip();  
		fill(255);  
		text(alphabet[charChange], width / 2 + modifier * cos(frameCount * 0.02 + 1.8 * noise(x)), height / 2); 
		
		
		drawingContext.restore();  
	}

	if (frameCount % 120 === 0) {  
		charChange = (charChange + 1) % alphabet.length;  
	}
}
