enum Gender {
    Other = 2,
    Male = 0, // 0
    Female = 1 // 1
}

console.log(Gender.Male);   //0
console.log(Gender.Female); // 1
console.log(Gender[0]);
console.log(Gender[1]);

enum UserLogin {
    Email,
    Social
}