// class Person1{
//     public name :string; // property 
//     public age : number; // property 
//     // parameterised constructor
// constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// }
// const jack = new Person1('Jack',30);
// console.log(jack.name,jack.age);
// class parameter property
var Person1 = /** @class */ (function () {
    // parameterised constructor
    //AccessModifier PropertyName : dataType , next prop
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var jack = new Person1('Jack', 34);
console.log("jack", jack);
console.log(jack.name, jack.age);
