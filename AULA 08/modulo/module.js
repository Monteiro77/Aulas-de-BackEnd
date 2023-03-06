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

    let uf = siglaEstado.toUpperCase()
    let estado = listaBrasil.estadosCidades.estados
    let listaDeInformacoesEstado

   estado.forEach(function(estados){
      if(estados.sigla == uf){
          listaDeInformacoesEstado = {
            uf: estados.sigla,
             descricao: estados.nome,
              capital: estados.capital,
               regiao: estados.regiao}
      }
   })
    

    if(listaDeInformacoesEstado == undefined){
      return false
   }else{
     return listaDeInformacoesEstado
   }
    
 }


 const getCapitalEstado = function(siglaEstado){
   let uf = siglaEstado.toUpperCase()
   let estado = listaBrasil.estadosCidades.estados
   let listaDeInformacoesEstado

  estado.forEach(function(estados){
     if(estados.sigla == uf){
         listaDeInformacoesEstado = {
           uf: estados.sigla,
            descricao: estados.nome,
             capital: estados.capital}
     }
  })
   
   if(listaDeInformacoesEstado == undefined){
     return false
  }else{
    return listaDeInformacoesEstado
  }
   
 }
 
 const getEstadosRegiao = function(regiao){
   
   let estado = listaBrasil.estadosCidades.estados
   let listaDeInfromacoesRegiaoJson = {}
   let listaDeInfromacoesRegiaoArray = []
   
   let status = false


   estado.forEach(function(estados){
      if(estados.regiao == regiao){
         
         listaDeInfromacoesRegiaoJson.regiao = estados.regiao
         let estadosJson = {}
         estadosJson.uf = estados.sigla
         estadosJson.descricao = estados.nome
         listaDeInfromacoesRegiaoArray.push(estadosJson)
         
         
      }
   })

 
   if(listaDeInfromacoesRegiaoJson == undefined){
      return false
   }else{
      listaDeInfromacoesRegiaoJson.estados = listaDeInfromacoesRegiaoArray
      return listaDeInfromacoesRegiaoJson
   }
 }

 const getCapitalPais = function(){
   let listaCapitaisBrasilJson = {}
   let listaCapitaisArray = []
   let estado = listaBrasil.estadosCidades.estados

   estado.forEach(function(capitais){
      listaCapitaisBrasilJson.capitais = listaCapitaisArray

      if(capitais.capital_pais != undefined){
         let listaInformacoesCapitalJson = {}
      listaInformacoesCapitalJson.capital_atual = capitais.capital_pais.capital
      listaInformacoesCapitalJson.uf = capitais.sigla
      listaInformacoesCapitalJson.descricao = capitais.nome
      listaInformacoesCapitalJson.capital = capitais.capital
      listaInformacoesCapitalJson.regiao = capitais.regiao
      listaInformacoesCapitalJson.capital_pais_ano_inicio = capitais.capital_pais.ano_inicio
      listaInformacoesCapitalJson.capital_pais_ano_termino = capitais.capital_pais.ano_fim
      listaCapitaisArray.push(listaInformacoesCapitalJson)
      }
      
   })
   return listaCapitaisBrasilJson.capitais = listaCapitaisArray
 }

 const getCidades = function(siglaEstado){
    let uf = siglaEstado
    let listaDeInformacoesCidadesJson = {}
    let listaDeInformacoesCidadesArray = []
    let estado = listaBrasil.estadosCidades.estados

    estado.forEach(function(cidades){
       if(uf == cidades.sigla){
      listaDeInformacoesCidadesJson.uf = cidades.sigla
      listaDeInformacoesCidadesJson.descricao = cidades.nome
      listaDeInformacoesCidadesJson.quantidade_cidades = cidades.cidades.length
      cidades.cidades.forEach(function(item){
         listaDeInformacoesCidadesArray.push(item.nome)
      
      })
      
       }
    })
    listaDeInformacoesCidadesJson.cidades = listaDeInformacoesCidadesArray

    return listaDeInformacoesCidadesJson

 }
 console.log(getCidades('AC'))

 



