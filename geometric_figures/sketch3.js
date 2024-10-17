let sketch3 = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("sketch3"); // Asigna el sketch al div con id sketch3
    };

    p.draw = () => {
        p.background(0, 0, 255);
        p.fill(255);
        p.triangle(p.width / 2, 50, 100, 350, 300, 350);
    };
};

new p5(sketch3);
