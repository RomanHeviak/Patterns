class GraphicObject {

    get name() {
        return this._name;
    }

    constructor(name = 'Group' + GraphicObject.count++) {
        this._name = name;
        this.color = undefined;
        this.children = [];
    }

    print(buffer, depth) {
        buffer.push('*'.repeat(depth)); 
        if (depth > 0) {
            buffer.push(' ');
        }
        if (this.color) {
            buffer.push(this.color + ' ');
        }
        
        buffer.push(this.name);
        buffer.push('\n');
        for (let child of this.children) {
            child.print(buffer, depth + 1);
        }
    }
    toString() {
        let buffer = []; 
        this.print(buffer, 0);
        return buffer.join('');
    }
}

GraphicObject.count = 0;

class Circe extends GraphicObject {
    constructor(color) {
        super('Circle');
        this.color = color;
    }
}

class Sqaure extends GraphicObject {
    constructor(color) {
        super('Sqaure');
        this.color = color;
    }
}

let drawing = new GraphicObject();
drawing.children.push(new Sqaure('Red'));
drawing.children.push(new Circe('Yellow'));
drawing.children.push(new Sqaure('Blue'));

let group = new GraphicObject();
group.children.push(new Sqaure('Red'));
group.children.push(new Circe('Yellow'));

drawing.children.push(group);

console.log(drawing.toString())