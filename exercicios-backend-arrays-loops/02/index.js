const letras = ["A", "a", "B", "C", "E", "e"];
let numeroDeLetras = 0
for (let i of letras) {
    if (i === 'E' || i === 'e') {
        numeroDeLetras++
    }
}

if (numeroDeLetras === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
} else {
    console.log(`Foram encontradas ${numeroDeLetras} letras "E" ou "e".`)
}