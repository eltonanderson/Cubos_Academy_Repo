const numeros = [3, 24, 1, 8, 111, 7, 15];
let maiorNumero = 0
for (let i of numeros) {
    if (i > maiorNumero) {
        maiorNumero = i
    }
}
console.log(maiorNumero)