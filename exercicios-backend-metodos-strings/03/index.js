const texto = "Aprenda programar do zero na Cubos Academy";

let novoTexto = ''

for (let i of texto) {
    let textoMinusculo = i.toLocaleLowerCase()
    if(i === ' ') {
        textoMinusculo = i.replace(' ', '-')
    }
    novoTexto += textoMinusculo
}


novoTexto = novoTexto.replace(' ', '-')

console.log(novoTexto)