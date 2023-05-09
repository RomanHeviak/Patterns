//High level module should not be dependet directly to low level module

enum Reletaionship {
    parent = 0,
    child = 1,
    sibling = 2
}

class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

//LOW-LEVEL MODULE
abstract class ReletaionshipBrowser {
    //interface class
    findAllChildrenOf(name) {};
}

class Reletaionships extends ReletaionshipBrowser {
    data: {from: { name: string }, to: { name: string }, type: number}[];

    constructor() {
        super();
        this.data = [];
    }

    addParentAndChild(parent, child) {
        this.data.push({
            from: parent,
            to: child,
            type: Reletaionship.parent,
        })
    }

    findAllChildrenOf(name) {
        return this.data.filter(el => el.from.name === name && el.type === Reletaionship.parent).map(el => el.to);
    }
}

//HIGH-LEVEL MODULE
class Research {
    constructor(browser, name) {
        console.log(browser.findAllChildrenOf(name));
    }
}

const parentJohn = new Person('John');
const parentPatrick = new Person('Patrick');
const child1 = new Person('Chris');
const child2 = new Person('Max');
const child3 = new Person('Peter');

let rels = new Reletaionships();
rels.addParentAndChild(parentJohn, child1);
rels.addParentAndChild(parentJohn, child2);
rels.addParentAndChild(parentPatrick, child3);

const res = new Research(rels, parentJohn.name);
const res1 = new Research(rels, parentPatrick.name);
