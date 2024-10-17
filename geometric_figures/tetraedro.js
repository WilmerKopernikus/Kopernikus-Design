let tetraedro = (p) => {
    let vertices = [];
  
    p.setup = () => {
      let canvas = p.createCanvas(400, 400, p.WEBGL);
      canvas.parent("tetraedro");
      p.angleMode(p.DEGREES);
  
      // Coordenadas de los 4 vértices de un tetraedro
      vertices = [
        [0, -100, 0],             // Vértice superior
        [-100, 100, -100],        // Vértice inferior izquierda
        [100, 100, -100],         // Vértice inferior derecha
        [0, 100, 100],            // Vértice trasero
      ];
    };
  
    p.draw = () => {
      p.background(0);
      p.orbitControl();
      p.normalMaterial();  // Material básico
  
      p.push();

      p.rotateX(p.map(p.mouseY, 0, p.height, -180, 180));  // Rotación en eje X según mouseY
      p.rotateY(p.map(p.mouseX, 0, p.width, -180, 180));   // Rotación en eje Y según mouseX
      p.fill(0, 0, 0, 100);  // Color de relleno de la caja (púrpura)
      p.stroke(255, 255, 255); // Color de borde (amarillo)
      p.strokeWeight(3);
      // Dibuja el tetraedro
      p.beginShape(p.TRIANGLES);
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          for (let k = j + 1; k < vertices.length; k++) {
            // Dibuja una cara triangular del tetraedro
            p.vertex(vertices[i][0], vertices[i][1], vertices[i][2]);
            p.vertex(vertices[j][0], vertices[j][1], vertices[j][2]);
            p.vertex(vertices[k][0], vertices[k][1], vertices[k][2]);
          }
        }
      }
      p.endShape();
      
      p.pop();
    };
  };
  
  new p5(tetraedro);
  