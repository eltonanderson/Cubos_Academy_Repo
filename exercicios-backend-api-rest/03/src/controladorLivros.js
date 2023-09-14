const { livros, gerarId } = require("./livrosDataBase")

const listarLivros = (req, res) => {
    const todosOsLivros = livros

    res.json(todosOsLivros)
}

const listarLivrosPorId = (req, res) => {
    const id = Number(req.params.id)
    
    if (isNaN(id)) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID da URL não é um número válido.'})
    }

    const livro = livros.find((elemento) => {
        return elemento.id === id
    })

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.'})
    }

    return res.json(livro)
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    let id = gerarId()

    const livro = {
        id,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro)

    res.json(livro)
}

const substituirLivro = (req, res) => {
    const id = Number(req.params.id)
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = livros.find((elemento) => {
        return elemento.id === id
    })

    if (!livro) return res.status(404).json({ mensagem: 'Não existe livro a ser substituído para o ID informado.'})

    livro.id = id
    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.json({mensagem: 'Livro substituído.'})

}

const atualizarLivro = (req, res) => {
    const id = Number(req.params.id)
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = livros.find((elemento) => {
        return elemento.id === id
    })

    if(!livro) return res.status(404).json({ mensagem: 'Não existe livro a ser atualizado para o ID informado.'})

    if(titulo) livro.titulo = titulo
    if(autor) livro.autor = autor
    if(ano) livro.ano = ano
    if(numPaginas) livro.numPaginas = numPaginas

    return res.json({mensagem: 'Livro alterado.'})
}

const deletarLivro = (req, res) => {
    const id = Number(req.params.id)

    const livro = livros.find((elemento) => {
        return elemento.id === id
    })

    if(!livro) return res.status(404).json({ mensagem: 'Não existe livro a ser removido para o ID informado.'})

    const index = livros.indexOf(livro)
    livros.splice(index, 1)

    return res.json({mensagem: 'Livro removido.'})
}

module.exports = {
    listarLivros,
    listarLivrosPorId,
    adicionarLivro,
    substituirLivro,
    atualizarLivro,
    deletarLivro
}