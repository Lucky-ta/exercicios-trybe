//Variaveis para realizar o exercicio
let n = 5;
let asterisco = '*';
//variaveis de lógica
let espaco_vazio = ' '
let quantidade_de_asteriscos = 1
let qauntidade_de_vazios = 3


for (index=2; index < n; index+=1) {
    //imprimir 1 asterico centralizado;
    console.log(espaco_vazio.repeat(qauntidade_de_vazios),asterisco.repeat(quantidade_de_asteriscos));
    quantidade_de_asteriscos +=2
    qauntidade_de_vazios -=1
}