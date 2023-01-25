// full time 8hrs
// contract basis
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
var Employee = /** @class */ (function () {
    function Employee(name, paymentPerHr) {
        this.name = name;
        this.paymentPerHr = paymentPerHr;
    }
    return Employee;
}());
// let emp1 =new Employee;  // we can not create object from abstract class
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, paymentPerHr, hoursOfWorking) {
        var _this = _super.call(this, name, paymentPerHr) || this;
        _this.hoursOfWorking = hoursOfWorking;
        return _this;
    }
    Contractor.prototype.CalculateSalary = function () {
        return this.paymentPerHr * this.hoursOfWorking;
    };
    return Contractor;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, paymentPerHr) {
        return _super.call(this, name, paymentPerHr) || this;
    }
    FullTimeEmployee.prototype.CalculateSalary = function () {
        return this.paymentPerHr * 8;
    };
    return FullTimeEmployee;
}(Employee));
// let objcontractor : Employee;  // creating object
// let fullTimeEmployee : Employee; // creating object
// or
var objcontractor = new Contractor("Sam", 7, 6);
var objfullTimeEmployee = new FullTimeEmployee("Jack", 8); // creating object
console.log("Contractor : ", objcontractor.CalculateSalary());
console.log("FullTimeEmployee : ", objfullTimeEmployee.CalculateSalary());
