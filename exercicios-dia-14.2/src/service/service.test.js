// 1 - Crie uma função que gere um número aleatório

// Defina uma função que gere um número aleatório entre 0 e 100.
import { firstFunction, secondFunction, thirdFunction } from "./service";


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

    test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
        returnRandoNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(returnRandoNumber(2, 2)).toBe(1)
        expect(returnRandoNumber).toHaveBeenCalled();
        expect(returnRandoNumber).toHaveBeenCalledTimes(1);
        expect(returnRandoNumber).toHaveBeenCalledWith(2, 2)

    })

})

describe('testando implementações', () => {
    test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {

        returnRandoNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

        expect(returnRandoNumber(2, 2, 3)).toBe(12)
        expect(returnRandoNumber).toHaveBeenCalled();
        expect(returnRandoNumber).toHaveBeenCalledTimes(1);
        expect(returnRandoNumber).toHaveBeenCalledWith(2, 2, 3);

    })

    test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
        returnRandoNumber.mockReset();

        returnRandoNumber = jest.fn().mockImplementationOnce(( a ) => a * 2);

        expect(returnRandoNumber(2)).toBe(4);
        expect(returnRandoNumber).toHaveBeenCalled();
        expect(returnRandoNumber).toHaveBeenCalledTimes(1);
        expect(returnRandoNumber).toHaveBeenCalledWith(2);

    })

})
jest.mock("./service");
 
describe("testandoo implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    firstFunction.mockImplementation(a => a.toLowerCase());

    expect(firstFunction("UPPERCASE")).toBe("uppercase");
    expect(firstFunction).toHaveBeenCalled();
    expect(firstFunction).toHaveBeenCalledTimes(1);
    expect(firstFunction).toHaveBeenCalledWith("UPPERCASE");

    firstFunction.mockRestore();

    expect(firstFunction("lowercase")).toBe("LOWERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(secondFunction("letter")).toBe("r");
    expect(secondFunction).toHaveBeenCalled();
    expect(secondFunction).toHaveBeenCalledTimes(1);
    expect(secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(thirdFunction).toHaveBeenCalled();
    expect(thirdFunction).toHaveBeenCalledTimes(1);
    expect(thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});