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

module.exports = {isNumeroValido, isTextoValido}




