const {alunosDB } = require("../dados/alunosDB")
let { alunoId } = require('../dados/alunosDB')


const todosAlunos = (req, res) => {
    return res.status(200).json(alunosDB)
}

const buscaAlunoPorId = (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'o ID deve ser um número válido'})
    }

    const aluno = alunosDB.find((elemento) => {
        return elemento.id === id
    })

    if (!aluno) {
       return res.status(404).json({ mensagem: 'o aluno não foi encontrado'})
    }

    return res.status(200).json(aluno)
}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body
    
    if(nome === '' || nome === ' ' || nome === undefined) {
        return res.status(400).json({ mensagem: 'Nome inválido'})
    }

    if(sobrenome === '' || sobrenome === ' ' || sobrenome === undefined) {
        return res.status(400).json({ mensagem: 'Sobrenome inválido'})
    }

    if(curso === '' || curso === ' ' || curso === undefined) {
        return res.status(400).json({ mensagem: 'Curso inválido'})
    }

    if (idade < 18 || idade === undefined) {
        return res.status(400).json({ mensagem: 'Aluno menor de idade' })
    }

    const novoAluno = {
        id: alunoId++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunosDB.push(novoAluno)

    res.status(201).send()
}

const deletarAluno = (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'o ID deve ser um número válido'})
    }

    const aluno = alunosDB.find((elemento) => {
        return elemento.id === id
    })

    if (!aluno) {
       return res.status(404).json({ mensagem: 'o aluno não foi encontrado'})
    }

    const index = alunosDB.indexOf(aluno)

    alunosDB.splice(index, 1)

    res.status(200).json(aluno)
}


module.exports = {
    todosAlunos,
    buscaAlunoPorId,
    adicionarAluno,
    deletarAluno
}