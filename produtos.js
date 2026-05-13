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

        const nome = lista[buscandoID].nome

        rl.question(`Tem certeza que deseja deletar o ${nome}? [1]SIM [2]NÃO\n`, (input_1) => {

            const escolha = parseInt(input_1)

            switch (escolha) {

                case 1:
                    lista.splice(buscandoID, 1)
                    voltarMenu()
                    break

                case 2:
                    console.log('Exclusão de produto *cancelada*.')
                    voltarMenu()
                    break

                default:
                    console.log('Opção inválida, tente novamente!')
                    voltarMenu()

            }

        })

    }

}