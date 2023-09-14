let novaInfo = []
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
for (let i of usuarios) {
novaInfo.push({
    ...i,
    maior_idade: (i.idade > 17 ? true : false)
})
}
console.log(novaInfo)