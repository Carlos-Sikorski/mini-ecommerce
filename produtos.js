const { parse } = require('path');
const readline = require('readline');
const { deflate } = require('zlib');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let catalogo = [];

function cadastrarProduto(id, nome, preco) {

    let id_cadastro = id
    let nome_cadastro = nome
    let preco_cadastro = preco

    let obj_cadastro = {

        id: id_cadastro,
        nome: nome_cadastro,
        preco: preco_cadastro,

    };

    catalogo.push(obj_cadastro)

}

function listarProdutos(lista) {

    console.log('\n\n---------------LISTA DE PRODUTOS---------------\n\n')

    lista.forEach((element) => {

        console.log(`\nID: ${element.id} || Nome: ${element.nome} || Preço: ${element.preco}\n`)


    });

    voltarMenu()
}


function buscarProduto(input, lista) {

    const idSearch = parseInt(input)

    const buscandoID = lista.findIndex(element => element.id === idSearch)

    if (buscandoID === -1) {

        console.log("Cadastro não encontrado! Tente novamente")
        voltarMenu()

    }

    else {                                                                                                          

        console.log(`\nID: ${lista[buscandoID].id} || Nome: ${lista[buscandoID].nome} || Preço: ${lista[buscandoID].preco}\n`)
        voltarMenu()

    }

}

module.exports = {cadastrarProduto, listarProdutos, buscarProduto}