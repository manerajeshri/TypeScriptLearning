"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s1 = "you are the creater of your destiny";
var s2 = "powerful people come from powerful places";
var s3 = '';
var b1 = true;
var b2 = false;
var b3;
function test() {
    return b3 = false;
    console.log('line no 13', b3); // o/p false
}
console.log('line no 16', test()); // undefined 
var vvvvvv;
var value;
var value1 = vvvvvv;
//let value2: boolean = value;
var s = vvvvvv;
// The unknown type is only assignable to the any type and the unkown type itselff.
function log(value) {
    console.log(value.toFixed(4));
}
log("test");
function loadString() {
    return 123;
}
function loadNumber() {
    return 123.456;
}
// 1234.565656565
// 1234.565
//
// let someValriable : any;
// someValriable = loadString();
// console.log(someValriable.trim());
// to avoid this we can use unknown.
var someValriable;
someValriable = loadString();
if (typeof someValriable == 'string') {
    console.log(someValriable.trim());
}
someValriable = loadNumber();
if (typeof someValriable == 'number') {
    console.log(someValriable.toFixed(2));
}
// function load(): unknown{
//     return "  hello world  "
// }
// let hello = load()
// // const trimmed = hello.trim() // gives error
// // type assertions
// // we are telling that we know hello is a string type
// const trimmed = (hello as string).trim()  // after type assertions
// console.log(`trimmed== `, trimmed)
// typecasting 
var leet;
// later 
leet = '1234556';
var numberes = leet; // use as number
console.log(numberes === 1234556); //  false
console.log(numberes); // "1234556" 
// let leet;
// later 
// leet = '1234556';
// const numberes = +leet; //  use as number
// console.log(numberes === 1234556);
// console.log(numberes);
var utils_1 = require("./utils");
console.log((0, utils_1.isPalindromessss)('madam'));
console.log((0, utils_1.isPalindromessss)('madan'));
