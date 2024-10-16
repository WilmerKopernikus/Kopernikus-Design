let num = 30;  
let alphabet = ["SERVICES", "FULL-STACK", "DESIGN", "CREATIVITY", "FRONT-END", "BACK-END", "IDEAS", "BRANDING"]; 
let charChange = 0;  

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0, 0);  
    canvas.style('z-index', '-1');  
    textAlign(CENTER, CENTER); 
    textFont('Trebuchet MS');  

    let proportion = windowWidth / windowHeight;
    
    if (proportion >= 1) {
        textSize(200);
    } else if (proportion < 1 && proportion >= 0.8) {
        textSize(120);
    } else {
        textSize(75);
    }
}

function draw() {
    let proportion = windowWidth / windowHeight;
    let modifier;

    // Ajustar 'modifier' según la proporción de la pantalla
    if (proportion >= 1) {
        modifier = 50;  // Pantallas más grandes, mayor efecto
    } else if (proportion >= 0.8) {
        modifier = 30;   // Pantallas medianas
    } else {
        modifier = 20;   // Pantallas más pequeñas, menor efecto
    }

    for (let x = 0; x < width; x += width / num) {  
        drawingContext.save();  
        noStroke();  
        fill(0, 30);  
        rect(x, 0, width / num, height);  
        drawingContext.clip();  
        fill(255);  
        
        if (proportion >= 1) {
            // Movimiento horizontal si proportion >= 1
            text(alphabet[charChange], width / 2 + modifier * cos(frameCount * 0.02 + 1.8 * noise(x)), height / 2);
        } else {
            // Mostrar solo 3 palabras distribuidas verticalmente con el mismo texto cambiando
            for (let i = 0; i < 3; i++) {
                text(alphabet[charChange], width / 2 + modifier * cos(frameCount * 0.02 + 1.7 * noise(x)), 
                     height / 2 - (1 - i) * (textSize() + 100));  // 3 palabras distribuidas verticalmente
            }
        }

        drawingContext.restore();  
    }

    // Cambiar palabra cada 180 frames
    if (frameCount % 180 === 0) {  
        charChange = (charChange + 1) % alphabet.length;  
    }
}

