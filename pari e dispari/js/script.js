/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Chiedo all'utente di scegliere tra pari e dispari e di inserire un numero da 1 a 5
let userChoice=""
while (userChoice !== "pari" && userChoice !== "dispari"){
    userChoice= prompt("Scegli tra pari o dispari")
}
console.log("l'utente ha scelto " + userChoice);
let userNumber = 0;
while (userNumber<1 || userNumber>5) {
    userNumber =parseInt(prompt("Scegli un numero compreso tra 1 e 5!"))
}
console.log("l'utente ha scelto il numero " + userNumber);

//Genero un numero random tra 1 e 5 per il computer tramite funzione
let computerNumber = getRndInteger(1,5);
console.log("il numero generato è " + computerNumber)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//Sommo i due numeri
let sum = userNumber + computerNumber;
console.log("la somma dei due numeri è " + sum)

//Stabilisco se la somma dei due numeri è pari o dispari
let numberSum = oddOrEven(sum);
function oddOrEven (sumCheck){
    let numberSumChecked
    if (sumCheck % 2 === 0) {
        numberSumChecked = "pari"
    } else {
        numberSumChecked = "dispari"
    }
    return numberSumChecked
}

console.log("la somma dei due numeri è " + numberSum);

//Confronto la scelta e dichiaro chi ha vinto
let userMessage;
if (userChoice === numberSum){
    userMessage = "Complimenti, hai vinto!"
} else {
    userMessage = "Peccato, hai perso!"
}

console.log(userMessage)
