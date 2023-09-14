const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomeComLetraA = []
for (let i of nomes) {
    for (let x of i) {
        if (i[0] === 'a' || i[0] === 'A') {
            nomeComLetraA.push(i)
            break
        }
    }
}
console.log(nomeComLetraA)