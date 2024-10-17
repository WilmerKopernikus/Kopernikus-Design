let sketch2 = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("sketch2"); // Asigna el sketch al div con id sketch2
    };

    p.draw = () => {
        p.background(0, 255, 0);
        p.fill(255);
        p.rect(p.width / 4, p.height / 4, 200, 200);
    };
};

new p5(sketch2);
