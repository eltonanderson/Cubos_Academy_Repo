const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "baixinho";

if(apelido) {
    console.log(apelido)
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome)
} else if (!sobrenome && !apelido) {
    console.log(primeiroNome)
}