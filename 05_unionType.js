var stringNumber;
var sn;
sn = 'codemind';
console.log(sn);
sn = 100;
console.log(sn);
function formatCommandLine(input) {
    // function formatCommandLine(input: string | string[]) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword given strings in array
console.log(formatCommandLine('123457'));
console.log(formatCommandLine(['123', '   457  ']));
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
var Person1 = /** @class */ (function () {
    // parameterised constructor
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var jack = new Person1('Jack', 34);
console.log(jack.name, jack.age);
