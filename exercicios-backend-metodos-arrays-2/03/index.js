const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const vendaProibida = ['cerveja', 'vodka'];
let listaOk = true;

for (let i of vendaProibida) {
    if (palavras.some((palavra) => {
        return palavra === i
    })) {
        listaOk = false;
    }
}

if (listaOk) {
    console.log('tudo certo, vamos as compras!');
} else {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
}