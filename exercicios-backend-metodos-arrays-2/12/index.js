const pessoas = [
    {
      nome: "Antonio",
      idade: 16,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 18,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];
  
const progrMaiorde20 = pessoas.filter((pessoa) => {
    return pessoa.idade >= 20
})

const jornalista = pessoas.filter((pessoa) => {
    return (pessoa.profissao === 'Jornalista' && pessoa.idade >= 30)
})

const jovens = pessoas.filter((pessoa) => {
    return ((pessoa.profissao === 'Jornalista' || pessoa.profissao === 'Programador') && pessoa.idade <= 29)
})

console.log(progrMaiorde20)
console.log(jornalista)
console.log(jovens)