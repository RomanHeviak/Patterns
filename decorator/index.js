class Shape {
    
}

class Circle extends Shape {
    constructor(radius = 0) {
        super();
        this.radius = radius;

    }

    resize(factor) {
        this.radius *= factor;
    }
}

class ColorShape extends Shape {
    constructor(shape, color) {
        super();
        this.shape = shape;
        this.color = color;
    }
}

let circle = new Circle(2);
console.log(circle);

let redCircle = new ColorShape(circle, 'red');
console.log(redCircle)