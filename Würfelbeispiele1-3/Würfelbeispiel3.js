/*Würfelbeispiel3*/

function newDice(){
    randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
} 

for(let i = 0; i<=15; i++){
    let output = document.getElementById('output');
    output.innerHTML += "Gewürfelte Zahl: " + newDice() + "<br>";
}