function numeroFeliz(numero){
    let numerosPassados = [];
    let numeroAtual = numero;
    let numeroFeliz;
    while (true) {
        if(numeroAtual === 1){
            numeroFeliz = true;
            break;
        }
        
        let numeroNovo = somarDigitosQuadrados(numeroAtual)
        if(numerosPassados.includes(numeroNovo)){
            numeroFeliz = false;
            break;
        }
        numerosPassados.push(numeroNovo);

        numeroAtual = numeroNovo;
    }
    return numeroFeliz;
}

function somarDigitosQuadrados(numero){
    let numeroNovo = 0;
    if (numero.toString().length > 1) {
        let arrayCaracteres = numero.toString().split('');
        for (const caracter of arrayCaracteres) {
            numeroNovo += caracter * caracter;
        }
    }
    else{
        numeroNovo += numero * numero;
    }
    return numeroNovo
}

module.exports = { numeroFeliz, somarDigitosQuadrados }