const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: valor, //aqui será o valor informado no argumento do método depositar
            }
        )
        let valorEmReais = (valor/100).toFixed(2)
        return console.log(`Deposito de R$${valorEmReais} realizado para o cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            this.saldo -= valor
            this.historicos.push(
                {
                    tipo: "Saque",
                    valor: valor, //aqui será o valor informado no argumento do método depositar
                }
            )
            let valorEmReais = (valor/100).toFixed(2)
            return console.log(`Saque de R$${valorEmReais} realizado para o cliente: ${this.nome}`)   
        }     
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo:R$${this.saldo/100}`)
        console.log('Histórico:')
        for (i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de $${this.historicos[i].valor / 100}`)
        }
    }
}

contaBancaria.depositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato()