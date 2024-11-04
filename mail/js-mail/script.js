const userEmail = prompt("Inserisci la tua e-mail");

const mailList = ["festa@gmail.com", "pippo@gmail.com", "duck@gmail.com", "verdi@gmail.com"];

let resultEmail = `${userEmail} purtroppo non è presente nella lista delle e-mail`;

for (let i = 0; i < mailList.length; i++) {

    if (userEmail === mailList[i]) {
        resultEmail = (`${userEmail} è presente nella lista delle e-mail`);
    }
} 

console.log(resultEmail)
