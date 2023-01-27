// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .
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
// we can solve this problem by using abstract class ..
// 
// we can not create a instace or object of abstract class .
// let objCar = new Car(); // question
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return "4 Wheelar";
    };
    Car.prototype.CheckAC = function () {
        return "AC is available ";
    };
    Car.prototype.CallFacility = function () {
        return "Call facility Supported";
    };
    return Car;
}());
var Hundai = /** @class */ (function (_super) {
    __extends(Hundai, _super);
    function Hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundai.prototype.Price = function () {
        return 1000000;
    };
    Hundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundai.prototype.Color = function () {
        return "red";
    }; // creating hundai class from car 
    return Hundai;
}(Car));
var hundai = new Hundai(); // creating new object from
console.log(hundai.CallFacility());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1234567;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return "white";
    };
    return Toyota;
}(Car));
var toyota = new Toyota(); // creating new object from
console.log(hundai.CallFacility());
console.log(hundai.Price());
