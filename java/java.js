const now = new Date();
const yearNow = now.getFullYear();
const userName = prompt("Inserisci il tuo Nome");


// per dopo provare a creare un alert all'inserimento dell'user name se viene inserito in forma numerica

let userBirthYear = parseInt(prompt("Inserisci la tua data di nascita"));


if (isNaN(userBirthYear)) {
  alert(
    "Ti preghiamo di inserire correttamente la tua data di nascita in forma numerica"
  );
  userBirthYear = parseInt(prompt("Inserisci il tuo Nome"));
}

let travelKm = parseInt(prompt("Quanti chilometri prevede la tua tratta?"));

if (isNaN(travelKm)) {
  alert(
    "Il dato non è corretto, inserisci nuovamente quanti chilometri devi percorrere in valori numerici"
  );
  travelKm = parseInt(prompt("Quanti chilometri prevede la tua tratta?"));
}

const userAge = yearNow - userBirthYear;
const price = Math.round(travelKm * 0.21 * 100) / 100;
const discount1 = 0.8;
const discount2 = 0.6;

let finalPrice = price;

if (userAge < 18) {
  finalPrice = Math.round(price * discount1 * 100) / 100;
} else if (userAge > 65) {
  finalPrice = Math.round(price * discount2 * 100) / 100;
}

const result = document.getElementById("result");
result.innerHTML = `${userName}! Il prezzo del tuo biglietto è di €${finalPrice}`;
