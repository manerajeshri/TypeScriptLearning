// pashyameterised constructor
//AccessModifier PropertyName : dataType , next prop
console.log("Topic : class parameter property Assign \n");
console.log("creating and logging class using  parameter property");
var Student = /** @class */ (function () {
    function Student(studentName, studentId, studentClass, studentAdress) {
        this.studentName = studentName;
        this.studentId = studentId;
        this.studentClass = studentClass;
        this.studentAdress = studentAdress;
    }
    return Student;
}());
var ram = new Student("Ram", 1, "7A", "B-321, Pune");
var shyam = new Student("Shyam", 12, "7B", "Shyam Niwas, Satara.");
console.log("\n1] Name : ".concat(ram.studentName, "\n Id : ").concat(ram.studentId, "\n Class : ").concat(ram.studentClass, "\n Adress : ").concat(ram.studentAdress));
console.log("\n2] Name : ".concat(shyam.studentName, "\n Id : ").concat(shyam.studentId, "\n Class : ").concat(shyam.studentClass, "\n Adress : ").concat(shyam.studentAdress));
