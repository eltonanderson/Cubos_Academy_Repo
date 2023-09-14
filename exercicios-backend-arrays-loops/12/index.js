//const filaDeDentro = ["Jose", "Maria", "Joao"];
//const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

// seu codigo aqui

if (filaDeDentro.length < 5) {
    let espacoVazio = 5 - filaDeDentro.length
    for (i = 0; i < espacoVazio; i++) {
        if (filaDeFora.length > 0) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift()
        }
    }
}
console.log(filaDeDentro)
console.log(filaDeFora)