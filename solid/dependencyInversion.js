var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Reletaionship;
(function (Reletaionship) {
    Reletaionship[Reletaionship["parent"] = 0] = "parent";
    Reletaionship[Reletaionship["child"] = 1] = "child";
    Reletaionship[Reletaionship["sibling"] = 2] = "sibling";
})(Reletaionship || (Reletaionship = {}));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
//LOW-LEVEL MODULE
var ReletaionshipBrowser = /** @class */ (function () {
    function ReletaionshipBrowser() {
    }
    ReletaionshipBrowser.prototype.findAllChildrenOf = function (name) {
    };
    return ReletaionshipBrowser;
}());
var Reletaionships = /** @class */ (function (_super) {
    __extends(Reletaionships, _super);
    function Reletaionships() {
        var _this = _super.call(this) || this;
        _this.data = [];
        return _this;
    }
    Reletaionships.prototype.addParentAndChild = function (parent, child) {
        this.data.push({
            from: parent,
            to: child,
            type: Reletaionship.parent,
        });
    };
    Reletaionships.prototype.findAllChildrenOf = function (name) {
        return this.data.filter(function (el) { return el.from.name === name && el.type === Reletaionship.parent; }).map(function (el) { return el.to; });
    };
    return Reletaionships;
}(ReletaionshipBrowser));
//HIGH-LEVEL MODULE
var Research = /** @class */ (function () {
    // constructor(releationships, person) {
    //     //find all children of...
    //     let releations = releationships.data;
    //     const children = releations.filter(el => el.from.name === person.name && el.type === Reletaionship.parent);
    //     return children;
    // }
    function Research(browser, name) {
        console.log(browser.findAllChildrenOf(name));
    }
    return Research;
}());
var parentJohn = new Person('John');
var parentPatrick = new Person('Patrick');
var child1 = new Person('Chris');
var child2 = new Person('Max');
var child3 = new Person('Peter');
var rels = new Reletaionships();
rels.addParentAndChild(parentJohn, child1);
rels.addParentAndChild(parentJohn, child2);
rels.addParentAndChild(parentPatrick, child3);
var res = new Research(rels, parentJohn.name);
var res1 = new Research(rels, parentPatrick.name);
