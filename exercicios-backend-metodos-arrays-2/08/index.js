const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
let novaPalavra = '';
let cestaFrutas = [];

for (i = 0; i < frutas.length; i++) {
    for (j = 0; j < frutas[i].length; j++) {
        if (j === 0) {
            novaPalavra += (i + ' - ' + frutas[i][j].toUpperCase());
        } else {
            novaPalavra += frutas[i][j].toLowerCase()
        }
    }
    cestaFrutas.push(novaPalavra);
    novaPalavra = ''
}

console.log(cestaFrutas)