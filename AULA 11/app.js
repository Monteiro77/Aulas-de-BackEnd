/********************************************************************************************
 * Objetivo: API para iintegração entre Back e Banco de Dados  (GET, POST , PUT, DELETE)
 * Data: 14/04/23
 * Autor: Viníciu Monteiro
 * Version: 1.0
 **********************************************************************************************/


//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parse')
const { request, response } = require('express')

//Cria o objeto app
const app = express()

app.use((request, response, next) => {

    //define quem podera usar a API - TODOS
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais metodos serão utilizados na API
    response.header('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})

/**********************************************
 * Objetvivo: API DE CONTROLE DE ALUNOS
 * Data: 14/04/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ********************************************/

    //EndPoint: retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function () {

    })

    //EndPoint: retorna todos os dados de alunos filtrando pelo id
    app.get('/v1/lion-school/aluno/:id', cors(), async, function () {

    })

    //EndPoint: Insere um dado novo todos os dados de alunos
    app.post('/v1/lion-school/aluno', cors(), async, function () {

    })

    //EndPoint: atualiza um aluno existe, filtrando pelo id
    app.put('/v1/lion-school/aluno/:id', cors(), async, function () {

    })

    //EndPoint: exclui um aluno filtrando pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function () {

    })


app.listen(8080, function(){
    console.log('AGUARDANDO REQUISIÇÕES NA PORTA 8080')
    
})    