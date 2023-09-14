//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 600;

let valorDaParcela = ((valorDoProduto / quantidadeDoParcelamento) / 100).toFixed(2)
let parcelasPagas = valorPago / valorDaParcela
let parcelasRestantes = quantidadeDoParcelamento - parcelasPagas

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDaParcela}`)

