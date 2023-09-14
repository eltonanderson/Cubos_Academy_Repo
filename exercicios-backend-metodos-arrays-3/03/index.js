const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

let maiorNumero = numeros[0]

const maiorInteiro = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    if(elementoAtual > maiorNumero) {
        maiorNumero = elementoAtual
    } return maiorNumero
})

console.log(maiorInteiro)