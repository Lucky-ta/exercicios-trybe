let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info_2 = {
    personagem: 'Tio Patinhas',
    origem: "CHristmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim'
};

for (let prop in info) {
    if (
        prop === 'recorrente' &&
        info[prop] === 'Sim' &&
        info_2[prop] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    }else{
        console.log(info[prop], 'e', info_2[prop]);
    }
}