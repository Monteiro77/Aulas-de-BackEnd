/**********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
 * universidade
 * Data: 10/02/2023
 * Autor: Vinícius Mmonteiro Araújo
 * Versão: 1.0
 **********************************************************************************/


//Import da biblioteca getMedia

var calculadora = require ('./modulo/escola.js')

//Import da biblioteca da entrada de Dados
var readline = require ('readline');


//Cria um objeto para  manipular a entrada de dados
var entradaDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout

});

entradaDados.question('Digite seu nome: ', function(alunoNome) {

    let nomeAluno = alunoNome

    entradaDados.question('Gênero: ', function(generoAluno){
        let alunogenero = generoAluno.toUpperCase()

        entradaDados.question('Disciplina: ', function(disciplina){
            let disciplinaAluno = disciplina

            entradaDados.question('Curso: ', function(cursoAluno){
                let curso = cursoAluno

                entradaDados.question('Nome do(a) Professor(a) :', function(professorNome){
                    let nomeProfessor = professorNome

                    entradaDados.question('Gênero do(a) Professor(a): ', function(professorGenero){
                        let generoProfessor = professorGenero.toUpperCase()

                        entradaDados.question('Nota do primeiro bismestre (Use de 0 a 100): ', function(primeiraNota){
                            let nota1 = primeiraNota

                            entradaDados.question('Nota do segundo bimestre (Use de 0 a 100): ', function(segundaNota){
                                let nota2 = segundaNota

                                entradaDados.question('Nota do terceiro bimestre (Use de 0 a 100): ', function(terceiraNota){
                                    let nota3 = terceiraNota

                                    entradaDados.question('Nota do quarto bimestre (Use de 0 a 100): ', function(quartaNota){
                                        let nota4 = quartaNota

                                        //Tratamento de dados em branco
                                        if(nomeAluno == '' || alunogenero == '' || disciplinaAluno == '' || cursoAluno == '' || nomeProfessor == '' || generoProfessor == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                                        console.log('ERROR: Você deixou algum dados em branco')
                                        entradaDados.close()
                                        }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)){
                                            console.log('ERRO: Algumas da notas possui letras!')
                                            entradaDados.close()    
                                        }else{
                                            media = calculadora.getMedia(nota1,nota2,nota3,nota4)
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
