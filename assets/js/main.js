//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati

var numeri = [];

for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor((Math.random() * 101));
    if(numeri.indexOf(randomNumber) === -1) {
        numeri.push(randomNumber);
    }
}

console.log(numeri);

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.

var userNumbers = [];

var n = 0;
while (n < 3) {
    var numeroUt = Number(prompt("Inserisci un numero da 1 a 100, non lo stesso più volte!"));
    userNumbers.push(numeroUt);
    n++;
}

console.log(userNumbers);

//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.





//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.



//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */