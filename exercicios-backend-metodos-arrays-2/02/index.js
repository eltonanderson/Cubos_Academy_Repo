const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
let arrayInvalido = false

for (let i of palavras) {
    if (i.length > 5) {
        arrayInvalido = true
    } else {
        arrayInvalido = false
    }  
}

if (arrayInvalido) {
    console.log('existe palavra inválida')
} else {
    console.log('array validado')
}