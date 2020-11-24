//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati

//Funzione per generare numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione per trovare numeri duplicati nell'array
function duplicati(array, number) {
    var i = 0;
    while (i < array.length) {
        if (number === array[i]) {
            return true;
        }
        i++
    }
}

var numeriPcRandom = [];

while (numeriPcRandom.length !== 16) {
    var number = getRandomNumber(1, 100);
    if (! duplicati(numeriPcRandom, number)) {
        numeriPcRandom.push(number);
    }
}

console.log(numeriPcRandom);

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

var userNumbers = [];

var giocate = 100 - 16;

for (var i = 0; i <= giocate; i++) {
    var numeroUt = Number(prompt("Inserisci un numero compreso tra 1 e 100"));
    if (duplicati(numeriPcRandom, numeroUt)) {
        alert("Bomba 💣 This is the end!");
        break;
    }
    while (duplicati(userNumbers, numeroUt)) {
        alert("Numero già usato")
        numeroUt = Number(prompt("Inserisci un numero compreso tra 1 e 100"));
    }
    while (numeroUt == 0) {
        alert("0 non è un numero compreso tra 1 e 100, gnurant!")
        numeroUt = Number(prompt("Inserisci un numero compreso tra 1 e 100"));
    }
    userNumbers.push(numeroUt);
}

console.log(userNumbers);

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

var sommaPunti = 0;

for (i = 0; i < userNumbers.length; i++) {
   sommaPunti = sommaPunti + 1;
}

console.log("Hai totalizzato " + sommaPunti + " punti");