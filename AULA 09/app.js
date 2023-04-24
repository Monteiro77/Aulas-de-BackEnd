/*************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 * Data: 10/03/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 *************************************************************************/

/**
 * Express - dependencia para realizar requisições de API  pelo protocolo HTTP
 * 
 *         npm install express --save
 * 
 * Cors - Dependencia para gerenciar permissões de rquisição da API
 * 
 * Body-Parser - dependencia que gerencia o corpo das requisições 
 *         npm install body-parser --save
 * 
 */


//Import das dependencias do projeto
const estadosCidades = require('./modulo/module.js')
//Dependencias para crar as requisicões da API
const express = require('express');
//Dependencia para gereciar aspermições da API
const cors = require('cors');
//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
const { request } = require('http');
const { ESPIPE } = require('constants');
const { report } = require('process');

//Cria um objeto com características do express
const app = express();

app.use((request, response, next) => {

  //API PUBLICA - fica dispoível para utilização de qualquer aplicaçao
  //API PRIVADA - fica disponível apenas para determinado IP

  //Define se a APIserá pública ou privada  
  response.header('Acess-Control-Allow-Origin', '*');

  //Permite definir quais métodos serão usados nas requisições da API 
  response.header('Acess-Control-Aloow-Method', 'GET, POST, PUT, DELETE, OPTIONS');

  //Envia para o cors() a regras de permições 
  app.use(cors());

  next();

})

//EndPoints
//async - estabele uma mensagem de aguarde, assim que eu processar eu te devolvo os dados
// Obs: se eu não usar o async a requisição é perdida, posi o front aha que a API está foa do ar 

app.get('/estados', cors(), async function (request, response, next) {
  //Import do arquio no modulo (funções)
  const estadosCidades = require('./modulo/module.js')

  //Chama a função que vai listar todos os estados
  let estados = estadosCidades.getListaDeEstados()


  //tratamento para lidar  sucesso da requisição
  if (estados) {
    response.status(200)
    response.json(estados)
  } else {
    response.status(500)
  }



})

app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {

  let statusCode
  let dadosEstado = {}
  //Recebe a sigla do estado que será enciada pela URl da requisição
  let siglaEstado =   request.params.uf

  //tratamento para validação de entrada de dados incorreta
  if (siglaEstado == "" || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
    statusCode = 400
    dadosEstado.message = 'Não foi possível acessar pois os dados de entrada (UF) não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisar ser a caracteres e ter 2 dígitos '
  } else {
    //Chama a função para retornar os dados do Estado
    let estado = estadosCidades.getDadosEstado(siglaEstado);

    if (estado) {
      statusCode = 200
      dadosEstado = estado
    } else {
      statusCode = 404
    }
  }
  //retorna o código e o json
  response.status(statusCode)
  response.json(dadosEstado)
})

app.get('/capital/estado/:uf', cors(), async function (request, response, next) {
  let statusCode
  let dadosCapital = {}

  let siglaEstado = request.params.uf

  if (siglaEstado == "" || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
    statusCode = 400
    dadosCapital.message = 'Não foi possível acessar pois os dados de entrada (UF) não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisar ser a caracteres e ter 2 dígitos '
  } else {
    let estado = estadosCidades.getCapitalEstado(siglaEstado)

    if (estado) {
      statusCode = 200
      dadosCapital = estado
    } else {
      statusCode = 404
    }

    response.status(statusCode)
    response.json(dadosCapital)
  }
})

app.get('/regiao/:regiaoNome', cors(), async function (request, response, next) {
  let statusCode
  let dadosRegiao = {}

  let nomeRegiao = request.params.regiaoNome

  if (nomeRegiao == "" || nomeRegiao == undefined || !isNaN(nomeRegiao)) {
    statusCode = 400
    dadosCapital.message = 'Não foi possível acessar pois os dados de entrada (UF) não corresponde ao exigido, confira o valor, pois não pode ser vazio e precisar ser a caracteres'
  } else {
    let regiao = estadosCidades.getEstadosRegiao(nomeRegiao)

    if (regiao) {
      statusCode = 200
      dadosRegiao = regiao
    } else {
      statusCode = 404
    }

    response.status(statusCode)
    response.json(dadosRegiao)
  }

})

app.get('/capitalPais', cors(), async function (request, response, next) {
  let statusCode
  let dadosCapital = {}

  let capital = estadosCidades.getCapitalPais()

  if (capital) {
    statusCode = 200
    dadosCapital = capital
  } else {
    statusCode = 500
  }

  response.status(statusCode)
  response.json(dadosCapital)
})

app.get('/v1/cidades/estado/sigla/:uf', cors(), async function (request, response, next) {
  let statusCode
  let dadosCidade = {}

  let siglaEstado = request.params.uf

  if (siglaEstado == "" || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
    statusCode = 400
    dadosCidade.message = 'Não foi possível acessar pois os dados de entrada (UF) não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisar ser a caracteres e ter 2 dígitos '
  } else {
    let cidade = estadosCidades.getCidades(siglaEstado)

    if (cidade) {
      statusCode = 200
      dadosCidade = cidade
    } else {
      statusCode = 404
    }
  }

  response.status(statusCode)
  response.json(dadosCidade)
                                      
})

app.get('/v2/cidades', cors(), async function (request, response, next) {

  /** 
   * Existem 2 opções para receber variáveis para filtro:
   * 
   *      params - que permite receber a variável na estrutura da URL
   *        criada no EndPoint (geralmente utilizado para ID (PK) )
   * 
   *      query - tambem conhecido como QueryString - 
   *          que permite receber uma ou muitas variáveis 
   *            para realizar filtros avançado
   * */ 


  let dadosCidade = {}
  let statusCode
  //recebe uma variável encaminhadan via QueryString
  let siglaEstado = request.query.uf; 


  if (siglaEstado == "" || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
    statusCode = 400
    dadosCidade.message = 'Não foi possível acessar pois os dados de entrada (UF) não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisar ser a caracteres e ter 2 dígitos '
  } else {
    let cidades = estadosCidades.getCidades(siglaEstado)

    if (cidades) {
      statusCode = 200
      dadosCidade = cidade
    } else {
      statusCode = 404
    }
  }

  response.status(statusCode)
  response.json(dadosCidade)
                                      
})

app.listen(8080, function () {
  console.log('SERVIDOR AGUARDANDO REQUISIÇÕES NA PORTA 8080.')
})