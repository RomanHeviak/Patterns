class RedShapeRenderer {
    renderCircle(radius) {
        console.log('Drawing a red circle with radius', radius);
    }
}

class BlueShapeRenderer {
    renderCircle(radius) {
        console.log('Drawing a blue circle with radius', radius);
    }
}

class Color {
    constructor(color){
        this.color = color;
    }
}

class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }
}

class Circle extends Shape{
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }

    resize(factor) {
        this.radius *= factor;
    }
}

let red = new RedShapeRenderer();
let blue = new BlueShapeRenderer();
let circle = new Circle(red, 5);
circle.draw();
circle.resize(10);
circle.draw();