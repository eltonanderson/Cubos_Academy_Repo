const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
const grupo1 = [];
const grupo2 = [];

function divisaoGrupos (nome, numero) {
    for (i = 0; i < nome.length; i++) {
        if (grupo1.length < numero) {
            grupo1.push(nome[i]);
        } else {
            grupo2.push(nome[i]);
        }
    }
    console.log(grupo1)
    console.log(grupo2)
}

divisaoGrupos(nomes, tamanhoDoGrupo);