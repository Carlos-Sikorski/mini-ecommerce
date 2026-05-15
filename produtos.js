let catalogo = [];

const { isNumeroValido, isTextoValido, findID } = require('./validacoes')

function cadastrarProduto(prompt, menuu) {

    const nome = isTextoValido(prompt("Informe o nome do produto: "))
    if (nome === false) {
        console.log("digite um nome válido!")
        return cadastrarProduto(prompt)
    }
    const preco = isNumeroValido(prompt("Informe o preço unitário do produto: "))

    let id_cadastro = catalogo.length + 1
    let nome_cadastro = nome
    let preco_cadastro = preco

    let obj_cadastro = {

        id: id_cadastro,
        nome: nome_cadastro,
        preco: preco_cadastro,

    };

    catalogo.push(obj_cadastro)
    console.log(catalogo)

    // return menu()
    return menuu()
}

function listarProdutos(lista) {

    console.log('\n\n---------------LISTA DE PRODUTOS---------------\n\n')

    lista.forEach((element) => {

        console.log(`\nID: ${element.id} || Nome: ${element.nome} || Preço: ${element.preco}\n`)


    });

}


function buscarProduto(lista, menuu, prompt) {

    listarProdutos(lista)

    console.log("Digite o ID do produto que deseja consultar ")
    const input = parseInt(prompt("R: "))

    const validandoID = findID(input, lista)

    if(validandoID !== -1) {

        console.log(`\nID: ${lista[validandoID].id} || Nome: ${lista[validandoID].nome} || Preço: ${lista[validandoID].preco}\n`)
        return menuu()

    }

    else {

        console.log("Cadastro não encontrado! Tente novamente")
        return menuu()
    }

}

module.exports = { cadastrarProduto, listarProdutos, buscarProduto, catalogo }