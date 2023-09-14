const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0
for (let i of numeros) {
    let resto = i % 2
    if (resto === 0) {
        soma += i
    }
}
console.log(soma)
