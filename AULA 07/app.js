/****************************************************
 * Objetivo: Aprender sobre o Array List
 * Data: 24/02/23
 * Autor: Vinícius Monteiro
 * Versão: 1.0
 ****************************************************/


// [] - representa o objeto do tipo array
// {} - representa o objeto do tipo JSON

const listaNomes = ['Cletion', 'Ronaldo', 'Matuê', 'Wiu', 'Teto'];

const listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Mousepad', 'Gabinete', 'HD', 'Memória RAM']


const exibirDados = function(){
console.log(listaNomes)

//Verifica o tipo de tatos do índice
// conosle.log(typeof(listaNomes))

console.log('O melhor cantor do mundo é o ' + listaNomes[2])

//Table - permite vizuaizar o conteúdo do array em tabela
console.table(listaNomes)

// Como retornar a quantidade de intens dentro de uma array
console.log(listaNomes.length)


//Percorrendo um array com while
let cont = 0; // Starts
let qtdeItens = listaNomes.length; //End

console.log('***************EXEMPLO COM WHILE****************')

while(cont < qtdeItens){
    console.log('Nome do aluno: ' + listaNomes[cont])
    cont += 1;
}

console.log('***************FIM DO EXEMPLO****************')

console.log('\n')

console.log('***************EXEMPLO COM FOR****************')

for(let cont = 0; cont < qtdeItens; cont+= 1){
    console.log('Nome do aluno: ' + listaNomes[cont])

}

console.log('***************FIM DO EXEMPLO****************')

console.log('\n')


console.log('***************EXEMPLO COM FOR****************')
listaNomes.forEach(function(nome){
    console.log('Nome do aluno: ' + nome)
});

console.log('********************FIM DO EXEMPLO**************************')


}

const manipulandoDados = function(){
    //push - adciona novos itens no final do array
    listaProdutos.push('Memória')
    listaProdutos.push('Gabinet', 'Placa mãe', 'Processador')
    console.table(listaProdutos)

    //unshift - adiciona novo produtos no início da lista
    listaProdutos.unshift('placa de vídeo', 'hd', 'ssd')
    console.table(listaProdutos)

    //pop - remove o ultimo elemento, presevando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    //shift
    listaProdutos.shift();
    console.table(listaProdutos)



    //slice- permite criar uma nova cópia de outro array
    const novoProdutos =listaProdutos.slice();
    console.log('******************************')
    console.table(novoProdutos)


    //indexOf - Permite mostrar o indice de m item
        //se o retorno fr -1, o item não existe
        //se o retorno foi >= que 0 o item existe
    
    listaProdutos.indexOf('Computer')

    //Exemplo de utilização do IndexOf
    if(listaProdutos.indexOf >= 0){
        console.log('Item encontrado')
    }else{
        
        console.log('Item não encontrado')
    }
    
};

const removendoProdutos = function(nomeProduto){
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome);
    let status = false

    //splice - remove itens do array com base índice
    //obs : devemos encaminhar um segurndo parâmetro para determinarmos quantos elementos ele vai apagar para baixo
    if(indice >= 0 ){
        listaProdutos.splice(indice, 1)
        status = true

    }else
    status =  false

    
    return status
    
}

const removedorProdutos = function(array, nomeProduto){
    let nome = nomeProduto
    let novoArray = array
    let indice = novoArray.indexOf(nome);
    let status = false

    if(indice >= 0){
        const listaProdutosReformulado = novoArray.slice()
        listaProdutosReformulado.splice(indice,1)
        console.log(listaProdutosReformulado)
        status = true
    }else{
        status = false
        console.log(status)
    }
    return status
}

removedorProdutos(listaProdutos,'Mousepad')
console.table(listaProdutos)