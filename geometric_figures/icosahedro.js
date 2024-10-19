let overlaySketch = (p) => {

    p.setup = () => {
      let canvas = p.createCanvas(400, 400, p.WEBGL);
      canvas.parent("cube");  // Asigna el canvas al div con id 'sketch-container'
      p.angleMode(p.DEGREES);
    };
  
    p.draw = () => {
      p.background(30);
      p.orbitControl(6, 6, 0);  // Deshabilita el zoom con el tercer parámetro como 0
      p.normalMaterial();  // Aplica un material básico a la caja
  
      // Mapea la posición del mouse a ángulos de rotación
      let rotationX = p.map(p.mouseY, 0, p.height, -30, 30); // Rotación en eje X según mouseY
      let rotationY = p.map(p.mouseX, 0, p.width, -20, 20);  // Rotación en eje Y según mouseX
  
      p.rotateX(0.5);
      p.rotateY(-0.7);
      p.push();
      p.fill(0, 0, 0, 40);  // Color de relleno de la caja (púrpura)
      p.stroke(255, 255, 255); // Color de borde (amarillo)
      p.strokeWeight(4);
      p.rotateX(rotationX);  // Aplica rotación en el eje X
      p.rotateY(rotationY);  // Aplica rotación en el eje Y
      p.box(150);  
      p.pop();
    };
  };
  
  new p5(overlaySketch);