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

/**
 * JSON É COMPOSTO POR :chave ( atributo ) e valor
 * EXEMPLO:  {nome: 'José', celular : '11989829145' , email : 'josémuitocria@gmailcom'}
 * 
 */
const exibirDados = function () {
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

    while (cont < qtdeItens) {
        console.log('Nome do aluno: ' + listaNomes[cont])
        cont += 1;
    }

    console.log('***************FIM DO EXEMPLO****************')

    console.log('\n')

    console.log('***************EXEMPLO COM FOR****************')

    for (let cont = 0; cont < qtdeItens; cont += 1) {
        console.log('Nome do aluno: ' + listaNomes[cont])

    }

    console.log('***************FIM DO EXEMPLO****************')

    console.log('\n')


    console.log('***************EXEMPLO COM FOR EACH****************')
    listaNomes.forEach(function (nome) {
        console.log('Nome do aluno: ' + nome)
    });

    console.log('********************FIM DO EXEMPLO**************************')


}

const manipulandoDados = function () {
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

    //shift - remove o primeiro elemento
    listaProdutos.shift();
    console.table(listaProdutos)



    //slice- permite criar uma nova cópia de outro array
    const novoProdutos = listaProdutos.slice();
    console.log('******************************')
    console.table(novoProdutos)


    //indexOf - Permite mostrar o indice de m item
    //se o retorno fr -1, o item não existe
    //se o retorno foi >= que 0 o item existe

    listaProdutos.indexOf('Computer')

    //Exemplo de utilização do IndexOf
    if (listaProdutos.indexOf >= 0) {
        console.log('Item encontrado')
    } else {

        console.log('Item não encontrado')
    }

};

const removendoProdutos = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome);
    let status = false

    //splice - remove itens do array com base índice
    //obs : devemos encaminhar um segurndo parâmetro para determinarmos quantos elementos ele vai apagar para baixo
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true

    } else
        status = false


    return status

}

const removedorProdutos = function (array, nomeProduto) {
    let nome = nomeProduto
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status = false

    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    if (status)
        return status
    else
        return status
}

const listagemProdutos = function () {

    // Forma número 1 de como criar um JSON
    //  let listProdutosJSON = {produtos : listaProdutos, nomes : listaNomes}
    // let listProdutosJSON = {};

    // Forma número 2 de como criar o json ( adcionando os seus valores no meio do seu codigo)

    // listProdutosJSON.produtos = listaProdutos
    // listProdutosJSON.nomes = listaNomes

    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[3]);
    // console.log(listProdutosJSON.nomes[2])


    let listProdutosJSON = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 58, marca: 'AlianWare', valor: 2700, codigo: 1 },
        { nome: 'Monitor', quantidade: 125, marca: 'ASUS', valor: 1970, codigo: 2 },
        { nome: 'Teclado', quantidade: 238, marca: 'Husky', valor: 350, codigo: 3 },
        { nome: 'Teclado', quantidade: 92, marca: 'Logitech', valor: 200, codigo: 4 },
        { nome: 'Teclado', quantidade: 97, marca: 'Razer', valor: 200, codigo: 5 },
        { nome: 'Teclado', quantidade: 92, marca: 'Redragon', valor: 200, codigo: 6 },
        { nome: 'Headset', quantidade: 30, marca: 'HyperX', valor: 700, codigo: 7 },
        { nome: 'Headset', quantidade: 159, marca: 'Havit', valor: 200, codigo: 8 }
    ]

    listProdutosJSON.produtos = listProdutosArray

    //Arrays para cores 
    let listCoresAlianwareArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresAsusArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Branco', 'Rosa', 'Azul']
    let listCoresHeadsetArray = ['Preto', 'Branco', 'Azul', 'Rosa', 'Amarelo', 'Roxo', 'Vermelho']

    //Arrays para modelos 
    let listModeloMonitorArray = ['LCD', 'LED', 'OLED', '4K', 'IPS']
    let listModeloTeclado = ['Mecânico', 'Semi=mecânico', 'Membrama', 'Óptico']
    


    listProdutosJSON.produtos[0].cores = listCoresAlianwareArray
    listProdutosJSON.produtos[1].cores = listCoresAsusArray
    listProdutosJSON.produtos[2].cores = listCoresTecladoArray
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray
    listProdutosJSON.produtos[6].cores = listCoresHeadsetArray
    listProdutosJSON.produtos[7].cores = listCoresHeadsetArray

    //adicionar modeos ao monitores 
    listProdutosJSON.produtos[0].modelos = listModeloMonitorArray
    listProdutosJSON.produtos[1].modelos = listModeloMonitorArray

    //Adcionar modelos do teclado
    listProdutosJSON.produtos[2].modelos = listModeloTeclado
    listProdutosJSON.produtos[3].modelos = listModeloTeclado
    listProdutosJSON.produtos[4].modelos = listModeloTeclado
    listProdutosJSON.produtos[5].modelos = listModeloTeclado

    // let listaDeProdutosQnt = listProdutosJSON.produtos.length
    
    // for(let contador = 0; contador < listaDeProdutosQnt; contador++){
    //     console.log('Nome do produto: ' + listProdutosJSON.produtos[contador].nome + '\n' + 'Marca: ' + listProdutosJSON.produtos[contador].marca + '\n' + 'Preço: ' + listProdutosJSON.produtos[contador].valor + '\n')        
    // }

    listProdutosJSON.produtos.forEach(function(item){
        console.log('Nome produto: ' +  item.nome)
        console.log('Marca: ' + item.marca)
        console.log('Valor: ' + item.valor)
        console.log('Disponíve nas cores: ')
        item.cores.forEach(function(productColor){
            
            console.log(productColor)
            
        })
        console.log('Modelos Disponíveis: ')

        if(item.modelos != undefined){
            item.modelos.forEach(function(modelProduct){
                console.log(modelProduct)
            })
        }else{
            console.log('Modelo único')
        }
        console.log('\n')
    })

    // console.log('Nome do produto: ' + listProdutosJSON.produtos[0].nome)
    // console.log('Marca: ' + listProdutosJSON.produtos[0].marca)
    // console.log('Valor: ' + listProdutosJSON.produtos[0].valor)
    // console.log('Cor: ' + listProdutosJSON.produtos[0].cores[2])
    // console.log('Modelo: ' + listProdutosJSON.produtos[0].modelos[2])
    // console.log('Quantida: ' + listProdutosJSON.produtos[0].quantidade)
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1].nome)
    // console.log(listProdutosJSON.produtos[0].marca)
    // console.log(listProdutosJSON.produtos[0])
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.produtos[2])
    // console.log(listProdutosJSON.produtos[3])
    // console.log(listProdutosJSON.produtos[4])
    // console.log(listProdutosJSON.produtos[5])
    // console.log(listProdutosJSON.produtos[6])
    // console.log(listProdutosJSON.produtos[7])
    // console.log(listProdutosJSON.produtos[8])
}
// console.log(removedorProdutos(listaProdutos,'Mousepad'))
// console.table(listaProdutos)


listagemProdutos();