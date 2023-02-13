/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
 * universidade
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/


//Import da biblioteca getMedia

var calculadora = require('./modulo/escola.js')

//Import da biblioteca da entrada de Dados
var readline = require('readline');


//Cria um objeto para  manipular a entrada de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite seu nome: ', function (alunoNome) {

    let nomeAluno = alunoNome

    console.log('1- Masculino')
    console.log('2- Femino')
    entradaDados.question('Escolha o gênero: \n', function (generoAluno) {

        let alunogenero = generoAluno

        entradaDados.question('Disciplina: ', function (disciplina) {
            let disciplinaAluno = disciplina

            entradaDados.question('Curso: ', function (cursoAluno) {
                let curso = cursoAluno

                entradaDados.question('Nome do(a) Professor(a) :', function (professorNome) {
                    let nomeProfessor = professorNome

                    console.log('1- Masculino')
                    console.log('2- Feminino')
                    entradaDados.question('Gênero do(a) Professor(a): ', function (professorGenero) {

                        let generoProfessor = professorGenero

                        entradaDados.question('Nota do primeiro bismestre (Use de 0 a 100): ', function (primeiraNota) {
                            let nota1 = primeiraNota

                            entradaDados.question('Nota do segundo bimestre (Use de 0 a 100): ', function (segundaNota) {
                                let nota2 = segundaNota

                                entradaDados.question('Nota do terceiro bimestre (Use de 0 a 100): ', function (terceiraNota) {
                                    let nota3 = terceiraNota

                                    entradaDados.question('Nota do quarto bimestre (Use de 0 a 100): ', function (quartaNota) {
                                        let nota4 = quartaNota

                                        //Tratamento de dados
                                        if( !isNaN(alunoNome) || !isNaN(disciplinaAluno) || !isNaN(curso) || !isNaN(professorNome) ){
                                            console.log('ERROR: Não digitou números em algum campo onde não era necessário')

                                        }else if (nomeAluno == '' || alunogenero == '' || disciplinaAluno == '' || cursoAluno == '' || nomeProfessor == '' || generoProfessor == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('ERROR: Você deixou algum dados em branco')
                                            entradaDados.close()
                                        } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                                            console.log('ERRO: Alguma das notas possui letras!')
                                            entradaDados.close()
                                        } else {
                                            media = calculadora.getMedia(nota1, nota2, nota3, nota4)
                                            if (media >= 70 && media <= 100) {
                                                console.log('**************************RELATÓRIO DO ALUNO***********************************')
                                                console.log('O(A) aluno(a) ' + nomeAluno + ' foi aprovado na disciplina ' + disciplinaAluno)
                                                console.log('Curso: ' + curso)
                                                console.log('Professor(a): ' + nomeProfessor)
                                                console.log('Notas do aluno(a): ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4)
                                                console.log('Media Final: ' + media)
                                                console.log('*******************************************************************************') 
                                                entradaDados.close()
                                            }else if(media >= 50 && media <= 69){
                                                console.log('Sua média é: ' + media)
                                                entradaDados.question('Digite a nota do seu exame: ', function(notaExame){
                                                    let exameNota = notaExame
                                                    mediaExame = calculadora.getExame(nota1, nota2, nota3, nota4, exameNota)
                                                    if(mediaExame >= 60 && mediaExame <= 100){
                                                        console.log('**************************RELATÓRIO DO ALUNO***********************************')
                                                    console.log('O(A) aluno(a) ' + nomeAluno + ' foi aprovado na disciplina ' + disciplinaAluno)
                                                    console.log('Curso: ' + curso)
                                                    console.log('Professor(a): ' + nomeProfessor)
                                                    console.log('Notas do aluno(a): ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + notaExame)
                                                    console.log('Media Final: ' + media)
                                                    console.log('Nota Exame: ' + exameNota)
                                                    console.log('Media Final do Exame: ' + mediaExame)
                                                    console.log('*******************************************************************************') 
                                                    }else if(mediaExame <= 60 && mediaExame >= 0){
                                                        console.log('**************************RELATÓRIO DO ALUNO***********************************')
                                                    console.log('O(A) aluno(a) ' + nomeAluno + ' foi reprovado na disciplina ' + disciplinaAluno)
                                                    console.log('Curso: ' + curso)
                                                    console.log('Professor(a): ' + nomeProfessor)
                                                    console.log('Notas do aluno(a): ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + ',' + notaExame)
                                                    console.log('Media Final: ' + media)
                                                    console.log('Nota Exame: ' + exameNota)
                                                    console.log('Media Final do Exame: ' + mediaExame)
                                                    console.log('*******************************************************************************') 
                                                    }
                                                })
                                                
                                            }else if(media < 50 && media >=  0){
                                                console.log('**************************RELATÓRIO DO ALUNO***********************************')
                                                console.log('O(A) aluno(a) ' + nomeAluno + ' foi reprovado na disciplina ' + disciplinaAluno)
                                                console.log('Curso: ' + curso)
                                                console.log('Professor(a): ' + nomeProfessor)
                                                console.log('Notas do aluno(a): ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4)
                                                console.log('Media Final: ' + media)
                                                console.log('*******************************************************************************') 
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})
