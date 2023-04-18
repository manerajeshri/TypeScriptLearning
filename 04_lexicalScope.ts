class Person{
    private _age : number;
    constructor(age: number){
        this._age = age;
    }
    growOld = () => {  // output is 1 correct
        // growOld () { // output 0
        this._age ++ ;
    }
    age(){
        return this._age;
    }
}
const objPerson1 = new Person(0); // object
console.log(objPerson1);
const grow_Old = objPerson1.growOld; // lexical scope

// setTimeout(objPerson1.growOld,1000);

grow_Old();
console.log('age', objPerson1.age());
