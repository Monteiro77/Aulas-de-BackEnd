/******************************
 * Objetivo: criar uma calculadora 
 * Autor: Vinícius Monteiro
 * Data: 30/01/2023
 * Versão: 1.0
 **********************************************************/

var readline = require('readline');


var entradaDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout

})

console.log(' 1- Adição')
console.log(' 2- Subtração')
console.log(' 3- Multiplicação')
console.log(' 4- Divisão')
console.log('\n')

entradaDados.question('Olá seja bem vindo a Calculadora mágica! Por favor selecione o a operação: ', function (operacao) {
   //Tratamento de dados 
   if (isNaN(operacao) || operacao < 1 || operacao > 4) {
      console.log('ERROR : Digite um numero de 1 a 4')
   }


   //Operações

   //ADIÇÃO
   if (operacao == 1) {
      entradaDados.question('Você selecionou Adição, digite o primeiro valor: ', function (valor1) {
         let numero1 = valor1.replace(',', '.');
         entradaDados.question('Digite o proximo numero: ', function (valor2) {
            let numero2 = valor2.replace(',', '.');
            let adicao;

            adicao = Number(numero1) + Number(numero2);
            if (numero1 == '' || numero2 == '') {
               console.log('ERROR: Você deixou algum numero em branco')
               entradaDados.close();
            } else if (isNaN(numero1) || isNaN(numero2)) {
               console.log('ERROR: não é possivel somar com letras')
               entradaDados.close();
            } else {
               console.log(adicao);
            }

         })
      });

      //SUBTRAÇÃO
   } else if (operacao == 2) {
      entradaDados.question('Você selecionou subtração, digite o primeiro valor: ', function (valor1) {
         let numero1 = valor1.replace(',', '.')
         entradaDados.question('Digite o proximo numero: ', function (valor2) {
            let numero2 = valor2.replace(',', '.')
            let subtracao;

            subtracao = Number(numero1) - Number(numero2);
            if (numero1 == '' || numero2 == '') {
               console.log('ERROR: Você deixou algum numero em branco')
               entradaDados.close();
            } else if (isNaN(numero1) || isNaN(numero2)) {
               console.log('ERROR : Não é possivel subtrair com letras!')
               entradaDados.close();
            } else {
               console.log(subtracao);
            }
         })
      })

      //MULTILICAÇÃO
   } else if (operacao == 3) {
      entradaDados.question('Você selecionou multiplicação, digite o primeiro valor: ', function (valor1) {
         let numero1 = valor1.replace(',', '.')
         entradaDados.question('Digite o proximo numero: ', function (valor2) {
            let numero2 = valor2.replace(',', '.')
            let multiplicacao;

            multiplicacao = Number(numero1) * Number(numero2);
            if (numero1 == '' || numero2 == '') {
               console.log('ERROR: Você deixou algum numero em branco')
               entradaDados.close();
            } else if (isNaN(numero1) || isNaN(numero2)) {
               console.log('ERROR : Não é possivel multiplicar com letras!')
               entradaDados.close();
            } else {
               console.log(multiplicacao);
            }

         })
      })
      //DIVISÃO
   } else if (operacao == 4) {
      entradaDados.question('Você selecionou divisão, digite o primeiro valor: ', function (valor1) {
         let numero1 = valor1.replace(',', '.')
         entradaDados.question('Digite o proximo numero: ', function (valor2) {
            let numero2 = valor2.replace(',', '.')
            let divisao;

            divisao = Number(numero1) / Number(numero2);

            if (numero1 == '' || numero2 == '') {
               console.log('ERROR: Você deixou algum numero em branco')
               entradaDados.close();
            } else if (numero1 == 0 || numero2 == 0) {
               console.log('ERROR: Não é possivel dividir 0')
               entradaDados.close();
            } else if (isNaN(numero1) || isNaN(numero2)) {
               console.log('ERROR : Não é possivel dividir com letras!')
               entradaDados.close();
            } else {
               console.log(divisao);
            }

         })
      })
   }
})

