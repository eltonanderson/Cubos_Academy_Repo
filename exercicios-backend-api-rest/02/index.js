const express = require('express')
const route = require('./route')

const server = express()

server.use(express.json())

server.use(route)

server.listen(3000, () => console.log('Servidor rodando'))