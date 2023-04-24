/**********************************************
 * Objetvivo: Responsável pela a regra de nogocios refrente a CRUD de ALUNOS
 * Data: 14/04/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ********************************************/


 //Just in english

 //Insert a new studant
 const newStudent = function(studentData){

 }

 //Update an existing student 
 const updateStudent = function(studentData){

 }

 //Delete an existing student
 const deleteStudent = function(id){

 }

 //Return the all students list
 const getStudents = async function(){
    let dadosAlunoJson = {}

    //import do DAO para acessar dados do aluno do BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')
    //chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAluno = await alunoDAO.selecionarTodosStudents()

    

    if(dadosAluno){
        //Criando um Jdon com atrbutos alunos para encaminhar um array de alunos
        dadosAlunoJson.quantidade = dadosAluno.length         
        dadosAlunoJson.alunos = dadosAluno
        return dadosAlunoJson
    }else{
        return false
    }
 }

 //Return the student by the id
 const findStudentId = async function(id){

    let idAluno = id
    let dadosAlunoJson = {}

    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno =  await alunoDAO.selecionePeloIdStudent(idAluno)
    
    if(dadosAluno){
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    }else{
        return false
    }
 }

 const findStudentByName = async function(nome){

    let nomeAluno = nome.toString()
    let dadosAlunoJson = {}

    let alunoDao = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDao.selecionePeloNomeStudent(nomeAluno)

    if(dadosAluno){
        dadosAlunoJson.quantidade = dadosAluno.length
        dadosAlunoJson.alunos = dadosAluno
    }else{
        return false
    }

 }


 module.exports = {
     getStudents,
     findStudentId,
     findStudentByName
 }
