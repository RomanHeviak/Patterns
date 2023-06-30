//structural pattern that enables object with incompatible interfaces works together

class RedisDataManager {
    constructor() {
        this.connect = function() {
            console.log('Connect to database');
        };
        this.scan = function() {
            return 'Data from database';
        };
    }
}
class DataManager {
    constructor() {
        this.getData = function() {
            return 'Legacy data';
        }
    }
}
class Adapter {
    constructor() {
        this.redis = new RedisDataManager();
        this.redis.connect();
        this.getData = function() {
            return this.redis.scan();
        }
    }
    
    
}
class Client {
    constructor(dataManager) {
        console.log(dataManager.getData());
    }
    
}
let client = new Client(new Adapter());
