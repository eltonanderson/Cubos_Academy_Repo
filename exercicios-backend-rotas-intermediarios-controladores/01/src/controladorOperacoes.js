const operacaoSomar = (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    let resultado = Number(num1) + Number(num2)

    res.send(resultado.toString())
}

const operacaoSubtrair = (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    let resultado = Number(num1) - Number(num2)

    res.send(resultado.toString())
}

const operacaoMultiplicar = (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    let resultado = Number(num1) * Number(num2)

    res.send(resultado.toString())
}

const operacaoDividir = (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    let resultado = Number(num1) / Number(num2)

    res.send(resultado.toString())
}

module.exports = {
    operacaoSomar,
    operacaoSubtrair,
    operacaoMultiplicar,
    operacaoDividir
}