let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, '0')
console.log(identificador)

const nomeArray = nome.split(' ');
let nomeFormatado = ''
for (let i of nomeArray) {
    let novoNome = ''
    for (j = 0; j < i.length; j++) {
        if (j === 0) {
            novoNome = i[j].toLocaleUpperCase();
        } else {
            novoNome += i[j].toLocaleLowerCase();
        }
    }
    nomeFormatado = nomeFormatado + novoNome + ' ';
}
console.log(nomeFormatado.trim())

email = email.trim();
console.log(email)