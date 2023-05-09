class Rectangle {
    // heigth: number;
    // width: number;
    get width() {return this._width};
    get height() {return this._height};

    set width(value: number) {this._width = value;};
    set height(value: number) {this._height = value;};
    
    constructor(width: number, heigth: number){
        this._width = width;
        this._height = heigth;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {

    constructor (size: number) {
        super(size, size);
    }

    set width(value: number) {this._width = this._height = value;};
    set height(value: number) {this._width = this._height = value;};
}

const rec = new Rectangle(2,4);
const sqr = new Square(4);

console.log(rec.getArea());
sqr.height = 10;
console.log(sqr.getArea());