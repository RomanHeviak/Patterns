//pattern that allows you to substitute special substitute objects instead of real objects. These objects intercept calls 
//to the original object, allowing you to do something before or after the call is passed to the original object. 

class CarAccess {
    open() {
        console.log('Opening car door')
    }

    close() {
        console.log('Opening car door')
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(pass) {
        if(this.authenticate(pass)) {
            this.door.open();
        }else {
            console.log('Access denied')
        }
    }

    authenticate(pass) {
        return pass === 'Roman';
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());
door.open('Jack');
door.open('Roman');
door.close();

//property proxy 
class Propetry {
    constructor(value, name = '') {
        this._value = value;
        this.name = name
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if(this._value === newValue) {
            return;
        }
        console.log(`Assigning ${newValue} to ${this.name}`);
        this._value = newValue;
    }
}

class Creature {
    constructor() {
        this._power = new Propetry(23, 'power');
    }

    get power() {
        return this._power.value;
    }

    set power(value) {
        this._power.value = value;
    }
}

const create = new Creature();
create.power = 23;
create.power = 100;
console.log(create.power)

