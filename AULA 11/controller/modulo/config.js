/****************************************************************
 * Objetivo: Arquivo Responsável por padronizar as mensagens de erro e mensagens de sucesso, funções, variáveis para o projeto.
 * Data: 29/04;2023
 * Autor:Vinícius MOnteiro
 * Versão: 1.0
 ****************************************************************/


 //**********************************MENSAGENS DE ERRO**********************************************
 const ERROR_REQUIRED_FIELDS = {
     status: 404, message: 'Por favor, preencha todos os campos obrigaórios'
 }

 const ERROR_INTERNAL_SERVER = {
     status: 500, message: 'Devido ao  um error no servidor não foi possivel realizar a requisição'
 }

 //***********************************MENSAGENS DE SUCESSO*******************************************/

const SUCCESS_CREATED_ITEM = {
    status: 201, message: 'Item criado com sucesso'

} 
 //Exportação

 module.exports = {
     ERROR_REQUIRED_FIELDS,
     SUCCESS_CREATED_ITEM,
     ERROR_INTERNAL_SERVER
 }