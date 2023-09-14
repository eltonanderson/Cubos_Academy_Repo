const numeros = [8, 11, 4, 1];

// seu codigo aqui
let maiorNumero = 0
let menorNumero

for (let i of numeros) {
    if (i > maiorNumero) {
        maiorNumero = i
        menorNumero = i
    } 
}
for (let i of numeros) {
    if (i < menorNumero) {
        menorNumero = i
    }
}
let diferenca = maiorNumero - menorNumero
console.log(diferenca)
