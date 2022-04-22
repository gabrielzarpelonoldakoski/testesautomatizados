function somaMultiplos(){
    let somaTresECinco = 0,
    somaTresOuCinco = 0,
    somaTresOuCincoESete = 0;
        
    for (let index = 1; index < 1000; index++) {
        somaTresECinco += multiplosTresECinco(index) ? index : 0;
        somaTresOuCinco += multiplosTresOuCinco(index) ? index : 0;
        somaTresOuCincoESete += multiplosTresOuCincoESete(index) ? index : 0;
    }
    return {somaTresECinco, somaTresOuCinco, somaTresOuCincoESete};
}

function multiplosTresECinco(numero){
    return numero % 3 == 0 && numero % 5 == 0;
}
function multiplosTresOuCinco(numero){
    return numero % 3 == 0 || numero % 5 == 0;
}
function multiplosTresOuCincoESete(numero){
    return (numero % 3 == 0 || numero % 5 == 0) && numero % 7 == 0;
}

module.exports = {somaMultiplos, multiplosTresECinco, multiplosTresOuCinco, multiplosTresOuCincoESete}