/**********************************************************************************
 * Objetivo: Criar um sistema que cria uma tabuada
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/


var separadorMat = require('./modulo/separador.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite o numero inicial: ', function (numeroInicial) {
    let inicialNumero = numeroInicial

    entradaDados.question('Digite o nuero final: ', function (numeroFinal) {
        let finalNumero = numeroFinal

        console.log('1- IMPAR')
        console.log('2- PAR')
        console.log('3- PAR E IMPAR')
        entradaDados.question('Escolha qual separação você deseja: ', function (escolhaUsuario) {
            let usuarioEscolha = escolhaUsuario
            if (usuarioEscolha == 1) {
                separadorPrecisa = separadorMat.getNumerosImpares(inicialNumero, finalNumero)
            } else if (usuarioEscolha == 2) {
                separadorPrecisa = separadorMat.getNumerosPares(inicialNumero, finalNumero)
            } else if (usuarioEscolha == 3) {
                separadorPrecisa = separadorMat.getNumerosPares(inicialNumero, finalNumero)
                separadorPrecisa = separadorMat.getNumerosImpares(inicialNumero, finalNumero)

            }else{
                console.log('ERROR: Você deve escolher entre umas da opções!')
            }
        })



    })
})