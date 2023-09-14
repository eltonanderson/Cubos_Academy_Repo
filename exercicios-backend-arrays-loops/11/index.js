const original = [5, 7, 13, 17, 26, 34, 118, 245];
const novoArray = []
for (let i of original) {
    if ((i >= 10 && i <= 20) || i > 100) {
        novoArray.push(i)
    }
}
console.log(novoArray)