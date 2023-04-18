// code done on typescript playground
// var x : number;
// x=123
// var y : string ="raj"
// function addnum(num1: number, num2: number) :number{
// return num1 + num2
// }
// // let result = addnum(1,4)
// console.log(addnum(1,4))
// class Student {
// public firstname: string;
// private lastname: string;
//     constructor(firstname : string, lastname : string){
// this.firstname = firstname,
// this.lastname = lastname
//     }
// }
// var student1 =new Student("Raj", "Mane") // creating object student1 
// // while using new keyword we are assigning memory
// console.log(student1)
// module import
// import {isPalindromessss} from "./utils";
// console.log(isPalindromessss("madam"));
// alert(); confirm() prompt() are inbuild methods
// alert();
// alert("alert msg")
// confirm()
// confirm("confirm msg ?? ")
// to take user input we use prompt()
// var enteredName= prompt('please enter your name')
// console.log(`your name : `,enteredName);
// alert( "name is " + enteredName )
// var num1 = Number(prompt(`enter num1 `))
// var num2 = Number(prompt(`enter num2 `))
// console.log(`addition is`, num1 + num2);
// alert(num1 + num2)
// console.log(`parseInt("32px") : `, parseInt("32px")); // 32
// console.log(`Number("32dny")`, Number("32dny")); // NaN
// intersectiontype
// using & operator
// 
// optional parameter
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
// creating object
var pointObject = new Point();
console.log("pointObject.x ==>", pointObject.x); // undefined
pointObject.x = 11;
console.log("pointObject.x ==>", pointObject.x); // 11
