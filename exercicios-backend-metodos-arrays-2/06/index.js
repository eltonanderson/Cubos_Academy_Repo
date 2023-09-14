const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
  ];

const oitoCarac = [];

for (let i of cidades) {
    if (i.length <= 8) {
        oitoCarac.push(i)
    }
}

console.log(oitoCarac)