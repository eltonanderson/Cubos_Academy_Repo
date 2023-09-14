const express = require('express')
const {deQuemEhAVez, removerJogador, adicionarJogador} = require('./controladorJogadores')

const app = express()
const port = 8000

app.get('/', deQuemEhAVez)
app.get('/remover', removerJogador)
app.get('/adicionar', adicionarJogador)


app.listen(port, () => console.log(`App listening on port ${port}!`))