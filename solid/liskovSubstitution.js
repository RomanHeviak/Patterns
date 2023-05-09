var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, heigth) {
        this._width = width;
        this._height = heigth;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        // heigth: number;
        // width: number;
        get: function () { return this._width; },
        set: function (value) { this._width = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) { this._height = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    Rectangle.prototype.getArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(size) {
        return _super.call(this, size, size) || this;
    }
    Object.defineProperty(Square.prototype, "width", {
        set: function (value) { this._width = this._height = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Square.prototype, "height", {
        set: function (value) { this._width = this._height = value; },
        enumerable: false,
        configurable: true
    });
    ;
    return Square;
}(Rectangle));
var rec = new Rectangle(2, 4);
var sqr = new Square(4);
console.log(rec.getArea());
sqr.height = 10;
console.log(sqr.getArea());
