//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidade_de_impares = 0;


for (let index=0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 != 0) {
        quantidade_de_impares++
    }
}
console.log('Temos ' + quantidade_de_impares + ' valores impares' );


if (quantidade_de_impares <= 0) {
    console.log('Nenhum valor impar encontrado.');
}