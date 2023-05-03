// open for extension, but closed for modification

enum Color {
    red = 'red',
    green = 'green',
    blue = 'blue',
}

enum Size {
    sm = 'small',
    md = 'medium',
    lg = 'large',
}

class Product {
    name: string;
    color: Color;
    size: Size;
    constructor(name: string, color: Color, size: Size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class ProductFilter {
    constructor() {

    }

    filterByColor(products: Product[], color: Color) {
        return products.filter(p => p.color === color);
    }

    filterBySize(products: Product[], size: Size) {
        return products.filter(p => p.size === size);
    }
}

const apple = new Product('Apple', Color.green, Size.sm);
const tree = new Product('Tree', Color.green, Size.lg);
const house = new Product('House', Color.blue, Size.lg);

const products = [apple, tree, house];

const pf = new ProductFilter();

console.log(pf.filterByColor(products, Color.green));
console.log(pf.filterBySize(products, Size.lg));