//Variaveis para realizar o exercicio
let n = 5;
let asterisco = '*';
//variaveis de lógica
let espaco_vazio = ' '
let variavel = n-1
let variavel_maior = 1

for (index=0; index < n; index+=1) {
    //imprime 4 espaços vazios e um asterisco
    console.log(espaco_vazio.repeat(variavel), asterisco.repeat(variavel_maior));
    variavel-=1;
    variavel_maior+=1

}