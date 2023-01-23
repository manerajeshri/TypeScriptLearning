// Union assign
console.log("Union assign Example 1]");
function myFunc(myVar1, myVar2) {
    return (myVar1 + " " + myVar2);
}
console.log(myFunc("Raj", "Mane"));
console.log(myFunc("Feb", "10"));
console.log("\nUnion assign Example 2]");
function printMobileNumber(num) {
    console.log("My status code is ".concat(num, "."));
}
printMobileNumber(9876544321);
printMobileNumber('98 7654 4321');
// Specify that the parameter "myVar" for the function can be either string or number:
console.log("\nUnion assign Example 3] Specify that the parameter \"myVar\" for the function can be either string or number:");
function varStringNum(myVar) {
    console.log("Given variable is ".concat(myVar, " and it is ").concat(typeof (myVar)));
}
varStringNum(1001);
varStringNum("07");
varStringNum("Hello There!!!");
