let peca_de_xadrez = 'Peão'.toLowerCase()

switch(peca_de_xadrez){
    case 'peão':
        console.log('Pode andar duas casas no primeiro movimento; só anda uma casa');
        break;
} 

if (peca_de_xadrez != 'peão') {
    console.log('Erro: Verifique se voce digitou a peça corretamente')
}