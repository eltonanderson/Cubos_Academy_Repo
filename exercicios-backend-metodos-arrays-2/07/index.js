const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

function qualARua (listaDeEnderecos, numeroCep) {
    for(i = 0; i < listaDeEnderecos.length; i++) {
        if (numeroCep === listaDeEnderecos[i].cep) {
            console.log(listaDeEnderecos[i].rua)
        }
    }
}

qualARua(enderecos, 00222444)