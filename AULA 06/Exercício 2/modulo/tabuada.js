/**********************************************************************************
 * Objetivo: Criar um sistema que cria uma tabuada
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/

const getTabuada = function(tabInicial, tabFinal, minMultiplicador, maxMultiplicador){

    let tabuadaInicial = Number(String(tabInicial).replace(',','.'))
    let tabuadaFinal = Number(String(tabFinal).replace(',','.'))
    let minimoMultiplicador = Number(String(minMultiplicador).replace(',','.'))
    let maximoMultiplicador = Number(String(maxMultiplicador).replace(',','.'))
    let resultado
    
    
    let tabuada = minimoMultiplicador

    for (minimoMultiplicador; minimoMultiplicador <= maximoMultiplicador;minimoMultiplicador++) {
        console.log('Tabuada do ' + minimoMultiplicador)
        for(contador = tabuadaInicial; contador <= tabFinal; contador++){
            
            resultado = tabuada * contador
            console.log(tabuada + 'x' + contador + '= ' + resultado)

            }  
            tabuada++
            console.log('****************FIM DA TABUADA*****************')
        }
    }

    module.exports = {
        getTabuada
    }