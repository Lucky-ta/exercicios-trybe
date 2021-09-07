const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const toSort = (list) => list.sort(function(a ,b){return a - b})

console.log(`Os números ${toSort(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉