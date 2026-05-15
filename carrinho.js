const { catalogo } = require("./produtos");
const { isNumeroValido, findID, isTextoValido } = require("./validacoes");

let meuCarrinho = [];

function comprando(prompt, menuu, lista) {

    console.log("Digite o ID do produto que deseja comprar: ")
    const id_comprar = isNumeroValido(prompt("R: "))

    const validandoID = findID(id_comprar, lista)

    if(validandoID !== -1) {

        console.log("Agora, digite a quantidade que deseja")

        const quantidade_comprar = isNumeroValido(prompt("R: "))

        return adicionarItem(catalogo,validandoID, quantidade_comprar, 0.05, menuu)
    }

    else {

        console.log("Opção inválida, tente novamente!")
        return comprando(prompt)
    }

}

function adicionarItem(lista, id, quantidade, desconto, menuu) {

  
    let preco_inicial = lista[id].preco * (1.00 - desconto)
    let produto_final = preco_inicial * quantidade

    const obj = {
        nome: lista[id].nome,
        quantidade: quantidade,
        subtotal: produto_final
    }

    meuCarrinho.push(obj)
    return menuu()

}

/* function adicionarItem(nome, preco, quantidade, desconto) {

    let preco_inicial = preco * (1.00 - desconto)
    let produto_final = preco_inicial * quantidade

    const obj = {
        nome: nome,
        quantidade: quantidade,
        subtotal: produto_final
    }

    meuCarrinho.push(obj)

} */

function exibirResumo(lista, menuu) {

    let total = 0
    let quantidade = 0

    console.log("---------FINALIZAR CARRINHO---------")

    for(let i = 0; i<lista.length; i++) {

        console.log(`\nNome: ${lista[i].nome} || Quantidade: ${lista[i].quantidade} || Subtotal: R$ ${lista[i].subtotal.toFixed(2)}\n`)

        total += lista[i].subtotal
        quantidade += parseInt(lista[i].quantidade)

    }

    console.log(`\nTOTAL      QUANTIDADE:${quantidade}      TOTAL R$ ${total.toFixed(2)}\n`)
    return menuu()

}


module.exports = {adicionarItem, exibirResumo, comprando, meuCarrinho}
