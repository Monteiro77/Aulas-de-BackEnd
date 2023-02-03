/********************************************************************
 * Objetivo : Criar projeto para realizar calculos matemáticos
 * Data : 03/02/2023
 * Autor: Vinícius Monteiro
 * versão: 1.0
 ********************************************************************/

 //import da biblioteca calculadora
 var matematica = require('./modulo/calculadora.js');

 //Import da biblioteca da entrada de Dados
 var readline = require ('readline');

 //Cria um objeto para  manipular a entrada de dados
 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

 });


 //valor 1
 entradaDados.question('valor: \n', function(numero1){

    let valor1 = numero1.replace(',','.')
    let resultado

    // valor 2
    entradaDados.question('valor 2 : \n', function(numero2){

        let valor2 = numero2.replace(',','.')

        //operação
        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function(tipoCalculo){

            let operacao = tipoCalculo.toUpperCase();

            //validação de entrada de dado vazio
            if (valor1 == " " || valor2 == " " || operacao == ""){
                console.log('ERROR: Não é possivel calcular se algum dado estiver em branco, tente novamente.')
                entradaDados.close();
            //validaçãopara entrada de erros numéricos
            }else if(isNaN(valor1) || isNaN(valor2)){
                console.log('ERROR: Não é possivel calcular se os dados digitados não forem numeros, tente novamente.')
                entradaDados.close();
            }else{
                resultado = matematica.calculadora(valor1, valor2, operacao);

                if (resultado != false){
                    console.log(resultado)
                }
                entradaDados.close();
            }

            // typeof() = identifica o tipo de dados desse elemento
            // IsNaN = identifica o tipo de conteúdo independete do tipo de dados
            // substring, length, replace, upercase, lowercase, indexof , trim


            
        })
    })

 })