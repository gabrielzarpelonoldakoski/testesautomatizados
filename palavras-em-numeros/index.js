const { multiplosTresOuCinco } = require('../multiplos/index')
const { numeroFeliz } = require('../numeros-felizes/index')
const dicionario = require('./dicionario')

function palavrasEmNumeros(palavra){
    let valorPalavra = calcularPalavra(palavra);
    
    console.log(`A valor da palávra ${numeroPrimo(valorPalavra) ? 'é' : 'não é'} primo.`);
    console.log(`A valor da palávra ${numeroFeliz(valorPalavra) ? 'é' : 'não é'} número feliz.`);
    console.log(`A valor da palávra ${multiplosTresOuCinco(valorPalavra) ? 'é' : 'não é'} multiplo de três e cinco.`);
}

function numeroPrimo(numero){
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

function calcularPalavra(palavra){
    let arrayCaracteres = palavra.toString().split('');
    let valorPalavra = 0;
    for (const caracter of arrayCaracteres) {
        if (dicionario[caracter]) {
            valorPalavra += dicionario[caracter];
        }
    }
    return valorPalavra;
}   

module.exports = { palavrasEmNumeros, numeroPrimo, calcularPalavra}