const { test, expect } = require('@jest/globals');
const sum = require('./sum');

describe('soma de numeros', () => {
    test('testa 1 + 2 = 3', () => {
        expect(sum(1 , 2)).toBe(3)
    })
    
    test('testa 0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0)
    })
    
    test('testa se argumento é diferente de numero', () => {
        expect(sum(4, '5')).toEqual(false)
    })
})
