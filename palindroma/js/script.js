/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Su internet ci sono soluzioni con join e reverse, non potete usarle!
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

//Chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola!")
console.log("Hai inserito la parola " + userWord);

//Creo una funzione che mi controlla se la parola che l'utente ho inserito è palindroma
//word è la parola da controllare presa tramite input
//reverseWord è la parola che ho girato al contrario     
let wordReverted = pali(userWord);
function pali(word){
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        const reverseWordLetter = word[i];
        reverseWord += reverseWordLetter
    }
    return reverseWord
}

//Confronto la parola inserita e la parola girata per determinare se è palindroma
if (userWord === wordReverted){
    userMessage = "La parola è palindroma"
} else {
    userMessage ="la parola non è palindroma"
}
console.log(userMessage);


