// alert('funziona?');

//CONSEGNA
/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// RAGIONAMENTO JS
/*
Per numeri divisibili sia per 3 e 5 (i % 15 === 0);
console.log('FizzBuzz');
Per numeri divisibili per 3 (i % 3 === 0);
console.log('Fizz');
Per numeri divisibili per 5 ( i % 5 === 0);
console.log('Buzz');
*/

//RAGIONAMENTO HTML
/* 
Creare una griglia di quadratini di 100 quadrati che mi ci stanno 
in tutta la pagina raggruppata witdh:1000px. 
Quadratino colorato per i;
Quadratino colorato per Frizz;
Quadratino colorato per Buzz;
Quadratino colorato per FrizzBuzz;
*/

/*
CODICE DA ESEGUIRE PRIMA
*/

// FizzBuzz Solution in log

for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


/*
CODICE DA ESEGUIRE DOPO
*/