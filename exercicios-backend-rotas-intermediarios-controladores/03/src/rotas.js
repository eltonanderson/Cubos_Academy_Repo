const express = require('express')
const { listarImoveis, buscaPorId } = require('./controladorImoveis')
const rotas = express.Router()

rotas.get('/imoveis', listarImoveis)
rotas.get('/imoveis/:id', buscaPorId)



module.exports = rotas