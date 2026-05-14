meuCarrinho = [];

function adicionarItem(lista, id, quantidade, desconto, prompt) {

    

    let preco_inicial = lista[produto].preco * (1.00 - desconto)
    let produto_final = preco_inicial * quantidade

    const obj = {
        nome: lista[produto].nome,
        quantidade: quantidade,
        subtotal: produto_final
    }

    meuCarrinho.push(obj)

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

function exibirResumo(lista) {

    let total = 0
    let quantidade = 0

    console.log("---------FINALIZAR CARRINHO---------")

    for(let i = 0; i<lista.length; i++) {

        console.log(`\nNome: ${lista[i].nome} || Quantidade: ${lista[i].quantidade} || Subtotal: R$ ${lista[i].subtotal}\n`)

        total += lista[i].subtotal
        quantidade += lista[i].quantidade

    }

    console.log(`\nTOTAL      QUANTIDADE:${quantidade}      TOTAL R$ ${total}\n`)

}

module.exports = {adicionarItem, exibirResumo}
