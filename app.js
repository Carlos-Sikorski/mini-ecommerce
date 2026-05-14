const prompt = require('prompt-sync')()

const { adicionarItem, exibirResumo } = require('./carrinho.js')
const { cadastrarProduto, listarProdutos, buscarProduto } = require('./produtos.js')
const { isNumeroValido, isTextoValido } = require('./validacoes.js')

function menu() {

    const id = 
    parseInt(prompt("Digite a opção desejada: [1]Cadastrar Produto [2]Listar Catalogo [3]Adicionar Item [4]Exibir Menu [0]Sair R: "))
        console.log("here " + id)
    switch (id) {

        case 1:
            cadastrarProduto(prompt, menu)
            break;

        case 2:
            listarProdutos()
            break;

        case 3:
            adicionarItem()
            break;

        case 4:
            exibirResumo()
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

module.exports={ 
    menu 
}