var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            // growOld () { // output 0
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(0); // object
console.log(`objPerson1`,objPerson1);
var grow_Old = objPerson1.growOld; // lexical scope
// setTimeout(objPerson1.growOld,1000);
grow_Old();
console.log('age', objPerson1.age());
