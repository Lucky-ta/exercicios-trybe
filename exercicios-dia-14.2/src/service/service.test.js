// 1 - Crie uma função que gere um número aleatório


// Defina uma função que gere um número aleatório entre 0 e 100.
function returnRandoNumber() {
    const maxNubmer = 100
    return Math.floor(Math.random() * maxNubmer);
}

// Desenvolva os testes para essa função.
// Utilize o mock e defina o retorno padrão como 10.
describe('Teste para funçao de gerar numero randomico', () => {
    test('testa se o retorno da função é igual a 10', () => {

        returnRandoNumber = jest.fn().mockReturnValue(10);

        expect(returnRandoNumber()).toBe(10);
        
    })

    // Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

    test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {

        returnRandoNumber = jest.fn().mockReturnValue(9)

        returnRandoNumber();

        expect(returnRandoNumber).toHaveBeenCalled();
        expect(returnRandoNumber()).toBe(9);
        expect(returnRandoNumber).toHaveBeenCalledTimes(2)

    })
})

