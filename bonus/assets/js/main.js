/* Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeriPcRandom = [];

var maxN, giocate, istruzioni;

var difficolta = Number(prompt("Inserisci il livello di difficoltà: 0, 1, 2", '0, 1, 2'));

if (difficolta == 0) {
    alert("This is for boys");
    maxN = 100;
    giocate = 84;
    istruzioni = "Inserisci un numero tra 1 e 100";

} else if (difficolta == 1) {
    alert("Iniziamo a ragionare")
    maxN = 80;;
    giocate = 64;
    istruzioni = "Inserisci un numero tra 1 e 80";

} else if (difficolta == 2) {
    alert("Sticazzi");
    maxN = 50;
    giocate = 34;
    istruzioni = "Inserisci un numero tra 1 e 50";

} else {
    while (difficolta != 0 && difficolta != 1 && difficolta != 2){
        difficolta = Number(prompt("Non fare il pirla, inserisci il livello giusto di difficoltà: 0, 1, 2", '0, 1, 2'));
    }

}

while (numeriPcRandom.length !== 16) {
    var number = getRandomNumber(1, maxN);
    if (! numeriPcRandom.includes(number)) {
        numeriPcRandom.push(number);
    }
}

console.log(numeriPcRandom.sort());

var userNumbers = [];

for (var i = 0; i <= giocate; i++) {
    var numeroUt = Number(prompt(istruzioni));
    if (numeriPcRandom.includes(numeroUt)) {
        alert("Bomba 💣 This is the end!");
        break;
    }
    while (userNumbers.includes(numeroUt)) {
        alert("Numero già usato, hai una memoria da 🐘")
        numeroUt = Number(prompt(istruzioni));
    }
    while (numeroUt == 0) {
        alert("0 non è un numero compreso tra 1 e 100, capra! 🐐")
        numeroUt = Number(prompt(istruzioni));
    }
    userNumbers.push(numeroUt);
}

console.log(userNumbers);

function calcoloPunti (array, num) {
    var num = 0;
    for (i = 0; i < array.length; i++){
        num = num + 1;
    }
    return num;
}

var somma = 0;

var punteggio = calcoloPunti(userNumbers, somma);

console.log("Hai totalizzato " + punteggio + " punti");