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
