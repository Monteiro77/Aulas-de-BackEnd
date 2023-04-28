/********************************************************************************************
 * Objetivo: API para iintegração entre Back e Banco de Dados  (GET, POST , PUT, DELETE)
 * Data: 14/04/23
 * Autor: Viníciu Monteiro
 * Version: 1.0
 **********************************************************************************************/

    /** Comando para instalação do PRISMA no projeto (biblioteca para conexão com BD)
     *  npm install prisma --save
     * 
     *  npx prisma
     * 
     *  npx pisma init 
     *  
     *  npm install @prisma/client --save
     * 
     * npx prisma migrate dev
     */


//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')




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


    //Define que os dados que irão chegar da requisição será no pradrão JSON
    const bodyParserJSON = bodyParser.json()
    let controllerAluno = require('./controller/controller_aluno.js')

    //EndPoint: retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
        
        let dadosAluno = await controllerAluno.getStudents()


        1//Valida se existe registros de aluno
        if(dadosAluno){
            response.json(dadosAluno)
            response.status(200)
        }else{
            response.json('')
            response.status(404)
        }            
    })

    //EndPoint: retorna todos os dados de alunos filtrando pelo id
    app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

        let idAluno = request.params.id;

        let dadosAluno = await controllerAluno.findStudentId(idAluno)

        if(dadosAluno){
            response.json(dadosAluno)
            response.status(200)
        }else{
            response.json('')
            response.status(404)
        }

    })

     //EndPoint: retorna todos os dados de alunos filtrando pelo id
     app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {

        let nomeAluno = request.params.nome;


        let dadosAluno = await controllerAluno.findStudentByName(nomeAluno)

        if(dadosAluno){
            response.status(200)
            response.json(dadosAluno)
        }else{
            response.status(404)
            response.json('')
        }

    })

    //EndPoint: Insere um dado novo todos os dados de alunos
    app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {
        
        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.newStudent(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)


    })

    //EndPoint: atualiza um aluno existe, filtrando pelo id
    app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })

    //EndPoint: exclui um aluno filtrando pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })


    app.listen(8080, function(){
    console.log('AGUARDANDO REQUISIÇÕES NA PORTA 8080')
    
    })    