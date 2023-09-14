const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

let arrayDeCarros = [];

function listaCarros (nome, pos) {
    arrayDeCarros = nome.slice(pos, (pos + 3))
    console.log(arrayDeCarros)
}

listaCarros(nomes, posicao);