function display1(id:number ,name : string, role?:string) { // using ? to check if not pased 
    console.log(`ID`,id);
    console.log(`Name`,name);
    
    if(role != undefined){
        console.log(`Role`,role);
    }
}
display1(1,'Harry','Admin');
display1(2,'Harmayani');
