
const validePass = 'cubos123'

const userAuth = (req, res, next) => {
    const senha = req.query.senha
    if (validePass !== senha) {
        return res.status(401).json({ mensagem: "Unauthorized - não autorizado"})
    }

    console.log('Senha validada')
    
    next()
}

module.exports = userAuth