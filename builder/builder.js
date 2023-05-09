class Tag {
  static get indentSize() {
    // eslint-disable-next-line no-magic-numbers
    return 2;
  }

  constructor(name = '', text = '') {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    // opening tag
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      // adding text with between
      html.push(' '.repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children) {
      html.push(child.toStringImpl(indent + 1));
    }

    //closing tag
    html.push(`${i}</${this.name}>\n`);
    return html.join('');
  }

  toString() {
    return this.toStringImpl(0);
  }
}   

class HtmlBuilder {
  constructor(rootName) {
    //parent element
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // non-fluent
  addChild(childName, childText) {
    //children element
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  // fluent
  addChildFluent(childName, childText) {
    //children element
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  clear() {
    //delete children
    this.root = new Tag(this.rootName);
  }

  build() {
    return this.root;
  }
}
const words = ['hello', 'world'];

const builder = new HtmlBuilder('ul');

for(let w of words) {
    builder.addChild('li', w);
}

console.log(builder.build().toString());

builder.clear();
builder.addChildFluent('li', 'foo')
builder.addChildFluent('li', 'bar')
builder.addChildFluent('li', 'baz')

console.log(builder.build().toString());