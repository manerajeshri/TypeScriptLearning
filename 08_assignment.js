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
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.supportsGPS = function () {
        return "GPS: Not Supported";
    };
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return "white";
    };
    return Toyota;
}(Car));
var Hundai = /** @class */ (function (_super) {
    __extends(Hundai, _super);
    function Hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundai.prototype.supportsGPS = function () {
        return "Gps: Supported";
    };
    Hundai.prototype.Price = function () {
        return 900000;
    };
    Hundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundai.prototype.Color = function () {
        return "gray";
    };
    return Hundai;
}(Car));
var toyota = new Toyota(); // creating new object 
var hundai = new Hundai();
console.log("Is Toyota Support GPS?", toyota.supportsGPS());
console.log("Is Hundai Support GPS?", hundai.supportsGPS());
