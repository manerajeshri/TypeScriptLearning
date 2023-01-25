// full time 8hrs
// contract basis

abstract class Employee {
    name : string;
    paymentPerHr : number;

    constructor(name : string, paymentPerHr : number ) {
        this.name =name;
        this.paymentPerHr =paymentPerHr;
    }
    public abstract CalculateSalary() : number; // only declared method


}

// let emp1 =new Employee;  // we can not create object from abstract class


class Contractor extends Employee{
   
    hoursOfWorking :number;

    constructor(name : string, paymentPerHr : number,hoursOfWorking :number){
        super(name,paymentPerHr); // super to call property from parent class
        this.hoursOfWorking = hoursOfWorking;
    }

    public CalculateSalary(): number {
        return this.paymentPerHr * this.hoursOfWorking;
    }

}

class FullTimeEmployee extends Employee{
  
    constructor(name : string, paymentPerHr : number){
        super(name,paymentPerHr);

}
public CalculateSalary(): number {
    return this.paymentPerHr*8;
}
}

// let objcontractor : Employee;  // creating object
// let fullTimeEmployee : Employee; // creating object

// or
let objcontractor = new Contractor("Sam",7,6);
let objfullTimeEmployee = new FullTimeEmployee("Jack",8); // creating object


console.log(`Contractor : `,objcontractor.CalculateSalary());
console.log(`FullTimeEmployee : `,objfullTimeEmployee.CalculateSalary());

