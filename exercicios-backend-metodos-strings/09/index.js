let nome = 'Guido Cerqueira';
let apelido = '@'

nome = nome.replaceAll(' ', '');

for (let i of nome) {
    apelido += i.toLocaleLowerCase()
}

console.log(apelido.slice(0, 13))