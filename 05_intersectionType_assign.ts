
// 05_intersectionType_assign.ts
console.log(`Title : IntersectionType_assign `);

type A = {
    name: string;
}
type B = {
    id: number;  
}

let example: A & B;

example = {
    name: "Rajeshri",
    id: 7,
};

console.log(`\nExample 1] Log object on console`);
console.log(example);

console.log(`\nExample 2] The object with message :`);
console.log(`Hi! My name is ${example.name} and my Id is ${example.id}`);

console.log(`\nExample 3]  function with object as argument with message :`);

function info(informationObj) {
    console.log(`Id : ${informationObj.id}\nName is ${informationObj.name}  `);
}
info(example)





