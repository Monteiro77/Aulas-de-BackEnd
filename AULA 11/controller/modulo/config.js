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

 const ERROR_INVALID_ID = {
     status: 400, message: 'O ID informado a requisição não é valido ou não foi encaminhado'
 }

 const ERROR_INVALID_CONTENT_TYPE = {
     status: 415, message: 'O tipo de mídia Content-typeda solicitação não é compatível com o servidor. [application/json]'
 }

 const ERROR_NONEXISTENT_ID = {
     status: 404, message: 'O servidor não pode encontrar o recurso(ID) solicitado.'
 }

 const ERROR_NOT_FOUND = {
     status: 404, message: 'Objeto não encontrado'
 }














 //***********************************MENSAGENS DE SUCESSO*******************************************/

const SUCCESS_CREATED_ITEM = {
    status: 201, message: 'Item criado com sucesso'
} 

const SUCCESS_UPDATED_ITEM = {
    status: 200, message: 'Item atualizado com sucesso'
}

const SUCESS_DELETED_ITEM = {
    status: 200, message: 'Item deletado com sucesso'
}

const SUCCESS_REQUEST = {
    status: 200, message: 'Requisição bem sucedida'
}
 //Exportação

 module.exports = {
     ERROR_REQUIRED_FIELDS,
     SUCCESS_CREATED_ITEM,
     ERROR_INTERNAL_SERVER,
     ERROR_INVALID_ID,
     SUCCESS_UPDATED_ITEM,
     ERROR_INVALID_CONTENT_TYPE,
     SUCESS_DELETED_ITEM,
     ERROR_NONEXISTENT_ID,
     SUCCESS_REQUEST,
     ERROR_NOT_FOUND
 }