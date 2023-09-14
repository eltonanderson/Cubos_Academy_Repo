const idade = 23;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (possuiPatologia || idade < 12 || idade > 65 || altura < 150) {
    console.log("ACESSO NEGADO")
} else {
    if (idade < 18 || ehEstudante) {
        console.log("10 reais")
    } else {
        console.log("20 reais")
    }
}