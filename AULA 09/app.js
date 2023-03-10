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
  //Dependencias para crar as requisicões da API
  const express = require('express');
  //Dependencia para gereciar aspermições da API
  const cors = require('cors');
  //Dependencia para gerenciar o corpo das requisições da API
  const bodyParser = require('body-parser');
  const { request } = require('http');

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
  app.get('/estados', cors(), async function(request, response, next){

  })




