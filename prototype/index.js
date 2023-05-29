class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

    clone() {
        return new Address(this.street, this.city, this.country);
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    
    greet() {
        console.log(`Hi my name is ${this.name}`)
    }

    clone() {
        return new Person(this.name, this.address.clone());
    }
}

let john = new Person('John', new Address('qwerty', 'lviv', 'ukraine'));

let jane = john.clone();

jane.name = 'Jane';
jane.address.street = 'asdasd';

console.log(john)
console.log(jane)

jane.greet();