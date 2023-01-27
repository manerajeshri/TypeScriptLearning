// // Price -- both have price but diff price .. 
// // Total seats -- both have total seats but diff seats 
// // colors-- both car are the diff colors .

// // we can solve this problem by using abstract class ..

// // 

// // we can not create a instace or object of abstract class .

// // let objCar = new Car(); // question

//  abstract class Car{
// Wheel(): string {
//     return "4 Wheelar";
// }
// CheckAC() : string {
//     return "AC is available "
// }
// CallFacility() : string{
//     return "Call facility Supported"
// }
// abstract Price() : number;
// abstract getTotalSeats(): number;
// abstract Color() : string;
// }

// class Hundai extends Car {
//     Price(): number {
//         return  1000000;
//     }
//     getTotalSeats(): number {
//         return 7;
//     }
//     Color(): string {
//         return "red";
//     } // creating hundai class from car 
//                             // ie hundai will have all properties of car

// }
// let hundai = new Hundai(); // creating new object from
// console.log(hundai.CallFacility());


// class Toyota extends Car {
//     Price(): number {
//         return 1234567;
//     }
//     getTotalSeats(): number {
//         return 5;
//     }
//     Color(): string {
//         return "white";
//     }

// }

// let toyota = new Toyota(); // creating new object from
// console.log(hundai.CallFacility());
// console.log(hundai.Price());


