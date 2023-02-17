/**********************************************************************************
 * Objetivo: Criar um sistema que cria uma tabuada
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/

var tabuada = require('./modulo/tabuada.js')
//Import da biblioteca da entrada de Dados
var readline = require('readline');

//Cria um objeto para  manipular a entrada de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite a tabuada inicial: ', function(inicialTab){
    let tabInicial = inicialTab
    
    entradaDados.question('Digite a tabuada final: ', function(finalTab){
        let tabFinal = finalTab

        entradaDados.question('Digite o mínimo multiplicador: ', function(multiplicadorMin){
            let minMultiplicador = multiplicadorMin

            entradaDados.question('Digite o máximo multiplicador: ', function(multiplicadorMax){
                let maxMultiplicador = multiplicadorMax

                tabuadaPrecisa = tabuada.getTabuada(tabInicial, tabFinal, minMultiplicador, maxMultiplicador)


            })
        })
    })
})