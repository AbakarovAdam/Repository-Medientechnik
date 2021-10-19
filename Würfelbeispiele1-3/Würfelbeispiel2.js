/*Würfelbeispiel2*/
console.log('Welcome!');

let Zufallszahl1 = Math.random();
let Zufallszahl2 = Math.random();
let ergebnis1 = Zufallszahl1 * 6;
 ergebnis1 = Math.floor(ergebnis1);
let ergebnis2 = Zufallszahl2 * 6;
ergebnis2 = Math.floor(ergebnis2);

let output = document.getElementById('output');
output.innerHTML = "Erste gewürfelte Zahl: " + ergebnis1;
let output2 = document.getElementById('output2');
output2.innerHTML = "Zweite gewürfelte Zahl: " + ergebnis2;

