const prompt = require('prompt-sync')()

const { adicionarItem, exibirResumo, comprando, meuCarrinho} = require('./carrinho.js')
const { cadastrarProduto, listarProdutos, buscarProduto, catalogo } = require('./produtos.js')
const { isNumeroValido, isTextoValido } = require('./validacoes.js')

function menu() {

    console.log("Digite a opção desejada: [1]Cadastrar Produto [2]Listar Catalogo [3]Buscar Produto [4]Adicionar Carrinho [5]Exibir Resumo [6]Menu [0]Sair")

    const id =
        parseInt(prompt("R: "))

    switch (id) {

        case 1:
            cadastrarProduto(prompt, menu)
            break;

        case 2:
            listarProdutos(catalogo)
            menu()
            break;

        case 3:
            buscarProduto(catalogo, menu, prompt)
            break;

        case 4:comprando(prompt, menu, catalogo)

            break;

        case 5:
            exibirResumo(meuCarrinho, menu)
            break;

        case 6:
            menu()
            break;

        case 0:
            console.log("Até a próxima!")
            return;


        default:
            console.log("Opção inválida! Tente novamente!")
            menu()

    }

}

menu()

module.exports = {
    menu
}