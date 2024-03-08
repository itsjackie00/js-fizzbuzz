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
// TEMPLATE FOR JS
/*
<div id="boxes" class="d-flex justify-content-center align-content-center">
    <div class="box"></div>
</div> 
*/

/*
CODICE DA ESEGUIRE PRIMA
*/

//WRAPPER
const boxWrapper = document.createElement('div');
console.log(boxWrapper);

boxWrapper.className = 'd-flex justify-content-center align-content-center m-auto flex-wrap';
boxWrapper.setAttribute('id', 'boxes');
console.log(boxWrapper);

//VARIABILI
let numbBox = 100;
let tmpHtml = '';

// FizzBuzz Solution in log

for (i = 1; i <= numbBox; i++) {
    

    if (i % 15 === 0) {
        tmpHtml += `<div class="box bg-fizzbuzz">FizzBuzz</div>`;
    } else if(i % 3 === 0){
        tmpHtml += `<div class="box bg-fizz">Fizz</div>`;
    }else if (i % 5 === 0) {
        tmpHtml += `<div class="box bg-buzz">Buzz</div>`;
    } else {
        tmpHtml += `<div class="box bg-normal">${i}</div>`;
    }
    
}
boxWrapper.innerHTML = tmpHtml;
console.dir(boxWrapper);

const container = document.querySelector('.container');
container.append(boxWrapper);

/*
CODICE DA ESEGUIRE DOPO
*/