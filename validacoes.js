function isNumeroValido(input) {

    if (isNaN(input)) {

        return false

    } else if (input >= 0) {

        return true

    }

}

function isTextoValido(input) {

    let input1 = input.trim()

    if (input1 === "") {

        console.log("falso");
    }

    else {
        console.log("verdade")
    }

}

isTextoValido("       ")


