var dice;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
console.log("current dice value", dice);
// to remove compile type error using ! after dice
// let dice! :number;
