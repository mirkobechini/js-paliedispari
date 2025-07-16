/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindroma(word){
    for( let i = 0; i < word.length/2; i++){
        if(word[i] != word[word.length-1-i]){
            console.log(`La parola ${word} non è palindroma`);
            return false;
        }
    }
    console.log(`La parola ${word} è palindroma`);
    return true;
}






/*
Pari e dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/






//Main

let userWord = prompt("Inserire una parola");
isPalindroma(userWord);
