// class Person1{
//     public name :string; // property 
//     public age : number; // property 

//     // parameterised constructor
// constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// }

// const jack = new Person1('Jack',30);
// console.log(jack.name,jack.age);


// class parameter property

class Person1{
    
        // parameterised constructor
//AccessModifier PropertyName : dataType , next prop
constructor(public  name  : string   , public age : number){
        }
    }
    
    const jack = new Person1('Jack',34);
    console.log(`jack`, jack);
    
    console.log(jack.name,jack.age);
