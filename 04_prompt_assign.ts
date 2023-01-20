// 04_prompt_assign

var math = Number (prompt("Enter Maths Marks "));
var physics = Number (prompt("Enter Physics Marks "));
var chem = Number (prompt("Enter Chemistry Marks "));

confirm(`Please confirm entered Marks.\n Maths Marks : ${math},\n Physics Marks : ${physics},\n Chemistry Marks : ${chem}\n \n *** If correct press "OK" `);

let avgMark = ((math+physics+chem)/3);
console.log(`avgMark`,avgMark);

let avgMarks = avgMark.toFixed(2);
console.log(`avgMarks`,avgMarks);

function grade(avgMarks: any) { // number problem aahe
    if (avgMarks<70) {
        // console.log(`Average Marks : ${avgMarks} and Grade : "C" `);
        return  "C"
    } else if(70 <= avgMarks && avgMarks <90){
        // console.log(`Average Marks : ${avgMarks} and Grade : "B" `);
        return  "B"
    }else {
        // console.log(`Average Marks : ${avgMarks} and Grade : "A" `);
        return  "A"
    }
}

console.log(`Entered Marks : \n Maths Marks : ${math},\n Physics Marks : ${physics},\n Chemistry Marks : ${chem}\n Average Marks : ${avgMarks}\n Grade : ${grade(avgMarks)}`);

alert(`Entered Marks :\nMaths Marks :${math},\nPhysics Marks :${physics},\nChemistry Marks :${chem}\nAverage Marks :${avgMarks}\nGrade :${grade(avgMarks)}`)


