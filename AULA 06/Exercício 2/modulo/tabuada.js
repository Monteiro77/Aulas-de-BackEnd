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

    if(tabuadaInicial > tabFinal ){
        console.log('ERROR: Você digitou a tabuada inicial maior que a tabuada final!')
    }else if(minimoMultiplicador > maximoMultiplicador){
        console.log('ERROR: Você digitou o mínimo multiplicador maior que o máximo multiplicador!')
    }else if(isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(minimoMultiplicador) || isNaN(maximoMultiplicador)){
        console.log('ERROR: Você digitou alguma letra!')
    }else if(tabuadaFinal > 50 || tabuadaInicial < 1){
        console.log('ERROR: Os valores da tabuada inicial ou tabuada final devem ser entre 1 e 50!')
    }else if(minimoMultiplicador < 2 || maximoMultiplicador > 100){
        console.log('ERROR: Os multiplicadores devem ser entre 2 e 100!!')
    }else if(tabuadaInicial == "" || tabuadaFinal == "" || minimoMultiplicador == "" || maximoMultiplicador == ""){
        console.log('ERROR: Você deixou algum dado em branco!')
    }else{
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

    
    }

    module.exports = {
        getTabuada
    }