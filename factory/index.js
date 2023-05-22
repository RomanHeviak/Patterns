const CoordinateSystem = {
    cartesian: 0,
    polar: 1
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // constructor(a, b, cs = CoordinateSystem.cartesian){
    //     switch(cs) {
    //         case CoordinateSystem.cartesian: {
    //             this.x = a;
    //             this.y = b;
    //             break;
    //         }
    //         default: {
    //             this.x = a * Math.cos(b);
    //             this.y = a * Math.sign(b);
    //             break;
    //         }
    //     }
        
    // }
}

class PointerFactory {
    static newCertesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, thea) {
        return new Point(
            rho * Math.cos(thea),
            rho * Math.sign(thea)
        );
    }
}

let p = PointerFactory.newCertesianPoint(4, 6);
console.log(p);

let p2 = PointerFactory.newPolarPoint(4, 6);
console.log(p2);