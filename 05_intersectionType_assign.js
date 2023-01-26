// 05_intersectionType_assign.ts
console.log("Title : IntersectionType_assign ");
var example;
example = {
    name: "Rajeshri",
    id: 7
};
console.log("\nExample 1] Log object on console");
console.log(example);
console.log("\nExample 2] The object with message :");
console.log("Hi! My name is ".concat(example.name, " and my Id is ").concat(example.id));
console.log("\nExample 3]  function with object as argument with message :");

function info(informationObj) {
    console.log("Id : ".concat(informationObj.id, "\nName is ").concat(informationObj.name, "  "));
}
info(example);
