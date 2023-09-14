const express = require('express')
const { listarLivros, listarLivrosPorId, adicionarLivro, substituirLivro, atualizarLivro, deletarLivro } = require('./controladorLivros')
const route = express.Router()

//Route - Verb [GET]
route.get('/livros', listarLivros)
route.get('/livros/:id', listarLivrosPorId)

//Route - Verb [POST]
route.post('/livros', adicionarLivro)

//Route - Verb [PUT]
route.put('/livros/:id', substituirLivro)

//Route - Verb [PATCH]
route.patch('/livros/:id', atualizarLivro)

//Route - Verb [DELETE]
route.delete('/livros/:id', deletarLivro)

module.exports = route