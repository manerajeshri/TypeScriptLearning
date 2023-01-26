function display(id:number ,name : string, role?:string) { // using ? to check if not pased 
    console.log(`ID`,id);
    console.log(`Name`,name);
    
    if(role != undefined){
        console.log(`Role`,role);
    }
}
display(1,'Harry','Admin');
display(2,'Harmayani');
