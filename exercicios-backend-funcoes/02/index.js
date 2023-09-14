const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log('Este carro já está ligado.')
        } else {
            this.ligado = true
            console.log(`Carro Ligado`)
        }
        
    },
    desligar: function () {
        if (this.ligado) {
            this.ligado = false
            this.velocidade = 0
            console.log(`Carro desligado. Velocidade = ${this.velocidade}km/h`)
        } else {
            console.log(`Este carro já está desligado.`)
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10
            console.log(`Carro Acelerou. Velocidade atual de ${this.velocidade}km/h`)
        } else {
            console.log('Não é possível acelerar um carro desligado.')
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            this.velocidade -= 10
            console.log(`Carro Desacelerou. Velocidade atual de ${this.velocidade}km/h`)
        } else {
            console.log('Não é possível desacelerar um carro desligado.')
        }
    }
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()