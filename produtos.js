let catalogo = [];

const {isNumeroValido, isTextoValido} = require('./validacoes')

function cadastrarProduto(prompt, menuu) {

    const nome = isTextoValido(prompt("Informe o nome do produto: "))
    if(nome === false) {
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

function listarProdutos(lista, menuu) {

    console.log('\n\n---------------LISTA DE PRODUTOS---------------\n\n')

    lista.forEach((element) => {

        console.log(`\nID: ${element.id} || Nome: ${element.nome} || Preço: ${element.preco}\n`)


    });

    return menuu()
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

module.exports = {cadastrarProduto, listarProdutos, buscarProduto, catalogo}