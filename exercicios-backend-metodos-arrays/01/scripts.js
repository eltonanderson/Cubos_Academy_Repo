const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
let stringDeFrutas = '';

for (i = (frutas.length - 1); i >= 0; i--) {
    if (i > 0) {
        stringDeFrutas += (frutas[i] + ', ');
    } else {
        stringDeFrutas += frutas[i];
    }
}

console.log(stringDeFrutas)