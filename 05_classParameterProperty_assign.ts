
// pashyameterised constructor
//AccessModifier PropertyName : dataType , next prop

console.log(`Topic : class parameter property Assign \n`);
console.log(`creating and logging class using  parameter property`);



class Student {
    constructor(public studentName : string,
                public studentId   : number,
                public studentClass: string | number,
                public studentAdress: string  
                ) {
    }
}

const ram = new Student("Ram", 1, "7A" , "B-321, Pune");
const shyam = new Student("Shyam", 12, "7B" , "Shyam Niwas, Satara.")


console.log(`\n1] Name : ${ram.studentName}\n Id : ${ram.studentId}\n Class : ${ram.studentClass}\n Adress : ${ram.studentAdress}`);
console.log(`\n2] Name : ${shyam.studentName}\n Id : ${shyam.studentId}\n Class : ${shyam.studentClass}\n Adress : ${shyam.studentAdress}`);
