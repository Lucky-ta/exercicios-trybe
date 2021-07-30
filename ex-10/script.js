// Custo do produto
let product_cost = 5;
let valor_de_venda = 20;



if (product_cost < 0|| valor_de_venda < 0) {
    console.log('Erro: Valor inserido menor que zero, digite um valor válido.');
} else {
    product_cost = (product_cost * 20/100) + (product_cost);
    let lucro = valor_de_venda - product_cost;
    console.log('O seu valor de lucro é ' + lucro + ' R$')
}