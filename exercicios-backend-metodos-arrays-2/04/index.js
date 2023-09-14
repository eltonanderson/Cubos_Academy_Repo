const numeros = [122, 4, 6, 10, 8, 44];

const resultado = numeros.every((numero) => {
    return numero % 2 === 0
})

if (resultado) {
    console.log('array válido')
} else {
    console.log('array inválido')
}