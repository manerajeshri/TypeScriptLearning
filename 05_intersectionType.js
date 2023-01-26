// type Person = {
//     name :string;
// }
// type Email = {
//     email : string;
// }
// type Phone = {
//     phone : string;
// }
// console.log(ContactDetails);
function contact(details) {
    console.log("Dear ".concat(details.name, " . \n    I hope you have received our email at ").concat(details.email, ".\n     We will call you at ").concat(details.phone, " shortly ,"));
}
var obj12 = { name: 'abc', email: "abc@gmail", phone: "987654321" };
contact(obj12);
