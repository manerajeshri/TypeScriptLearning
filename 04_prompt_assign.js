// 04_prompt_assign
var math = Number(prompt("Enter Maths Marks "));
var physics = Number(prompt("Enter Physics Marks "));
var chem = Number(prompt("Enter Chemistry Marks "));
confirm("Please confirm entered Marks.\n Maths Marks : ".concat(math, ",\n Physics Marks : ").concat(physics, ",\n Chemistry Marks : ").concat(chem, "\n \n *** If correct press \"OK\" "));
var avgMark = ((math + physics + chem) / 3);
console.log("avgMark", avgMark);
var avgMarks = avgMark.toFixed(2);
console.log("avgMarks", avgMarks);
function grade(avgMarks) {
    if (avgMarks < 70) {
        // console.log(`Average Marks : ${avgMarks} and Grade : "C" `);
        return "C";
    }
    else if (70 <= avgMarks && avgMarks < 90) {
        // console.log(`Average Marks : ${avgMarks} and Grade : "B" `);
        return "B";
    }
    else {
        // console.log(`Average Marks : ${avgMarks} and Grade : "A" `);
        return "A";
    }
}
console.log("Entered Marks : \n Maths Marks : ".concat(math, ",\n Physics Marks : ").concat(physics, ",\n Chemistry Marks : ").concat(chem, "\n Average Marks : ").concat(avgMarks, "\n Grade : ").concat(grade(avgMarks)));
alert("Entered Marks :\nMaths Marks :".concat(math, ",\nPhysics Marks :").concat(physics, ",\nChemistry Marks :").concat(chem, "\nAverage Marks :").concat(avgMarks, "\nGrade :").concat(grade(avgMarks)));
