const imoveis = require("./bancodeDados")

const listarImoveis = (req, res) => {
    res.send(imoveis)
}

const buscaPorId = (req, res) => {
    let indice = Number(req.params.id)
    let resultado = imoveis.filter((imovel) => {
        return imovel.id === indice
    })

    res.send(resultado)
}

module.exports = {
    listarImoveis,
    buscaPorId
}