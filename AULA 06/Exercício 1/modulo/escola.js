/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
 * universidade
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/



const getMedia = function (nota1, nota2, nota3, nota4, nomeAluno, nomeProfessor, disciplina, generoAluno, generoProfessor, cursoaluno) {

    let primeiraNota = Number(String(nota1).replace(',', '.'))
    let segundaNota = Number(String(nota2).replace(',', '.'))
    let terceiraNota = Number(String(nota3).replace(',', '.'))
    let quartaNota = Number(String(nota4).replace(',', '.'))
    let alunoNome = nomeAluno
    let professorNome = nomeProfessor
    let materia = disciplina
    let sexoAluno = generoAluno
    let sexoProfessor = generoProfessor
    let curso = cursoaluno
    

    let notaExame




    if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 || quartaNota < 0 || quartaNota > 100)
        console.log('ERROR: Algumas das notas digitadas são maiores que 100 ou menores que 0')
    else {
        let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4
        if (media < 50) {
            console.log('Sua média é: ' + media)
            console.log('STATUS: REPROVADO')
        } else if (media > 50 && media < 70) {
            console.log('Sua média é: ' + media)
            console.log('STATUS: EXAME')
            
        } else {
            console.log('Sua média é: ' + media)
            console.log('STATUS APROVADO')
        }
    }


}

module.exports = {
    getMedia
}