class Conveyor {
    setBody() { 
        console.log('Body set!') 
    }

    getEngine() { 
        console.log('Dismantle engine!') 
    }

    setEngine() { 
        console.log('Engine set!') 
    }

    setWheels() { 
        console.log('Wheels!') 
    }

    addElectronics() { 
        console.log('Added electronics!') 
    }

    paint() { 
        console.log('Car painted!') 
    }
}

class ConveyorFacade {
    constructor() {
        this.conveyor = new Conveyor();
    }

    assembleCar() {
        this.conveyor.setBody();
        this.conveyor.getEngine();
        this.conveyor.setEngine();
        this.conveyor.setWheels();
        this.conveyor.addElectronics();
        this.conveyor.paint();
    }

    changeEngine() {
        this.conveyor.getEngine();
        this.conveyor.setEngine();
    }
}

const conveyor = new ConveyorFacade();
let car = conveyor.assembleCar();
console.log(car);
car = conveyor.changeEngine();
console.log(car);

