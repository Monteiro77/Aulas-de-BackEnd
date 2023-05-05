/**********************************************
 * Objetvivo: Responsável pela a regra de nogocios refrente a CRUD de ALUNOS
 * Data: 14/04/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ********************************************/

var messages = require('./modulo/config.js')
let alunoDAO = require('../model/DAO/alunoDAO.js')

//Just in english

//Insert a new studant
const newStudent = async function (studentData) {



    if (studentData.nome == "" || studentData.nome == undefined || studentData.nome.length > 100 ||
        studentData.rg == "" || studentData.rg == undefined || studentData.rg.length > 15 ||
        studentData.cpf == "" || studentData.cpf == undefined || studentData.cpf.length > 18 ||
        studentData.data_nascimento == "" || studentData.data_nascimento == undefined || studentData.data_nascimento > 15 ||
        studentData.email == "" || studentData.email == undefined || studentData.email > 200
    ) {
        return messages.ERROR_REQUIRED_FIELDS
    } else {
        let resultStudentData = await alunoDAO.inserirStudent(studentData)
        if (resultStudentData)
            return messages.SUCCESS_CREATED_ITEM
        else
            return messages.ERROR_INTERNAL_SERVER
    }
}

//Update an existing student 
const updateStudent = async function (studentData, idStudent) {

    if (studentData.nome == "" || studentData.nome == undefined || studentData.nome.length > 100 ||
        studentData.rg == "" || studentData.rg == undefined || studentData.rg.length > 15 ||
        studentData.cpf == "" || studentData.cpf == undefined || studentData.cpf.length > 18 ||
        studentData.data_nascimento == "" || studentData.data_nascimento == undefined || studentData.data_nascimento > 15 ||
        studentData.email == "" || studentData.email == undefined || studentData.email > 200
    ) {
        return messages.ERROR_REQUIRED_FIELDS
    }
    else if (idStudent == '' || idStudent == undefined || isNaN(idStudent)) {
        return messages.ERROR_INVALID_ID
    } else {
        studentData.id = idStudent

        let resultStudentData = await alunoDAO.atualizarStudent(studentData)

        if (resultStudentData)
            return messages.SUCCESS_UPDATED_ITEM
        else
            return messages.ERROR_INTERNAL_SERVER


    }
}

//Delete an existing student
const deleteStudent = async function (idStudent) {

    if (idStudent == '' || idStudent == undefined || isNaN(idStudent)) {
        return messages.ERROR_INVALID_ID
    } else {
        let findStudentById = await alunoDAO.selecionePeloIdStudent(idStudent)

        if (findStudentById) {
            let resultStudentId = await alunoDAO.deletarStudent(idStudent)

            if (resultStudentId)
                return messages.SUCESS_DELETED_ITEM
            else
                return messages.ERROR_INVALID_ID
        }else{
            return messages.ERROR_NONEXISTENT_ID
        }
    }
}

//Return all students list
const getStudents = async function () {
    let studentDataJson = {}

    //import do DAO para acessar dados do aluno do BD

    //chama a função do arquivo DAO que irá retornar todos os registros do DB
    let studentData = await alunoDAO.selecionarTodosStudents()



    if (studentData) {
        //Criando um Jdon com atrbutos alunos para encaminhar um array de alunos
        studentDataJson.quantidade = studentData.length
        studentDataJson.alunos = studentData
        return studentDataJson
    } else {
        return false
    }
}

//Return the student by the id
const findStudentId = async function (id) {

    let idAluno = id
    let studentDataJson = {}

    let studentData = await alunoDAO.selecionePeloIdStudent(idAluno)

    if (studentData) {
        studentDataJson.aluno = studentData
        return studentDataJson
    } else {
        return messages.ERROR_NONEXISTENT_ID
    }
}

const findStudentByName = async function (nome) {

    let nomeAluno = nome
    let studentDataJson = {}

    let studentData = await alunoDAO.selecionePeloNomeStudent(nome)


    if (studentData) {
        studentDataJson.quantidade = studentData.length
        studentDataJson.alunos = studentData
        return studentDataJson
    } else {
        return false
    }

}


module.exports = {
    getStudents,
    findStudentId,
    findStudentByName,
    newStudent,
    updateStudent,
    deleteStudent
}
