// Inicio do primeiro requisito;
let returnObject = (nome) => {
    return {
        nomeCompleto: nome,
        emailCompleto: `${nome}@gmail.com`
    }
}

const newEmployees = (callBack) => {
    const employees = {
        id1: callBack('Pedro Guerra'),
        id2: callBack('Luiza Drumond'),
        id3: callBack('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(returnObject));
// Fim do primeiro requisito.

// Inicio do segundo requisito;
const checkNumber = (inputNumber, random) => inputNumber === random;

const resultado = (inputNumber, callBack) => {
    const random = Math.floor(Math.random() * 6);

    return callBack(inputNumber, random) ? 'Parabens, voce ganhou' : 'Tente novamente';
}

console.log(resultado(3, checkNumber));
// Fim do segundo requisito.

// Inicio do terceiro requisito;

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const nota = (respostaCerta, respostaEstudante, acao) => {
    let contador = 0;
    for (let index = 0; index < respostaCerta.length; index += 1) {
        const acaoRetorno = acao(respostaCerta[index], respostaEstudante[index]);
        contador += acaoRetorno;
    }
    return `Nota final: ${contador} alternativas corretas.`
}

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, (rCerta, rEstudante)=> {
    if (rCerta === rEstudante) {
        return 1;
    } if (rEstudante === 'N.A') {
        return 0;
    }
    return -0.5;
}));
// Fim do terceiro requisito.