let sketch2b = (p) => {
  let rotationX = 0;
  let rotationY = 0;
  let isRotating = true;  // Variable para controlar si el cubo está rotando o no

    p.setup = () => {
      let canvas = p.createCanvas(200, 200, p.WEBGL);
      canvas.parent("sketch2b");  // Asigna el canvas al div con id 'sketch-container'
    };
  
    p.draw = () => {
      p.background(0);
      p.normalMaterial();  // Aplica un material básico a la caja
      p.angleMode(p.DEGREES);

      
      if (isRotating) {
        // Rotación automática solo si isRotating es true
        rotationX += 1; // Incremento para rotación en el eje X
        rotationY += 1.5; // Incremento para rotación en el eje Y
        }
  
      p.push();
    
      p.rotateX(rotationX);  // Aplica rotación en el eje X
      p.rotateY(rotationY);  // Aplica rotación en el eje Y
      p.box(70);  
      p.pop();
    };

    p.mousePressed = () => {
      let xDist = Math.abs(p.mouseX - p.width / 2);
      let yDist = Math.abs(p.mouseY - p.height / 2);
      // Checa si el clic ocurrió dentro del área del cubo (en este caso, es un cuadrado de 70x70)
      if (xDist < 35 && yDist < 35) {
          isRotating = false;  // Detiene la rotación mientras el mouse esté presionado
      }
  };

  p.mouseReleased = () => {
      isRotating = true;  // Reanuda la rotación cuando se suelta el mouse o el dedo
  };
  };
  
  new p5(sketch2b);
