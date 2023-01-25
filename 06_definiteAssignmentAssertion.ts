let dice! : number;

function roll_Dice() {
    dice = (Math.floor(Math.random()*6)+1);
}

roll_Dice();


console.log(`Current dice value`, dice);