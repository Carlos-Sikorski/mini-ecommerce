function isNumeroValido(input) {

    if (isNaN(input)) {

        return false

    } else if (input >= 0) {

        return input

    }

}

function isTextoValido(input) {

    let input1 = input.trim()

    if (input1 === ""|| !isNaN(input1)) {

        return false;
    }

    else {
        return input;
    }

}

function findID(input, lista) {

    const idSearch = parseInt(input)

    const buscandoID = lista.findIndex(element => element.id === idSearch)

    if (buscandoID === -1) {
        console.log(buscandoID)
        return buscandoID

    }

    else {                                                                                                          

        return buscandoID

    }

}

module.exports = {isNumeroValido, isTextoValido, findID}




