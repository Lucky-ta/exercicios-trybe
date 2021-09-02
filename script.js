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