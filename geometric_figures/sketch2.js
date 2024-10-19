let sketch2 = (p) => {

    p.setup = () => {
      let canvas = p.createCanvas(400, 400, p.WEBGL);
      canvas.parent("sketch2");  // Asigna el canvas al div con id 'sketch-container'
      p.angleMode(p.DEGREES);
    };
  
    p.draw = () => {
      p.background(0);
      p.ambientLight(80, 80, 100);
      p.directionalLight(0, 0, 30, 0, 0, -1);
      p.directionalLight(0, 0, 20, 0, 0, 1);
      p.orbitControl(6, 6, 0);  // Deshabilita el zoom con el tercer parámetro como 0
      p.normalMaterial();  // Aplica un material básico a la caja
  
      // Mapea la posición del mouse a ángulos de rotación
      let rotationX = p.map(p.mouseY, 0, p.height, -30, 30); // Rotación en eje X según mouseY
      let rotationY = p.map(p.mouseX, 0, p.width, -20, 20);  // Rotación en eje Y según mouseX
  
      p.rotateX(0.5);
      p.rotateY(-0.7);
      p.push();

       // Color de borde (amarillo)
    
      p.rotateX(rotationX);  // Aplica rotación en el eje X
      p.rotateY(rotationY);  // Aplica rotación en el eje Y
      p.box(150);  
      p.pop();
    };
  };
  
  new p5(sketch2);
