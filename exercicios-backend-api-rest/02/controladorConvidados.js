const convidados = require("./listaDeConvidados")


const listaCompleta = (req, res) => {
    const nome = req.query.nome

    if (!nome) {
        return res.status(200).json(convidados)
    }

    if (convidados.includes(nome)) {
        return res.status(200).json({ mensagem: 'Convidado presente.'})
    } else {
        return res.status(200).json({ mensagem: 'O convidado buscado não está presente na lista.'})
    }
}

const adicionarConvidado = (req, res) => {
    const nome = req.body.nome
    
    if(convidados.includes(nome)) {
        return res.status(200).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.'})
    }

    convidados.push(nome)

    return res.status(200).json({ mensagem: 'convidado foi adicionado', convidados })
}

const deletarConvidado = (req, res) => {
    const nome = req.params.nome
    
    if(!convidados.includes(nome)) {
        return res.json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.'})
    }

    const index = convidados.indexOf(nome)
    convidados.splice(index, 1)

    return res.json({ mensagem: 'Convidado removido.', convidados})
}



module.exports = {
    listaCompleta,
    adicionarConvidado,
    deletarConvidado
}