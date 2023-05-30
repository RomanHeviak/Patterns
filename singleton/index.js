//can create only one instance

class Singleton {
    constructor() {
        //check if class was already called
        const instance = this.constructor.instance;
        if(instance){
            return instance;
        }

        this.constructor.instance = this;
    }
}