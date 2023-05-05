/**********************************************
 * Objetvivo: Responsable to manipulate the students datas into dataBase
 * Data: 14/04/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ********************************************/
//Impot da biblioteca PRISMA CLIENT 
const { PrismaClient } = require('@prisma/client')

//instancia da clsaa prisma client
const prisma = new PrismaClient()

//Insert student data into DB
const inserirStudent = async function (dadosAluno) {
  let sql = `insert into tbl_aluno (
                    nome,
                    rg,
                    cpf,
                    data_nascimento,
                    email
                    ) values (
                    '${dadosAluno.nome}',
                    '${dadosAluno.rg}',
                    '${dadosAluno.cpf}',
                    '${dadosAluno.data_nascimento}',
                    '${dadosAluno.email}'
                    )`;

  //Executa o script sql no banco de dados
  let resultStatus = await prisma.$executeRawUnsafe(sql)                  
  
  if(resultStatus)
    return true
  else 
    return false
                      
}

//Update student data into DB
const atualizarStudent = async function (dadosAluno) {

  let sql = `update tbl_aluno set
                  nome = '${dadosAluno.nome}',
                  rg = '${dadosAluno.rg}',
                  cpf = '${dadosAluno.cpf}',
                  data_nascimento = '${dadosAluno.data_nascimento}',
                  email = '${dadosAluno.email}'
                  
                where id = ${dadosAluno.id}`;

  let resultStatus = await prisma.$executeRawUnsafe(sql)

  if(resultStatus)
    return true
  else
    return false
  
}

//Delete student data into DB
const deletarStudent = async function (id) {

  let sql = `delete from tbl_aluno where id = ${id}`

  let resultStatus = await prisma.$queryRawUnsafe(sql)

  if(resultStatus)
    return true
  else
    return false

}

//Select student data into DB
const selecionarTodosStudents = async function () {

  //script sql para buscar todos os itens no banco de dados
  let sql = 'select * from tbl_aluno'


  //$queryRawUnsafe() - permite intepreta uma variáel como sendo um scriptSQL
  //$queryRaw(select * from tbl_aluno)   - Permite intepretar o scriptSQL direto no método
  let rsALuno = await prisma.$queryRawUnsafe(sql)


  //valida se o banco de dados retorno algum registro
  if (rsALuno.length > 0)
    return rsALuno
  else
    return false



}

//Return the Student by id
const selecionePeloIdStudent = async function (id) {
  

  let sql = 'select * from tbl_aluno where id = ' + id

  let rsAluno = await prisma.$queryRawUnsafe(sql)

  if (rsAluno.length > 0)
    return rsAluno
  else
    return false
}

const selecionePeloNomeStudent = async function (nome) {
  let nomeAluno = nome

  let sql = `select * from tbl_aluno where nome like '${nome}%' ` 

  

  let rsAluno = await prisma.$queryRawUnsafe(sql)

  if (rsAluno.length > 0)
    return rsAluno
  else
    return false


}

module.exports = {
  selecionarTodosStudents,
  selecionePeloIdStudent,
  selecionePeloNomeStudent,
  inserirStudent,
  atualizarStudent,
  deletarStudent
}