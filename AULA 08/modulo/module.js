/********************************************************
 * Objetivo: Criar funções que modulam o arquivo json
 * Data: 03/03/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 *********************************************************/


 //import do arquivo JSON
 var listaBrasil =  require('../estados_cidades.js')



 const getListaDeEstados = function(){

    let listaDeSiglasArray = []
    
     listaBrasil.estadosCidades.estados.forEach(function(estados){
       listaDeSiglasArray.push(estados.sigla)
    })
     
let listaDeSiglasJson = {UF: listaDeSiglasArray, Quantidade: listaDeSiglasArray.length}

return listaDeSiglasJson
 }
 

 const getDadosEstado = function(siglaEstado) {

    siglaEstado = listaBrasil.estadosCidades.estados
    let listaDeInformacoesArray = []
    
        listaDeInformacoesArray.push(siglaEstado.sigla)
        listaDeInformacoesArray.push(siglaEstado.nome)
        listaDeInformacoesArray.push(siglaEstado.capital)
        listaDeInformacoesArray.push(siglaEstado.regiao)
    

    let listaDeInformacoesEstado = {UF: listaDeInformacoesArray, descricao: listaDeInformacoesArray, capital: listaDeInformacoesArray, regiao: listaDeInformacoesArray}

    return listaDeInformacoesEstado
 }

 console.log(getDadosEstado('SP'))
 


