const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Fortaleza"
  ];
let numeroDeCarac = ''
const maiorString = cidades.reduce((acumulador, elementoAtual, indice, array) => {
        if (elementoAtual.length >= numeroDeCarac.length) {
            numeroDeCarac = elementoAtual
        } return numeroDeCarac
})

console.log(maiorString)