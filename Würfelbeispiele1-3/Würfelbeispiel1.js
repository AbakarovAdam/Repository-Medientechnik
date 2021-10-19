/*Würfelbeispiel1*/

console.log('Welcome!');

let Zufallszahl1 = Math.random();                                                                               // Math.random: gives random numbers.
let ergebnis = Zufallszahl1 * 6;
ergebnis = Math.floor(ergebnis);                                                                                //Math.floor(): "abrunden" of the result.
let output = document.getElementById('output');                                                               //getElementById: getting an id or class from html document.
output.innerHTML = "Gewürfelte Zahl: " + ergebnis;    