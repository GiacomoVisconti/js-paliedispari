//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


//Chiedo all'utente di inserire una parola
    //Dichiaro la variabile da riempire tramite un prompt
    const user_word = prompt("Inserisci una parola!").trim().toLowerCase()
    
    
//Creare una funzione per capire se la parola inserita è palindroma

    //utilizzando il ciclo FOR, capovolgo la parola
    function palindrome(word){
        let reverse_word = ""

          for(let i = word.length -1; i >= 0; i--){
            let single_letter = word.charAt(i)

            reverse_word = reverse_word + single_letter  
            console.log(reverse_word);
        }
        //Eseguo un controllo, SE la parola capovolta è uguale alla parola invertita
        if (reverse_word === word){
            //Stampo il messaggio appropriato
            alert("La parola è palindroma")
        } else {
            //Stampo il messaggio appropriato
            alert("La parola NON è palindroma")
        }

        
        // //utilizzando .reverse(), capovolgo la parola
        // let reverse_word = word.Reverse()
        // if (word === reverse_word){
        //     //Stampo il messaggio appropriato
        // alert("La parola è palindroma")
        // } else {
        // //Stampo il messaggio appropriato
        // alert("La parola NON è palindroma")
        // }
}
    
    
    palindrome(user_word)