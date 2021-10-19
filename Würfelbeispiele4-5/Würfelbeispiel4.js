/*Würfelbeispiel4(Erweiterung mit 3)*/

function newDice(){
    randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
} 



function newDoubleDice(){
    let firstNumber = newDice();
    let secondNumber = newDice();
    let result = firstNumber + secondNumber;
    return result;
}

for(let i = 0; i<=15;i++){
    let output = document.getElementById('output');
    output.innerHTML += "Gewürfelte Zahl :" + newDoubleDice() + "<br>";
}