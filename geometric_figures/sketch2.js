let sketch2 = (p) => {
  let rotationX = 0;
  let rotationY = 0;
  let isRotating = true; 

    p.setup = () => {
      let canvas = p.createCanvas(400, 400, p.WEBGL);
      canvas.parent("sketch2"); 
    };
  
    p.draw = () => {
      p.background(0);
      p.normalMaterial();  
      p.angleMode(p.DEGREES);

      
      if (isRotating) {

        rotationX += 1; 
        rotationY += 1.5;
        }
  
      p.push();
    
      p.rotateX(rotationX); 
      p.rotateY(rotationY); 
      p.box(150);  
      p.pop();
    };

    p.mousePressed = () => {
      let xDist = Math.abs(p.mouseX - p.width / 2);
      let yDist = Math.abs(p.mouseY - p.height / 2);
      if (xDist < 35 && yDist < 35) {
          isRotating = false;  
      }
  };

  p.mouseReleased = () => {
      isRotating = true; 
  };
  };
  new p5(sketch2);