/********************************************************
 * Objetivo: Arquivo de funções de calculos matemáticos
 * Autor: Vinícius Monteiro
 * Data:03/02/2023
 * Versão: 1.0
 ********************************************************/

// função para realizar cálculos matemáticos
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = (valor1) * (valor2);
    } else if (operacao == 'DIVIDIR') {

        if (valor2 == 0) {
            console.log('ERROR: Não é possível dividir por 0')
            
        } else {
            resultado = (valor1) / (valor2);
        }
    }

    if (resultado == undefined) {
        return false
    } else {
        return resultado
    }

    

}



module.exports = {
    calculadora
}