const usuarios = [
    {
      nome: "João",
      pets: ["Max"],
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
  ];

  function encontrarDono (pet) {
    for (let obj of usuarios) {
        for (let i of obj.pets) {
            if (i === pet) {
                return console.log(obj.nome)
            }
        }
      }
  }

  encontrarDono('Batata')