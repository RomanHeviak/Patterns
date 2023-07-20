// A space optimization technique that lets use less memory by stroring externally the data associated with similar objects 
// Sometimes it worth to cache data

class Auto {
    constructor(model) {
        this.model = model;
    }
}

class AutoFactory {
    constructor() {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if(model) {
            return model
        }
        this.models[name] = new Auto(name);
        return this.models[name]

    }
}

/////////////////////// example 2
class User {
    constructor(fullname) {
        this.fullname = fullname;
    } 
}

class User2 {
    constructor(fullname) {
        function getOrAdd(s) {
            let idx = User2.strings.indexOf(s);
            if(idx !== -1) {
                return idx;
            }else {
                User2.strings.push(s);
                return User2.strings.length - 1;
            }
        }
        this.names = fullname.split(' ').map(getOrAdd);
    } 
}
User2.strings = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function randomStr() {
    let res = [];
    for(let i = 0; i < 0; i++){
        res.push(String.fromCharCode(65 + getRandomInt(26)))
    } 
}

let firstNames = [];
let lastsNames = [];
for(let i = 0; i < 100; i++) {
    firstNames.push(randomStr())
    lastsNames.push(randomStr())
}

const users = [];
const users2 = [];

for(let first of firstNames) {
    for(let last of lastsNames) {
        users.push(new User(`${first} ${last}`));
        users2.push(new User2(`${first} ${last}`));
    }
}

console.log(`100 users take up approox ` + `${JSON.stringify(users).length} chars`);

const users2Length = [users2, User2.strings].map(el => JSON.stringify(el).length).reduce((x,y) => x + y)
console.log(`100 flyweight users take up approox ` + `${users2Length} chars`);


