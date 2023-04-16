var s1: string = "you are the creater of your destiny";
var s2 : string = `powerful people come from powerful places`; 
var s3 : string = ''; 


var b1 : boolean = true;
var b2: boolean = false;
var b3: boolean;


function test() : boolean {
  return  b3 = false;
    console.log('line no 13', b3); // o/p false
}

console.log('line no 16',test());  // undefined 


let vvvvvv: any; 
let value : unknown;

let value1: unknown = vvvvvv;



//let value2: boolean = value;

let s: string = vvvvvv;


// The unknown type is only assignable to the any type and the unkown type itselff.


function log(value) 
{
    console.log(value.toFixed(4));
}

log("test");

function loadString(): any {
    return 123;
}

function loadNumber(): any {
    return 123.456;
}

// 1234.565656565
// 1234.565
//
// let someValriable : any;

// someValriable = loadString();
// console.log(someValriable.trim());



// to avoid this we can use unknown.



let someValriable : any ;
someValriable = loadString();

if (typeof someValriable == 'string') {
    console.log(someValriable.trim());
}

someValriable = loadNumber();

if( typeof someValriable == 'number') 
{
    console.log(someValriable.toFixed(2))
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

let leet;

// later 

leet = '1234556';

const numberes = leet as number; // use as number

console.log(numberes === 1234556); //  false
console.log(numberes); // "1234556" 


// let leet;

// later 
// leet = '1234556';
// const numberes = +leet; //  use as number

// console.log(numberes === 1234556);
// console.log(numberes);

import {isPalindromessss} from './utils';

console.log(isPalindromessss('madam'));
console.log(isPalindromessss('madan'));