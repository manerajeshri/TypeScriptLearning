// inheritance

//  Parent class / Base class / Super  class ==> Animal
class Animal {
    name:string;
    constructor(name: string){
this.name = name
    }
move(distance : number){
    console.log(`${this.name} can run at distance is ${distance}`);
}
}

// Child class / Derived class / Sub class
class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
bark(){
    console.log(`bhoo bhoo`)
}
}