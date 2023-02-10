/****************************************************************** 
 * Objetiv: Arquivo de funções para calcular uma tabuada
 * Data: 06/02/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ****************************************************************/

//função que gera uma tabuada até o contador específico
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let tabuadaContador = Number(String(maxMultiplicador).replace(',','.'));
    let status = true;
    let resultado;
    let contador = 0;

    if (tabuada == 0 || tabuadaContador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(tabuadaContador))
        status = false;
    else {

        // while (contador <= tabuadaContador) {
            
        //     resultado = tabuada * contador;
        //     console.log(tabuada + 'x' + contador + '=' + resultado);

        //     contador +=1;
            
        // }

        for (let contador = 0; contador <= tabuadaContador; contador++) {
            resultado = tabuada * contador;
            console.log( `${tabuada} x ${contador} = ${resultado} `);
            
            
            
        }

    }
    
    return status;

};


getTabuada(5.25, 25)

module.exports = {
    getTabuada
}