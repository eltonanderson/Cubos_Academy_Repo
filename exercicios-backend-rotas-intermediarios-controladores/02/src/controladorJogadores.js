const jogadores = require("./bancoDeDados")

let index = 0

const deQuemEhAVez = (req, res) => {
    if(index < jogadores.length) {
        index += 1
    } else {
        index = 1
    }

    res.send(`É a vez de ${jogadores[index - 1]} jogar!`)
}

const removerJogador = (req, res) => {
    let indice = Number(req.query.indice)

    if(jogadores[indice] === undefined) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    } else {
        console.log(`Jogador do indice=${indice} nome=${jogadores[indice]} removido`)
        jogadores.splice(indice, 1)
        
        res.send(jogadores)
    }   
}

const adicionarJogador = (req, res) => {
    let indice = req.query.indice
    let nome = req.query.nome
    let nomeFormatado = ''

    if (indice <= jogadores.length) {    
        for(i = 0; i < nome.length; i++) {
            if (i === 0) {
                nomeFormatado = nome[i].toUpperCase()
            } else {
                nomeFormatado += nome[i].toLowerCase()
            }
        }


        if(indice === undefined) {
            jogadores.push(nomeFormatado)
            res.send(jogadores)
        } else {
            jogadores.splice(Number(indice), 0, nomeFormatado)
            res.send(jogadores)
        }
    } else {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    }

    console.log(nomeFormatado)
    console.log(indice)
}

module.exports = {deQuemEhAVez, removerJogador, adicionarJogador}