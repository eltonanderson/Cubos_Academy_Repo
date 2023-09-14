const livros = [
    {
      id: 1,
      titulo: "A Odisséia de Jonas",
      autor: "Thomas Crawling",
      ano: 2001,
      numPaginas: 197,
    },
    {
      id: 2,
      titulo: "Jonas e a sociedade escondida",
      autor: "Claire Crawling",
      ano: 2004,
      numPaginas: 158,
    },
  ];

function gerarId () {
    let idGerada = 1
    for (let i of livros) {
        if (i.id >= idGerada) {
            idGerada = i.id + 1
        }
    }
    return idGerada
}

module.exports = {
    livros,
    gerarId
}