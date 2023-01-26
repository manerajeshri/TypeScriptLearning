// type Person = {
//     name :string;
// }
// type Email = {
//     email : string;
// }
// type Phone = {
//     phone : string;
// }

// let ContactDetails :  Person & Email & Phone;
// ContactDetails={
//     name : 'Raje',
//     email : "abc@gmail.com",
//     phone : "987654321",
// }
// // console.log(ContactDetails);

// function contact(details) {
//     console.log(`Dear ${details.name} . 
//     I hope you have received our email at ${details.email}.
//      We will call you at ${details.phone} shortly ,`) ;
// }

// contact(ContactDetails);
 

type Person = {
    name :string;
}
type Email = {
    email : string;
}
type Phone = {
    phone : string;
}


// console.log(ContactDetails);

function contact(details) {
    console.log(`Dear ${details.name} . 
    I hope you have received our email at ${details.email}.
     We will call you at ${details.phone} shortly ,`) ;
}

let obj12 : Person & Email & Phone = {name : 'abc', email: "abc@gmail", phone : "987654321"}

contact(obj12);

