const { test } = require('@jest/globals');
const multiplos = require('./index');
 
test('verificar se número é multiplo de 3 e 5', ()=>{
    expect(multiplos.multiplosTresECinco(15)).toBe(true);
})
test('verificar se número é multiplo de 3 ou 5', ()=>{
    expect(multiplos.multiplosTresOuCinco(6)).toBe(true);
})
test('verificar se número é multiplo de (3 ou 5) e 7', ()=>{
    expect(multiplos.multiplosTresOuCincoESete(21)).toBe(true);
})
test('verificar soma de multiplos de 3 e 5', ()=>{
    expect(multiplos.somaMultiplos().somaTresECinco).toBe(33165);
})
test('verificar soma de multiplos de de 3 ou 5', ()=>{
    expect(multiplos.somaMultiplos().somaTresOuCinco).toBe(233168);
})
test('verificar soma de multiplos de de (3 ou 5) e 7', ()=>{
    expect(multiplos.somaMultiplos().somaTresOuCincoESete).toBe(33173);
})
