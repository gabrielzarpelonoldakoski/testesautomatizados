const { test } = require('@jest/globals');
const { numeroPrimo, calcularPalavra } = require('./index');

test('verifica se número é primo', ()=>{
    expect(numeroPrimo(37)).toBe(true);
})
test('soma dos digitos quadrados', ()=>{
    expect(calcularPalavra('Teste')).toBe(95);
})