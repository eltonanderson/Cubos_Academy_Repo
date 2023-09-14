const express = require('express')
const { todosAlunos, buscaAlunoPorId, adicionarAluno, deletarAluno } = require('./controladores/controladorAlunos')
const routes = express()



//Routes [GET]
routes.get('/alunos', todosAlunos)
routes.get('/alunos/:id', buscaAlunoPorId)


//Routes [POST]
routes.post('/alunos', adicionarAluno)



//Routes [DELETE]
routes.delete('/alunos/:id', deletarAluno)


module.exports = routes