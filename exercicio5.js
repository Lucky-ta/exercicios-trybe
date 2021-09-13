const assert = require('assert');
const { count } = require('console');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumulador, atual) => acumulador += atual.split('a').length, 0)
}
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);