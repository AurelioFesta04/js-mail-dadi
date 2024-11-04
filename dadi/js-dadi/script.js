const numPlayer = Math.floor(Math.random() * 6) + 1;

console.log("numero del giocatore: " + numPlayer);

const numComputer = Math.floor(Math.random() * 6) + 1;

console.log("numero del computer: " + numComputer);

if (numPlayer > numComputer) {
    console.log("il giocatore vince");
} else if (numPlayer < numComputer) {
    console.log("il computer vince");
} else
    console.log("Pareggio");