/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//! FUNCTIONS

//?Creo una funzione per effettuare il controllo della scelta dell'utente
/**
 * This function controls the user input (string), between two options.
 * Asks to the user to input the choice until is wrote correctly.
 * @param {string} choice 
 * @returns {string}
 */
function user_pari_dispari_control(choice){
    while (choice !== "pari" && choice !== "dispari") {
        choice = prompt(`Scrivi meglio (Pari o Dispari) la tua scelta per favore, prima hai scritto ${choice}`)
    }
    return choice
}

//?Creo una funzione per effettuare il controllo della scelta del numero dell'utente
/**
 * This function controls the user input (number), between a minimum and maximum. 
 * Asks to the user to input the number until the number is between a minimum and maximum.
 * @param {number} numb user input
 * @param {number} min minimum number 
 * @param {number} max maximum number
 * @returns {number} overwrite the user choice
 */
function user_number_control(numb, min, max){
    while (!(numb <= max && numb >= min)) {
        numb = Number(prompt(`Simpatico...Scegli un numero compreso tra ${min} e ${max} per favore`))     
    } 
    return numb
}

//*Creo una funzione per generare un numero random
/**
 * This function generates a random number between a min and max both included
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function random_integer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//*Creo una funzione per effettuare il controllo del risultato
function pari_dispari_result(numb1, numb2, choice){

    //Dichiaro nella funzione la variabile del risultato della somma dei due numeri
    let result = numb1 + numb2;

    //Effettuo il controllo del risultato, rispetto alla scelta dell'utente e la somma dei due numeri
    if (result % 2 === 0 && choice == "pari"){
        
        alert(`Hai vinto! 
            Numero del PC: ${numb1}
            Il tuo numero: ${numb2}
            Scelta: ${choice.toUpperCase()}
            Risultato della somma: ${result}`);
    
    } else if (result % 2 > 0 && choice == "dispari") {
        alert(`Hai vinto! 
            Numero del PC: ${numb1}
            Il tuo numero: ${numb2}
            Scelta: ${choice.toUpperCase()}
            Risultato della somma: ${result}`);
        
    } else {
        alert(`Hai perso! 
            Numero del PC: ${numb1}
            Il tuo numero: ${numb2}
            Scelta: ${choice.toUpperCase()}
            Risultato della somma: ${result}`);
        
    }
}
//! END FUNCTIONS

//Dichiaro la variabile scelta e la faccio riempire dall'utente tramite prompt
let user_choice = prompt("Scegli tra Pari o Dispari").trim().toLocaleLowerCase()

//eseguo la funzione del controllo della scelta


//sovrascrivo il dato venuto fuori dal controllo
user_choice = user_pari_dispari_control(user_choice)


//chiedo allo user di scegliere un numero
let user_number = Number(prompt("Scegli un numero compreso tra 1 e 5"))

//Eseguo la funzione del controllo dell'input del numero scelto dall'utente


//sovrascrivo il dato venuto fuori dal controllo
user_number = user_number_control(user_number,1,5)



//Dichiaro la variabile del numero generato dal computer
let pc_number = random_integer(1,5)
console.log(user_choice, user_number, pc_number);


//Eseguo la funzione per effettuare il controllo sul risultato
pari_dispari_result(pc_number,user_number ,user_choice)



