/*************************************************************************************
 * Objetivo: Calcular a média de quatro notas escolares
 * Autor: Vinícius Monteiro Araújo
 * Data : 27/01/2023
 * Versão: 1.0
 *************************************************************************************/

 //import da bibliotea readline
 var readline = require('readline');

 // Cria o objeto para ser especialista em entrada de dados pelo teclado
 var entradaDados = readline.createInterface({
     input : process.stdin,
     output : process.stdout
 })

 /**
  * Criação de variável 
    *var = escopo Global, essa variável poderá ser usada em qualquer parte do arquivo (várias funções)
    *let = escopo local, essa variável somente poderá ser ultilizada dentro da função que foi criada
    *const - o valor da const não sofre alteração, ou seja, ele tem uma valor pré definido
        *pode ter escopo local e global, dependendo da ocasião
  * 
  * 
  */

  //Função de Callback para entrar o nome do Aluno
 entradaDados.question('Digite seu nome: \n', function(nome){
    //recebe o valor digitado pelo teclado

    let nomeAluno = nome;
    
    //Função de CallBack para entrar a primeira nota do aluno
    entradaDados.question('Digite a nota do primeiro bimestre: \n', function(nota1){
        let valor1 = nota1;
   
        entradaDados.question('Digite a nota do segundo bimestre: \n', function(nota2){
            let valor2 = nota2;
            
            entradaDados.question('Digite a nota do terceiro bimestre: \n', function(nota3){
                let valor3 = nota3;
                
                entradaDados.question('Digite a nota do quarto bimestre: \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /**
                     * Coversão de tipos de dados
                     * ParseInt() - converte uma string em inteiro
                     * ParseFloat() - converte uma string em real
                     * Number.parseint - Converte string em inteiro
                     * Number.parseFloat - Converte string em real         
                     * Number - Converte uma string tanto em real como em inteiro  
                     * 
                     * 
                     * 
                     * 
                     * Operadores de compração
                     *
                     * ==(Igual)
                     * !=(diferente)
                     * <=(menor igual)
                     * >=(maior igual)
                     * <(menor)
                     * >(maior)
                     * ===(igualdade entre conteudos e o tipo de dados)
                     * Ex: 0 === 0 V
                     * 0 == 0 V
                     * 0 == "0" V
                     * "0" == 0 V
                     * "0" === 0 F
                     * ==!(Igualdade entre os conteudos e tipos de dados diferentes)
                     * !==(Diferença entre os conteúdos e tipo de dados iguais)
                     * 
                     * E && AND
                     * OU || OR
                     * NEGAÇÃO | NOT
                     */

                     
                    // validação para entrada vazia    
                     if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                         console.log('ERROR: Alguma nota esta faltando');
                         
                         //validação para entrada de texto 
                     }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERROR: você digitou alguma letra!');
                        //validação para numeros maior que 10   
                     }else if(valor1 >= 10 || valor2 >= 10 || valor3 >= 10 || valor4 >= 10){
                         console.log('ERROR:você colocou uma nota maior que 10 em algumas das notas');
                        
                     }else{
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4))/4;
                        console.log('A media do aluno ' + nomeAluno + ' é ' + media);
                     }


                    
                    
                    

                });
            });
        });            
    });
 });  