//Utilizando o array cirado no exercicio anterior imprima o resultado de divisao de ada um dos elementos por 2;

let lista = [];

for (let index=0; index < 25; index+=1) {
    lista.push(index+1)
}
//Divisão dos elementos;

let resultado_das_divisoes = [];

for (let index=0; index < lista.length; index+=1) {
    resultado_das_divisoes.push(lista[index] / 2)
}

console.log(resultado_das_divisoes);