/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindroma(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            console.log(`La parola ${word} non è palindroma`);
            return false;
        }
    }
    console.log(`La parola ${word} è palindroma`);
    return true;

    //return word.reverse()===word

}






/*
Pari e dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function isEven(num) {
    if (num % 2 === 0) {
        return "pari"
    }
    return "dispari"
}

//W3S Random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Main

//Palindroma
const userWord = prompt("Inserire una parola");
isPalindroma(userWord);


//Pari e dispari
const userChoice = prompt("Scegli pari o dispari").toLowerCase()
const userNum = Number(prompt("Inserire un numero compreso tra 1 e 5"));

const numRandom = getRndInteger(1, 5)
const sum = userNum + numRandom

if (isEven(sum) === userChoice) {
    console.log("L'utente ha vinto");

} else {
    console.log("Il PC ha vinto");

}