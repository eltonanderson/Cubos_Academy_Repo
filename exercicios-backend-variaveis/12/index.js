let montanteFinal
let capitalInicial
let numeroDeMeses
let taxaDeJuros = ((montanteFinal/capitalInicial) ** (1/numeroDeMeses)) - 1
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após ${numeroDeMeses} meses você teve que pagar ${montanteFinal} reais.`)