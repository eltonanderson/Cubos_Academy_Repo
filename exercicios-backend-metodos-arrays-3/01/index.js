const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];


const crescente = numeros.sort((a, b) => a - b)

console.log(crescente)

const decrescente = numeros.sort((a, b) => b - a)

console.log(decrescente)

const uniCode = numeros.sort()

console.log(uniCode)

const fruCres = frutas.sort((letra1, letra2) => {
    return letra1[0].localeCompare(letra2[0])
})

console.log(fruCres)

const fruDecre = frutas.sort((letra1, letra2) => {
    return letra2[0].localeCompare(letra1[0])
})

console.log(fruDecre)

const fruLeng = frutas.sort((letra1, letra2) => {
    return letra1.length - letra2.length
})

console.log(fruLeng)