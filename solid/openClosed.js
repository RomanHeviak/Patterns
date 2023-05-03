var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
var Size;
(function (Size) {
    Size["sm"] = "small";
    Size["md"] = "medium";
    Size["lg"] = "large";
})(Size || (Size = {}));
var Product = /** @class */ (function () {
    function Product(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
    return Product;
}());
var ProductFilter = /** @class */ (function () {
    function ProductFilter() {
    }
    ProductFilter.prototype.filterByColor = function (products, color) {
        return products.filter(function (p) { return p.color === color; });
    };
    ProductFilter.prototype.filterBySize = function (products, size) {
        return products.filter(function (p) { return p.size === size; });
    };
    return ProductFilter;
}());
var apple = new Product('Apple', Color.green, Size.sm);
var tree = new Product('Tree', Color.green, Size.lg);
var house = new Product('House', Color.blue, Size.lg);
var products = [apple, tree, house];
var pf = new ProductFilter();
console.log(pf.filterByColor(products, Color.green));
console.log(pf.filterBySize(products, Size.lg));
