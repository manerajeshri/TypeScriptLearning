console.log(`Topic :OptionalPara_assign `);


function display(cityId:number ,state : string, country?:string) { // using ? to check if not pased 
    console.log(`\n`);
    
    console.log(`City`,cityId);
    console.log(`State`,state);
    
    if(country != undefined){
        console.log(`Country`,country);
    }
}
display(11,'MH','India');
display(14,'MH');