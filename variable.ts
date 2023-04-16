var x :string;
x = "codemind hello";

console.log(x);

var s1 : string = "string 1"
var s2 : string = "string 2"
var s3 : string = ""

var b1 :boolean = true;
var b2 : boolean = false;
var b3 :boolean;

function notused() {
    b3=false;
    console.log('line no 16', b3); // false
     return b3
}

console.log(`line no 19`, notused()); //

// any datatype 

let value :any;
value =true;
value = 42;
value = 'test'
value =[]

// unknown == the unknown type is only assignable to the any type and the unknown type itself
let value1 : unknown;
value1 = true;
value1= 10;
value1 =" hello"

// the unknown type is only assignable to the any type and the unknown type itself

let v1 : any;
let v2 : unknown;

let v3 : unknown = v2 // allowed the unknown type is only assignable to the any type and the unknown type itself
let v4 : unknown = v1 // aalowed the unknown type is only assignable to the any type and the unknown type itself
// let v5 : boolean = v2 // not allowed as v2 is unknown == Type 'unknown' is not assignable to type 'boolean'.
let v6 : string = v1 // allowed as v1 is any

function loadstring(): any {
    return 123
}

function loadnumber(): any {
    return 123.456
}

// let someVAriable : any;
// someVAriable = loadstring();
// console.log(someVAriable.trim());

// return 123 using this ==> Uncaught TypeError: someVAriable.trim is not a function at variable.js:42:26

// to avoid this we can use unknown

let someVAriable :unknown;
someVAriable = loadstring();
if (typeof someVAriable == "string") {
    console.log(someVAriable.trim());
}

 someVAriable = loadnumber();
 if (typeof someVAriable == "number") {
    console.log(someVAriable.toFixed(2));
    
 }






