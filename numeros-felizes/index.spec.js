const { test } = require('@jest/globals');
const numerosFelizes = require('./index');

test('verificar se o numero é feliz', ()=>{
    expect(numerosFelizes.numeroFeliz(7)).toBe(true);
})

test('soma dos digitos quadrados', ()=>{
    expect(numerosFelizes.somarDigitosQuadrados(49)).toBe(97);
})