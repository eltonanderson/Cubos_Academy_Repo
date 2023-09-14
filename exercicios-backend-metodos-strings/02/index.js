const cpf = "12345678900";
const cnpj = "12345678000199";

let cpfInicio = ''
let cpfFinal = ''
let cpfArray = []

let cnpjInicio = ''
let cnpjFinal = ''
let cnpjArray = []

if (cpf.length == 11) {
    console.log('CPF válido')
    cpfInicio = cpf.slice(0, (cpf.length - 2))
    cpfFinal = cpf.slice(cpf.length - 2)

    for (i = 0; i < 3; i++) {
        cpfArray[i] = cpfInicio.slice(0 + (i * 3), 3 + (i * 3))
    }

    cpfArray[cpfArray.length] = cpfFinal
    console.log(`${cpfArray[0]}.${cpfArray[1]}.${cpfArray[2]}-${cpfArray[3]}`)
} else {
    console.log('CPF inválido')
}

if (cnpj.length == 14) {
    console.log('CNPJ válido')
    cnpjInicio = cnpj.slice(0, 2)
    cnpjFinal = cnpj.slice(cnpj.length - 2)

    for (i = 0; i < 2; i++) {
        cnpjArray[i] = cnpj.slice(2 + (i * 3), 5 + (i * 3))
    }
    cnpjArray.unshift(cnpjInicio)
    cnpjArray.push(cnpj.slice(8, 12))
    cnpjArray.push(cnpjFinal)
    //console.log(cnpjArray)
    console.log(`${cnpjArray[0]}.${cnpjArray[1]}.${cnpjArray[2]}/${cnpjArray[3]}-${cnpjArray[4]}`)
} else {
    console.log('CNPJ inválido')
}