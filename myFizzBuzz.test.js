const { expect, test } = require('@jest/globals');
const exp = require('constants');
const myFizzBuzz = require('./myFizzBuzz');

describe('MyFizzBuzz test', () => {
    test('divisivel por 3 e 5, retorna fizzbuzz', () => {
        expect(myFizzBuzz(345)).toBe('fizzbuzz')
    })
    test('divisivel por 3, retorna fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    test('divisivel por 5, retorna buzz', () => {
        expect(myFizzBuzz(20)).toBe('buzz')
    })
    test('nao divisivel por 5 e 3, retorna o proprio parametro', () => {
        expect(myFizzBuzz(16)).toBe(16)
    })
    test('parametro diferente de numero', () => {
        expect(myFizzBuzz('2')).toBe(false)
    })
})