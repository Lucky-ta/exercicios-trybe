let salario_bruto = 3000;
let salario_com_desconto = 0;
let salario_liquido = 0;

if (salario_bruto <= 1.556,94) {
    salario_com_desconto = ((salario_bruto) - (salario_bruto* 8/100));
} else if (salario_bruto === 1.556,95 && salario_bruto <= 2.259,92) {
    salario_com_desconto = ((salario_bruto) - (salario_bruto* 9/100));
} else if (salario_bruto === 2.259,93 && salario_bruto <= 5.189,82) {
    salario_com_desconto = ((salario_bruto) - (salario_bruto* 11/100));
} else if (salario_bruto > 5.189,82) {
    salario_com_desconto = (salario_bruto - 570.88);
}
console.log(salario_com_desconto)


if (salario_com_desconto <= 1903.98) {
    console.log('Voce está isento de imposto.');
} else if (salario_com_desconto === 1903.99 && salario_bruto <= 2826.65) {
    salario_liquido = ((salario_com_desconto) - ((salario_com_desconto* 7.5/100) - 142.80))
    console.log(salario_liquido)
} else if ( salario_com_desconto === 2826.66 && salario_bruto <= 3751.05) {
    salario_liquido = ((salario_com_desconto) - ((salario_com_desconto* 15/100) - 354.80))
    console.log(salario_liquido)
} else if ( salario_com_desconto === 3751.06 && salario_bruto <= 4664.68) {
    salario_liquido = ((salario_com_desconto) - ((salario_com_desconto* 22.5/100) - 636.13))
    console.log(salario_liquido)
} else if (salario_com_desconto > 4664.68) {
    salario_liquido = ((salario_com_desconto) - ((salario_com_desconto* 27.5/100) - 869.36))
    console.log(salario_liquido)
}