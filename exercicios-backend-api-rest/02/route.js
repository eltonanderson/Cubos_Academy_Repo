const express = require('express')
const { listaCompleta, adicionarConvidado, deletarConvidado } = require('./controladorConvidados')
const route = express.Router()


//Route [GET]
route.get('/convidados', listaCompleta)

//Route [POST]
route.post('/convidados', adicionarConvidado)

//Route [DELETE]
route.delete('/convidados/:nome', deletarConvidado)


module.exports = route