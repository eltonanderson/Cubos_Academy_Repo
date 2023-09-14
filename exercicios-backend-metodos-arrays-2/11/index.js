const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const filtrado = nomes.filter((nome) => {
        for (let i of nome) {
            return (i === 'a' || i === 'A')
        } 
  })

  console.log(filtrado)