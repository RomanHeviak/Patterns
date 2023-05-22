/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class HotDrink {
    // eslint-disable-next-line no-empty-function
    consume() {}
}

class Tea extends HotDrink {
    consume() {
        console.log(`This tea is hot!`);
    }
}

class Coffee extends HotDrink {
    consume() {
        console.log(`This coffee is hot!`);
    }
}

class HotDrinkFactory {
    // eslint-disable-next-line no-empty-function, no-unused-vars
    prepare(amount) {}
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water, pour ${amount}ml`);
        return new Tea(); // with customized logic
    }
}

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some beans, boil water, pour ${amount}ml`);
        return new Coffee(); // with customized logic
    }
}

class HotDrinkMachine {
    makeDrink(type) {
        switch(type) {
            case 'tea': {
                return new TeaFactory().prepare(200);
            }
            default: {
                return new CoffeeFactory().prepare(500);
            }
        }
    }
}

let m = new HotDrinkMachine();
rl.question('Which drink you want? \n', (answer) => {
    let drink = m.makeDrink(answer);
    drink.consume();

    rl.close();
})
// m.makeDrink()