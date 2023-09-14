const nomeArquivo = 'Foto da Familia.jpeg';
const formatoValido = ['jpg', 'jpeg', 'gif', 'png'];
let arquivoValido = false;

const formato = nomeArquivo.split('.');

for (let i of formatoValido) {
    if (i === formato[1]) {
        arquivoValido = true;
    } 
}

if (arquivoValido) {
    console.log('Arquivo válido');
} else {
    console.log('Arquivo inválido');
}