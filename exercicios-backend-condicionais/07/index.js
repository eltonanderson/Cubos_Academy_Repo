const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 1000000; //emCentavos

//seu código aqui
if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA")
} else if (totalDeRendimentos <= 2_855_970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}else if (totalDeRendimentos > 2_855_970) {
    console.log("PEGA LEAO")
}