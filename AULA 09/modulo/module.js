/********************************************************
 * Objetivo: Criar funções que modulam o arquivo json
 * Data: 03/03/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 *********************************************************/


//import do arquivo JSON
var listaBrasil = require('./estados_cidades.js')



const getListaDeEstados = function () {

   let listaDeSiglasArray = []

   listaBrasil.estadosCidades.estados.forEach(function (estados) {
      listaDeSiglasArray.push(estados.sigla)
   })

   let listaDeSiglasJson = { UF: listaDeSiglasArray, Quantidade: listaDeSiglasArray.length }

   return listaDeSiglasJson
}


const getDadosEstado = function (siglaEstado) {

   let uf = siglaEstado.toUpperCase()
   let estado = listaBrasil.estadosCidades.estados
   let listaDeInformacoesEstado
   let status

   if (uf == "") {
      return false
   } else {


      estado.forEach(function (estados) {
         if (estados.sigla == uf) {
            listaDeInformacoesEstado = {
               uf: estados.sigla,
               descricao: estados.nome,
               capital: estados.capital,
               regiao: estados.regiao
            }

            status = true

         }
      })


      if (status) {
         return listaDeInformacoesEstado
      } else {
         return false
      }
   }

}


const getCapitalEstado = function (siglaEstado) {
   let uf = siglaEstado.toUpperCase()
   let estado = listaBrasil.estadosCidades.estados
   let listaDeInformacoesEstado
   let status

   if (uf == "") {
      return false
   } else {
      estado.forEach(function (estados) {
         if (estados.sigla == uf) {
            listaDeInformacoesEstado = {
               uf: estados.sigla,
               descricao: estados.nome,
               capital: estados.capital
            }
            status = true
         }
      })

      if (status) {
         return listaDeInformacoesEstado
      } else {
         return false
      }
   }


}

const getEstadosRegiao = function (regiao) {

   let estado = listaBrasil.estadosCidades.estados
   let listaDeInfromacoesRegiaoJson = {}
   let listaDeInfromacoesRegiaoArray = []
   let status

   if (regiao == "") {
      return false
   } else {

      estado.forEach(function (estados) {
         if (estados.regiao == regiao) {

            listaDeInfromacoesRegiaoJson.regiao = estados.regiao
            let estadosJson = {}
            estadosJson.uf = estados.sigla
            estadosJson.descricao = estados.nome
            listaDeInfromacoesRegiaoArray.push(estadosJson)


         }
         status = true
      })


      if (status) {
         listaDeInfromacoesRegiaoJson.estados = listaDeInfromacoesRegiaoArray
         return listaDeInfromacoesRegiaoJson
      } else {
         return false
      }
   }
}

const getCapitalPais = function () {
   let listaCapitaisBrasilJson = {}
   let listaCapitaisArray = []
   let estado = listaBrasil.estadosCidades.estados
   let status

   estado.forEach(function (capitais) {
      listaCapitaisBrasilJson.capitais = listaCapitaisArray

      if (capitais.capital_pais != undefined) {
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
      status = true

   })
   if (status) {
      return listaCapitaisBrasilJson.capitais = listaCapitaisArray
   } else {
      return false
   }

}

const getCidades = function (siglaEstado) {
   let uf = siglaEstado.toUpperCase()
   let listaDeInformacoesCidadesJson = {}
   let listaDeInformacoesCidadesArray = []
   let estado = listaBrasil.estadosCidades.estados
   let status

   if (uf == "") {
      return false
   } else {
      estado.forEach(function (cidades) {
         if (cidades.sigla == uf) {
            listaDeInformacoesCidadesJson.uf = cidades.sigla
            listaDeInformacoesCidadesJson.descricao = cidades.nome
            listaDeInformacoesCidadesJson.quantidade_cidades = cidades.cidades.length
            cidades.cidades.forEach(function (item) {
               listaDeInformacoesCidadesArray.push(item.nome)

            })
          
         }
         status = true
      })
      listaDeInformacoesCidadesJson.cidades = listaDeInformacoesCidadesArray
      if (status) {
         
         return listaDeInformacoesCidadesJson
      } else {
         return false
      }

   }


}


module.exports = {
   getCapitalEstado,
   getCapitalPais,
   getCidades,
   getDadosEstado,
   getEstadosRegiao,
   getListaDeEstados
}




