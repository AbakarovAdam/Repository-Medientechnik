/*Würfelbeispiel6*/



let output = document.getElementById('output');
output.innerHTML += "<hr>";

function newDice(){
    randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
} 


function checkTwoDices(){
 let Würfel1 = newDice();
 let Würfel2 = newDice();
 if(Würfel1 == 1){
    output.innerHTML += "Spieler 1: " + "<img src="Cube_clipart/ "";
 }

 
 output.innerHTML += "<br>";
 output.innerHTML += "<br>";
 output.innerHTML += "Spieler 2: " + Würfel2;
 output.innerHTML += "<br>";
 output.innerHTML += "<br>";

if(Würfel1>Würfel2) {
    output.innerHTML += "Spieler 1 hat gewonnen!";
    console.log('Spieler 1 hat gewonnen!');
}

else if(Würfel2>Würfel1) {
    output.innerHTML += "Spieler 2 hat gewonnen!";
    console.log('Spieler 2 hat gewonnen!');
}

else{
    output.innerHTML += "Unentschieden";
    console.log('Unentschieden');
}
output.innerHTML += "<br>";
output.innerHTML += "<hr>";


}
checkTwoDices();