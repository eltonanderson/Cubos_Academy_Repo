const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i of usuarios) {
    if (i.pets.length === 0) {
        console.log(`Sou ${i.nome} e não tenho pets`)
    } else if (i.pets.length === 1) {
        console.log(`Sou ${i.nome} e tenho ${i.pets.length} pet`)
    }  else if (i.pets.length >= 2) {
        console.log(`Sou ${i.nome} e tenho ${i.pets.length} pets`)
    }
}