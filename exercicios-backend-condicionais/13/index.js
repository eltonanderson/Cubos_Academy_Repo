//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorDoDesconto

if (tipoDePagamento === "credito") {
    valorDoDesconto = 5
} else if (tipoDePagamento === "cheque") {
    valorDoDesconto = 3
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    valorDoDesconto = 10
} 

let valorFinal = ((valorDoProduto - (valorDoProduto * valorDoDesconto / 100)) / 100).toFixed(2)

console.log(`Valor a ser pago: R$${valorFinal}`)