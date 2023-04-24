/**********************************************
 * Objetvivo: Responsable to manipulate the students datas into dataBase
 * Data: 14/04/2023
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 * ********************************************/

 //Insert student data into DB
 const inserirStudent = function(){

 }

  //Update student data into DB
  const atualizarStudent = function(StudentData){

}

 //Delete student data into DB
 const deletarStudent = function(id){

}

 //Select student data into DB
 const selecionarTodosStudents = async function(){
   //Impot da biblioteca PRISMA CLIENT 
  let { PrismaClient } = require('@prisma/client')

  //instancia da clsaa prisma client
  let prisma = new PrismaClient()
  
  //script sql para buscar todos os itens no banco de dados
  let sql = 'select * from tbl_aluno' 
  

  //$queryRawUnsafe() - permite intepreta uma variáel como sendo um scriptSQL
  //$queryRaw(select * from tbl_aluno)   - Permite intepretar o scriptSQL direto no método
  let rsALuno = await prisma.$queryRawUnsafe(sql)


  //valida se o banco de dados retorno algum registro
  if(rsALuno.length > 0)
    return rsALuno
  else
    return false
 


}

//Return the Student by id
const selecionePeloIdStudent = async function(id){
  let idAluno = id

  let { PrismaClient} = require('@prisma/client')

  let prisma = new PrismaClient()

  let sql = 'select * from tbl_aluno where id = ' + idAluno

  let rsAluno = await prisma.$queryRawUnsafe(sql)

  if(rsAluno.length > 0)
    return rsAluno
  else
    return false    
}

const selecionePeloNomeStudent = async function(nome){
  let nomeAluno = nome

  let { PrismaClient} = require('@prisma/client')
  let prisma = new PrismaClient()
  let sql = "select * from tbl_aluno where nome like " + `'${nomeAluno}%'`

  let rsAluno = await prisma.$queryRawUnsafe(sql)

  if(rsAluno > 0)
    return rsAluno
  else
    return false  


}

module.exports = {
  selecionarTodosStudents,
  selecionePeloIdStudent,
  selecionePeloNomeStudent
}