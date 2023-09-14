const email = "aluno@cubos.academy";
let emailValido = true

if (!email.includes('@') || (!email.includes('.')) || (email[0] === '.') || (email[email.length - 1] === '.')) {
    emailValido = false;
}

if (emailValido) {
    console.log('E-mail válido')
} else {
    console.log('E-mail inválido')
}