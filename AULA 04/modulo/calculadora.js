/********************************************************
 * Objetivo: Arquivo de funções de calculos matemáticos
 * Autor: Vinícius Monteiro
 * Data:03/02/2023
 * Versão: 1.0
 ********************************************************/

// função para realizar cálculos matemáticos
// Forma 1 de criar uma função
// function calculadora(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();
//     let resultado;
//     let status = true;

//     if (operacao == 'SOMAR') {
//         resultado = valor1 + valor2
//     } else if (operacao == 'SUBTRAIR') {
//         resultado = valor1 - valor2
//     } else if (operacao == 'MULTIPLICAR') {
//         resultado = (valor1) * (valor2);
//     } else if (operacao == 'DIVIDIR') {

//         if (valor2 == 0) {
//             console.log('ERROR: Não é possível dividir por 0')
//             status = false;
            
//         } else 
//             resultado = (valor1) / (valor2);
         
//     }
//     else {
//         console.log('ERROR : A sua escolha de operação matemática é inválida')
//         status =  false;
//     }

//     if (resultado == undefined) {
//         return false
//     } else {
//         return resultado
//     }

    

// }

//Forma 2 de criar uma função ( metodo mais utilizado por programadores JS)
const calculadora = function (numero1, numero2, tipoCalculo){    

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    switch (operacao)
    {
        case 'SOMAR' :
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR' :
            resultado = subtrair(valor1, valor2) 
            break;
        case 'MULTIPLICAR' :
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR' :
            if (valor2 == 0) {
                console.log('ERROR: Não é possível dividir por 0')
                status = false;
                
            } else 
                resultado = dividir(valor1, valor2);
            
            break;
        
        default: 
            console.log('ERROR : A sua escolha de operação matemática é inválida')
            status = false    
    }

    if (resultado == undefined) {
        return false
    } else {
        return resultado.toFixed(2);
    }

    


}

// Forma 3 de criar uma função (arrow function)
const somar = (valor1, valor2) => Number(valor1) + Number(valor2);
const subtrair = (valor1, valor2) => Number(valor1) - Number(valor2);
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2);
const dividir = (valor1, valor2) => Number(valor1) / Number(valor2);


module.exports = {
    calculadora
}