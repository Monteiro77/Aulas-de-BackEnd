/**********************************************************************************
 * Objetivo: Criar um sistema que cria uma tabuada
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/

 const getNumerosPares = function(numeroInicial, numeroFinal){

    let inicialNumero = Number(String(numeroInicial).replace(',','.'))
    let finalNumero = Number(String(numeroFinal).replace(',','.'))
     var status = true


    if(inicialNumero > finalNumero){
        console.log('ERROR: Não digite o numero inicial maior que o numero final!!')
        status = false
        return status
    }else if(finalNumero < inicialNumero){
        console.log('ERROR: Não digite o numero final maior que o número inicial!!')
        status = false
        return status
    }else if(inicialNumero == "" || finalNumero == ""){
        console.log('ERROR: Não é possivel separar numeros inexistentes!')
        status = false
        return status
    }else if(!isNaN(inicialNumero) || !isNaN(finalNumero)){
        console.log('ERROR: Não é possível separar letras!')
        status = false
        return status
    }else{
        console.log('Numeros Pares')
    let contador = 0
    while(inicialNumero <= finalNumero ){
        if(inicialNumero % 2 == false){
            console.log(inicialNumero)
            contador++
        }
        inicialNumero++
    }
    }
    
    
 }

 const getNumerosImpares = function(numeroInicial, numeroFinal){

    let inicialNumero = Number(String(numeroInicial).replace(',','.'))
    let finalNumero = Number(String(numeroFinal).replace(',','.'))
    

    if(inicialNumero > finalNumero){
        console.log('ERROR: Não digite o numero inicial maior que o numero final!!')
        status = false
        return status
    }else if(finalNumero < inicialNumero){
        console.log('ERROR: Não digite o numero final maior que o número inicial!!')
        status = false
        return status
    }else if(inicialNumero == "" || finalNumero == ""){
        console.log('ERROR: Não é possivel separar numeros inexistentes!')
        status = false
        return status
    }else if(!isNaN(inicialNumero) || !isNaN(finalNumero)){
        console.log('ERROR: Não é possível separar letras!')
        status = false
        return status
    }else{
    console.log('Numeros Impares')
    let contador = 0
    while(inicialNumero <= finalNumero ){
        if(inicialNumero % 2 == true){
            console.log(inicialNumero)
            contador++
        }
        inicialNumero++
    }
    }  
 }

 


module.exports = {
    getNumerosPares,
    getNumerosImpares
}

 